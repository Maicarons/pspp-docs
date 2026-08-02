## 10 Combining Data Files

This chapter describes commands that allow data from system files, portable files, and open datasets to be combined to form a new active dataset. These commands can combine data files in the following ways: 

  * `ADD FILES` interleaves or appends the cases from each input file. It is used with input files that have variables in common, but distinct sets of cases. 
  * `MATCH FILES` adds the data together in cases that match across multiple input files. It is used with input files that have cases in common, but different information about each case. 
  * `UPDATE` updates a master data file from data in a set of transaction files. Each case in a transaction data file modifies a matching case in the primary data file, or it adds a new case if no matching case can be found. 

These commands share the majority of their syntax, which is described in the following section, followed by one section for each command that describes its specific syntax and semantics. 

| • Combining Files Common Syntax |  |  |
| --- | --- | --- |
| • ADD FILES |  | Interleave cases from multiple files. |
| • MATCH FILES |  | Merge cases from multiple files. |
| • UPDATE |  | Update cases using transactional data. |
