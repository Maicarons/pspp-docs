### 6.7 Datasets

PSPP works with data organized into _datasets_. A dataset consists of a set of _variables_ , which taken together are said to form a _dictionary_ , and one or more _cases_ , each of which has one value for each variable. 

At any given time PSPP has exactly one distinguished dataset, called the _active dataset_. Most PSPP commands work only with the active dataset. In addition to the active dataset, PSPP also supports any number of additional open datasets. The `DATASET` commands can choose a new active dataset from among those that are open, as well as create and destroy datasets (see [DATASET](DATASET.md)). 

The sections below describe variables in more detail. 

| • Attributes |  | Attributes of variables. |
| --- | --- | --- |
| • System Variables |  | Variables automatically defined by PSPP . |
| • Sets of Variables |  | Lists of variable names. |
| • Input and Output Formats |  | Input and output formats. |
| • Scratch Variables |  | Variables deleted by procedures. |
