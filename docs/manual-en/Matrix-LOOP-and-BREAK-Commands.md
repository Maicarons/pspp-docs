#### 16.4.7 The `LOOP` and `BREAK` Commands
    
    
    LOOP [_var_ =_first_ TO _last_ [BY _step_]] [IF _expression_].
      … _matrix commands_ …
    END LOOP [IF _expression_].
    
    BREAK.
    

The `LOOP` command executes a nested group of matrix commands, called the loop’s _body_ , repeatedly. It has three optional clauses that control how many times the loop body executes. Regardless of these clauses, the global `MXLOOPS` setting, which defaults to 40, also limits the number of iterations of a loop. To iterate more times, raise the maximum with `SET MXLOOPS` outside of the `MATRIX` command (see [SET MXLOOPS](SET.md#SET-MXLOOPS)). 

The optional index clause causes var to be assigned successive values on each trip through the loop: first first, then _first \+ step_, then _first \+ 2 × step_, and so on. The loop ends when _var > last_, for positive step, or _var < last_, for negative step. If step is not specified, it defaults to 1. All the index clause expressions must evaluate to scalars, and non-integers are rounded toward zero. If step evaluates as zero (or rounds to zero), then the loop body never executes. 

The optional `IF` on `LOOP` is evaluated before each iteration through the loop body. If its expression, which must evaluate to a scalar, is zero or negative, then the loop terminates without executing the loop body. 

The optional `IF` on `END LOOP` is evaluated after each iteration through the loop body. If its expression, which must evaluate to a scalar, is zero or negative, then the loop terminates. 

The following computes and prints _l(n)_ , whose value is the number of steps in the [Juggler sequence](https://en.wikipedia.org/wiki/Juggler_sequence) for _n_ , for _n_ from 2 to 10 inclusive: 
    
    
    COMPUTE l = {}.
    LOOP n = 2 TO 10.
      COMPUTE a = n.
      LOOP i = 1 TO 100.
        DO IF MOD(a, 2) = 0.
          COMPUTE a = TRUNC(a &** (1/2)).
        ELSE.
          COMPUTE a = TRUNC(a &** (3/2)).
        END IF.
      END LOOP IF a = 1.
      COMPUTE l = {l; i}.
    END LOOP.
    PRINT l.
    

| • Matrix BREAK Command |  |  |
| --- | --- | --- |
