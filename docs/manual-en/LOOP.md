### 14.5 LOOP
    
    
    LOOP [index_var=start TO end [BY incr]] [IF condition].
            …
    END LOOP [IF condition].
    

`LOOP` iterates a group of commands. A number of termination options are offered. 

Specify index_var to make that variable count from one value to another by a particular increment. index_var must be a pre-existing numeric variable. start, end, and incr are numeric expressions (see [Expressions](Expressions.md).) 

During the first iteration, index_var is set to the value of start. During each successive iteration, index_var is increased by the value of incr. If end > start, then the loop terminates when index_var > end; otherwise it terminates when index_var < end. If incr is not specified then it defaults to +1 or -1 as appropriate. 

If end > start and incr < 0, or if end < start and incr > 0, then the loop is never executed. index_var is nevertheless set to the value of start. 

Modifying index_var within the loop is allowed, but it has no effect on the value of index_var in the next iteration. 

Specify a boolean expression for the condition on `LOOP` to cause the loop to be executed only if the condition is true. If the condition is false or missing before the loop contents are executed the first time, the loop contents are not executed at all. 

If index and condition clauses are both present on `LOOP`, the index variable is always set before the condition is evaluated. Thus, a condition that makes use of the index variable will always see the index value to be used in the next execution of the body. 

Specify a boolean expression for the condition on `END LOOP` to cause the loop to terminate if the condition is true after the enclosed code block is executed. The condition is evaluated at the end of the loop, not at the beginning, so that the body of a loop with only a condition on `END LOOP` will always execute at least once. 

If the index clause is not present, then the global `MXLOOPS` setting, which defaults to 40, limits the number of iterations (see [SET MXLOOPS](SET.md#SET-MXLOOPS)). 

`BREAK` also terminates `LOOP` execution (see [BREAK](BREAK.md)). 

Loop index variables are by default reset to system-missing from one case to another, not left, unless a scratch variable is used as index. When loops are nested, this is usually undesired behavior, which can be corrected with `LEAVE` (see [LEAVE](LEAVE.md)) or by using a scratch variable as the loop index. 

When `LOOP` or `END LOOP` is specified following `TEMPORARY` (see [TEMPORARY](TEMPORARY.md)), the `LAG` function may not be used (see [LAG](Miscellaneous-Functions.md#LAG)).
