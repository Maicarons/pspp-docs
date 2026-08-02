#### 16.4.2.1 Elementwise Functions

These functions act on each element of their argument independently, like the elementwise operators (see [Matrix Elementwise Binary Operators](Matrix-Elementwise-Binary-Operators.md)). 

Matrix Function: **ABS** _( M)_
    

Takes the absolute value of each element of M. 

`ABS({-1, 2; -3, 0}) ⇒ {1, 2; 3, 0}`

Matrix Function: **ARSIN** _( M)_
Matrix Function: **ARTAN** _( M)_
    

Computes the inverse sine or tangent, respectively, of each element in M. The results are in radians, between _-\pi/2_ and _+\pi/2_ , inclusive. 

The value of _\pi_ can be computed as `4*ARTAN(1)`. 

`ARSIN({-1, 0, 1}) ⇒ {-1.57, 0, 1.57}` (approximately) 

`ARTAN({-5, -1, 1, 5}) ⇒ {-1.37, -.79, .79, 1.37}` (approximately) 

Matrix Function: **COS** _( M)_
Matrix Function: **SIN** _( M)_
    

Computes the cosine or sine, respectively, of each element in M, which must be in radians. 

`COS({0.785, 1.57; 3.14, 1.57 + 3.14}) ⇒ {.71, 0; -1, 0}` (approximately) 

Matrix Function: **EXP** _( M)_
    

Computes _e^x_ for each element x in M. 

`EXP({2, 3; 4, 5}) ⇒ {7.39, 20.09; 54.6, 148.4}` (approximately) 

Matrix Function: **LG10** _( M)_
Matrix Function: **LN** _( M)_
    

Takes the logarithm with base 10 or base _e_ , respectively, of each element in M. 

`LG10({1, 10, 100, 1000}) ⇒ {0, 1, 2, 3}`   
`LG10(0) ⇒` (error) 

`LN({EXP(1), 1, 2, 3, 4}) ⇒ {1, 0, .69, 1.1, 1.39}` (approximately)   
`LN(0) ⇒` (error) 

Matrix Function: **MOD** _( M, s)_
    

Takes each element in M modulo nonzero scalar value s, that is, the remainder of division by s. The sign of the result is the same as the sign of the dividend. 

`MOD({5, 4, 3, 2, 1, 0}, 3) ⇒ {2, 1, 0, 2, 1, 0}`   
`MOD({5, 4, 3, 2, 1, 0}, -3) ⇒ {2, 1, 0, 2, 1, 0}`   
`MOD({-5, -4, -3, -2, -1, 0}, 3) ⇒ {-2, -1, 0, -2, -1, 0}`   
`MOD({-5, -4, -3, -2, -1, 0}, -3) ⇒ {-2, -1, 0, -2, -1, 0}`   
`MOD({5, 4, 3, 2, 1, 0}, 1.5) ⇒ {.5, 1.0, .0, .5, 1.0, .0}`   
`MOD({5, 4, 3, 2, 1, 0}, 0) ⇒` (error) 

Matrix Function: **RND** _( M)_
Matrix Function: **TRUNC** _( M)_
    

Rounds each element of M to an integer. `RND` rounds to the nearest integer, with halves rounded to even integers, and `TRUNC` rounds toward zero. 

`RND({-1.6, -1.5, -1.4}) ⇒ {-2, -2, -1}`   
`RND({-.6, -.5, -.4}) ⇒ {-1, 0, 0}`   
`RND({.4, .5, .6} ⇒ {0, 0, 1}`   
`RND({1.4, 1.5, 1.6}) ⇒ {1, 2, 2}`

`TRUNC({-1.6, -1.5, -1.4}) ⇒ {-1, -1, -1}`   
`TRUNC({-.6, -.5, -.4}) ⇒ {0, 0, 0}`   
`TRUNC({.4, .5, .6} ⇒ {0, 0, 0}`   
`TRUNC({1.4, 1.5, 1.6}) ⇒ {1, 1, 1}`

Matrix Function: **SQRT** _( M)_
    

Takes the square root of each element of M, which must not be negative. 

`SQRT({0, 1, 2, 4, 9, 81}) ⇒ {0, 1, 1.41, 2, 3, 9}` (approximately)   
`SQRT(-1) ⇒` (error)
