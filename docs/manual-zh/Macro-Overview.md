#### 14.2.1 Overview

    DEFINE _macro_name_([_argument_[/_argument_]…])
    … _body_ …
    !ENDDEFINE.

每个 _argument_ 采用以下形式：

    {_!arg_name_ = _|_ !POSITIONAL}
    [!DEFAULT(_default_)]
    [!NOEXPAND]
    {!TOKENS(_count_) _|_ !CHAREND('_token_ ') _|_ !ENCLOSE('_start_ ' _|_ '_end_ ') _|_ !CMDEND}

以下指令可以在 _body_ 内部使用：

    !OFFEXPAND
    !ONEXPAND

以下函数可以在主体内部使用：

    !BLANKS(_count_)
    !CONCAT(_arg_ …)
    !EVAL(_arg_)
    !HEAD(_arg_)
    !INDEX(_haystack_ , _needle_)
    !LENGTH(_arg_)
    !NULL
    !QUOTE(_arg_)
    !SUBSTR(_arg_ , _start_[, _count_])
    !TAIL(_arg_)
    !UNQUOTE(_arg_)
    !UPCASE(_arg_)

主体还可以包含以下结构：

    !IF (_condition_) !THEN _true-expansion_ !ENDIF
    !IF (_condition_) !THEN _true-expansion_ !ELSE _false-expansion_ !ENDIF

    !DO _!var_ = _start_ !TO _end_ [!BY _step_]
      _body_
    !DOEND
    !DO _!var_ !IN (_expression_)
      _body_
    !DOEND

    !LET _!var_ = _expression_
