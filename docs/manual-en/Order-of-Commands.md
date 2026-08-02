### 6.5 Order of Commands

PSPP does not place many restrictions on ordering of commands. The main restriction is that variables must be defined before they are otherwise referenced. This section describes the details of command ordering, but most users will have no need to refer to them. 

PSPP possesses five internal states, called _initial_ , _input-program_ _file-type_ , _transformation_ , and _procedure_ states. (Please note the distinction between the `INPUT PROGRAM` and `FILE TYPE` _commands_ and the _input-program_ and _file-type_ _states_.) 

PSPP starts in the initial state. Each successful completion of a command may cause a state transition. Each type of command has its own rules for state transitions: 

**Utility commands**
    

  * Valid in any state. 
  * Do not cause state transitions. Exception: when `N OF CASES` is executed in the procedure state, it causes a transition to the transformation state. 

**`DATA LIST`**
    

  * Valid in any state. 
  * When executed in the initial or procedure state, causes a transition to the transformation state. 
  * Clears the active dataset if executed in the procedure or transformation state. 

**`INPUT PROGRAM`**
    

  * Invalid in input-program and file-type states. 
  * Causes a transition to the intput-program state. 
  * Clears the active dataset. 

**`FILE TYPE`**
    

  * Invalid in intput-program and file-type states. 
  * Causes a transition to the file-type state. 
  * Clears the active dataset. 

**Other file definition commands**
    

  * Invalid in input-program and file-type states. 
  * Cause a transition to the transformation state. 
  * Clear the active dataset, except for `ADD FILES`, `MATCH FILES`, and `UPDATE`. 

**Transformations**
    

  * Invalid in initial and file-type states. 
  * Cause a transition to the transformation state. 

**Restricted transformations**
    

  * Invalid in initial, input-program, and file-type states. 
  * Cause a transition to the transformation state. 

**Procedures**
    

  * Invalid in initial, input-program, and file-type states. 
  * Cause a transition to the procedure state.
