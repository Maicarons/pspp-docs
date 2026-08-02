#### 16.4.6 The `DO IF` Command
    
    
    DO IF _expression_.
      … _matrix commands_ …
    [ELSE IF _expression_.
      … _matrix commands_ …]…
    [ELSE
      … _matrix commands_ …]
    END IF.
    

A `DO IF` command evaluates its expression argument. If the `DO IF` expression evaluates to true, then PSPP executes the associated commands. Otherwise, PSPP evaluates the expression on each `ELSE IF` clause (if any) in order, and executes the commands associated with the first one that yields a true value. Finally, if the `DO IF` and all the `ELSE IF` expressions all evaluate to false, PSPP executes the commands following the `ELSE` clause (if any). 

Each expression on `DO IF` and `ELSE IF` must evaluate to a scalar. Positive scalars are considered to be true, and scalars that are zero or negative are considered to be false. 

The following matrix language fragment sets ‘b’ to the term following ‘a’ in the [Juggler sequence](https://en.wikipedia.org/wiki/Juggler_sequence): 
    
    
    DO IF MOD(a, 2) = 0.
      COMPUTE b = TRUNC(a &** (1/2)).
    ELSE.
      COMPUTE b = TRUNC(a &** (3/2)).
    END IF.
