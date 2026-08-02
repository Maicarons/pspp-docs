#### 8.5.3 DATA LIST LIST
    
    
    DATA LIST LIST
            [({TAB,’c’}, …)]
            [{NOTABLE,TABLE}]
            [FILE=’file_name’ [ENCODING=’encoding’]]
            [SKIP=record_count]
            /var_spec…
    
    where each var_spec takes one of the forms
            var_list [(type_spec)]
            var_list *
    

With one exception, `DATA LIST LIST` is syntactically and semantically equivalent to `DATA LIST FREE`. The exception is that each input line is expected to correspond to exactly one input record. If more or fewer fields are found on an input line than expected, an appropriate diagnostic is issued.
