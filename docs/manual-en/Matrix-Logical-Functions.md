#### 16.4.2.2 Logical Functions

Matrix Function: **ALL** _( M)_
    

Returns a scalar with value 1 if all of the elements in M are nonzero, or 0 if at least one element is zero. 

`ALL({1, 2, 3} < {2, 3, 4}) ⇒ 1`   
`ALL({2, 2, 3} < {2, 3, 4}) ⇒ 0`   
`ALL({2, 3, 3} < {2, 3, 4}) ⇒ 0`   
`ALL({2, 3, 4} < {2, 3, 4}) ⇒ 0`

Matrix Function: **ANY** _( M)_
    

Returns a scalar with value 1 if any of the elements in M is nonzero, or 0 if all of them are zero. 

`ANY({1, 2, 3} < {2, 3, 4}) ⇒ 1`   
`ANY({2, 2, 3} < {2, 3, 4}) ⇒ 1`   
`ANY({2, 3, 3} < {2, 3, 4}) ⇒ 1`   
`ANY({2, 3, 4} < {2, 3, 4}) ⇒ 0`
