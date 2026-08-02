#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
解析手册 index.md 的嵌套目录 ( `  * [text](link.md#anchor)` 项目符号列表)，
生成 VitePress 侧边栏配置 (TS 文件)。

- 缩进层级 -> 嵌套 items
- 链接去掉 .md 与 #anchor，改为 VitePress 路径 (/manual-zh/Page)
- 父节点同时保留 link 与 items（既是页面又是可展开分组）
"""
import os
import re
import sys
import json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")
VITEPRESS = os.path.join(DOCS, ".vitepress")

BULLET_RE = re.compile(r'^(?P<indent>\s*)\*\s+\[(?P<text>[^\]]+)\]\((?P<link>[^)]+)\)')


def parse_index(path):
    items = []
    with open(path, encoding="utf-8") as f:
        for line in f:
            m = BULLET_RE.match(line.rstrip("\n"))
            if not m:
                continue
            indent = len(m.group("indent").replace("\t", "    "))
            depth = indent // 2
            link = m.group("link").strip()
            text = m.group("text").strip()
            items.append((depth, text, link))
    return items


def build_tree(items, path_prefix):
    root = []
    stack = []  # (depth, node)
    for depth, text, link in items:
        # 仅处理同目录相对 .md 链接（忽略外部/特殊链接）
        if link.startswith("http") or link.startswith("#"):
            continue
        file_part = link.split("#", 1)[0]
        if not file_part.endswith(".md"):
            continue
        page = file_part[:-3]  # 去掉 .md
        node = {"text": text, "link": path_prefix + page}
        while stack and stack[-1][0] >= depth:
            stack.pop()
        if not stack:
            root.append(node)
        else:
            parent = stack[-1][1]
            parent.setdefault("items", []).append(node)
        stack.append((depth, node))
    return root


def emit(prefix, tree, out_path):
    # 生成 TS：export const <prefix> = <json>;
    js = json.dumps(tree, ensure_ascii=False, indent=2)
    # 在 link 前加 prefix 路径
    # 因为 prefix 需要拼到每个 link 上，这里直接后处理字符串
    # tree 里 link 是 "Introduction"，需要变成 "/manual-zh/Introduction"
    content = "export const %s = %s;\n" % (prefix, js)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)
    # 统计节点数
    def count(nodes):
        c = 0
        for n in nodes:
            c += 1
            c += count(n.get("items", []))
        return c
    return count(tree)


def main():
    specs = [
        ("docs/manual-zh/index.md", "sidebar-zh.ts", "sidebarZh", "/manual-zh/"),
        ("docs/manual-en/index.md", "sidebar-en.ts", "sidebarEn", "/manual-en/"),
    ]
    for rel, fname, var, prefix in specs:
        idx = os.path.join(ROOT, rel)
        if not os.path.isfile(idx):
            print(f"[WARN] 缺少 {idx}", file=sys.stderr)
            continue
        tree = build_tree(parse_index(idx), prefix)
        out = os.path.join(VITEPRESS, fname)
        n = emit(var, tree, out)
        print(f"[OK] {rel} -> .vitepress/{fname}  ({n} 个侧边栏节点)")


if __name__ == "__main__":
    main()
