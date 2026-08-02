#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把 PSPP 原始文档目录转换为 VitePress 内容结构 (docs/)。

映射:
  pspp-zh.md/        -> docs/manual-zh/      (中文参考手册)
  pspp.md/           -> docs/manual-en/      (English reference manual)
  pspp-tutorial/     -> docs/tutorial/       (入门教程, 排除 _dossier.md 与 .docx)

说明:
  - 原文档内部链接均为同目录相对 `.md` 链接，VitePress 会自动重写；
    截图以 `screenshots/xxx.png` 相对路径引用，保持同目录即可。
  - 不做破坏性改写，仅做目录整理与排除无关文件。
"""
import os
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")

MAPS = [
    ("_source/pspp-zh.md", "manual-zh", ["pspp-manual.css"]),   # 中文手册
    ("_source/pspp.md", "manual-en", ["pspp-manual.css"]),      # 英文手册
]

TUTORIAL_SRC = "_source/pspp-tutorial"
TUTORIAL_DST = "tutorial"
TUTORIAL_EXCLUDE = {"_dossier.md", "PSPP入门教程.docx"}


def copy_tree(src, dst, exclude=None, exclude_ext=None):
    exclude = exclude or set()
    exclude_ext = exclude_ext or set()
    if os.path.exists(dst):
        shutil.rmtree(dst)
    os.makedirs(dst, exist_ok=True)
    count = 0
    for name in sorted(os.listdir(src)):
        if name in exclude:
            continue
        if exclude_ext and os.path.splitext(name)[1].lower() in exclude_ext:
            continue
        s = os.path.join(src, name)
        d = os.path.join(dst, name)
        if os.path.isdir(s):
            count += copy_tree(s, d, exclude, exclude_ext)
        else:
            shutil.copy2(s, d)
            count += 1
    return count


def main():
    total = 0
    for src_name, dst_name, extra_exclude in MAPS:
        src = os.path.join(ROOT, src_name)
        dst = os.path.join(DOCS, dst_name)
        if not os.path.isdir(src):
            print(f"[WARN] 源目录不存在: {src}", file=sys.stderr)
            continue
        n = copy_tree(src, dst, exclude=set(extra_exclude))
        print(f"[OK] {src_name} -> docs/{dst_name}/  ({n} 个文件)")
        total += n

    # 教程
    tsrc = os.path.join(ROOT, TUTORIAL_SRC)
    tdst = os.path.join(DOCS, TUTORIAL_DST)
    if os.path.isdir(tsrc):
        n = copy_tree(tsrc, tdst, exclude=TUTORIAL_EXCLUDE,
                      exclude_ext={".docx"})
        print(f"[OK] {TUTORIAL_SRC} -> docs/{TUTORIAL_DST}/  ({n} 个文件, 已排除 _dossier.md/.docx)")
        total += n

    print(f"\n总计复制 {total} 个文件到 docs/")


if __name__ == "__main__":
    main()
