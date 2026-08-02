#### 16.4.7.1 The `BREAK` Command

The `BREAK` command may be used inside a loop body, ordinarily within a `DO IF` command. If it is executed, then the loop terminates immediately, jumping to the command just following `END LOOP`. When multiple `LOOP` commands nest, `BREAK` terminates the innermost loop. 

The following example is a revision of the one above that shows how `BREAK` could substitute for the index and `IF` clauses on `LOOP` and `END LOOP`: 
    
    
    COMPUTE l = {}.
    LOOP n = 2 TO 10.
      COMPUTE a = n.
      COMPUTE i = 1.
      LOOP.
        DO IF MOD(a, 2) = 0.
          COMPUTE a = TRUNC(a &** (1/2)).
        ELSE.
          COMPUTE a = TRUNC(a &** (3/2)).
        END IF.
        DO IF a = 1.
          BREAK.
        END IF.
        COMPUTE i = i + 1.
      END LOOP.
      COMPUTE l = {l; i}.
    END LOOP.
    PRINT l.
