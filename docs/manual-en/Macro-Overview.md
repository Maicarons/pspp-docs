#### 14.2.1 Overview
    
    
    DEFINE _macro_name_([_argument_[/_argument_]…])
    … _body_ …
    !ENDDEFINE.
    

Each _argument_ takes the following form: 
    
    
    {_!arg_name_ = _|_ !POSITIONAL}
    [!DEFAULT(_default_)]
    [!NOEXPAND]
    {!TOKENS(_count_) _|_ !CHAREND('_token_ ') _|_ !ENCLOSE('_start_ ' _|_ '_end_ ') _|_ !CMDEND}
    

The following directives may be used within _body_ : 
    
    
    !OFFEXPAND
    !ONEXPAND
    

The following functions may be used within the body: 
    
    
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
    

The body may also include the following constructs: 
    
    
    !IF (_condition_) !THEN _true-expansion_ !ENDIF
    !IF (_condition_) !THEN _true-expansion_ !ELSE _false-expansion_ !ENDIF
    
    !DO _!var_ = _start_ !TO _end_ [!BY _step_]
      _body_
    !DOEND
    !DO _!var_ !IN (_expression_)
      _body_
    !DOEND
    
    !LET _!var_ = _expression_
