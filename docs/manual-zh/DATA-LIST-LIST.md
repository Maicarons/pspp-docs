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

除一处例外，`DATA LIST LIST` 在语法和语义上等价于 `DATA LIST FREE`。例外在于：每个输入行应当恰好对应一个输入记录。如果在输入行上找到的字段数多于或少于预期，则会发出相应的诊断信息。
