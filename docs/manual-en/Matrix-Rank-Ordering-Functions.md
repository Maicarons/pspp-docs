#### 16.4.2.6 Matrix Rank Ordering Functions

The `GRADE` and `RANK` functions each take a matrix M and return a matrix r with the same dimensions. Each element in r ranges between 1 and the number of elements n in M, inclusive. When the elements in M all have unique values, both of these functions yield the same results: the smallest element in M corresponds to value 1 in r, the next smallest to 2, and so on, up to the largest to n. When multiple elements in M have the same value, these functions use different rules for handling the ties. 

Matrix Function: **GRADE** _( M)_
    

Returns a ranking of M, turning duplicate values into sequential ranks. The returned matrix always contains each of the integers 1 through the number of elements in the matrix exactly once. 

`GRADE({1, 0, 3; 3, 1, 2; 3, 0, 5})` ⇒ `{3, 1, 6; 7, 4, 5; 8, 2, 9}`

Matrix Function: **RNKORDER** _( M)_
    

Returns a ranking of M, turning duplicate values into the mean of their sequential ranks. 

`RNKORDER({1, 0, 3; 3, 1, 2; 3, 0, 5})`   
⇒ `{3.5, 1.5, 7; 7, 3.5, 5; 7, 1.5, 9}`

One may use `GRADE` to sort a vector: 
    
    
    COMPUTE v(GRADE(v))=v.   /* Sort v in ascending order.
    COMPUTE v(GRADE(-v))=v.  /* Sort v in descending order.
