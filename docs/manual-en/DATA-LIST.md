### 8.5 DATA LIST

Used to read text or binary data, `DATA LIST` is the most fundamental data-reading command. Even the more sophisticated input methods use `DATA LIST` commands as a building block. Understanding `DATA LIST` is important to understanding how to use PSPP to read your data files. 

There are two major variants of `DATA LIST`, which are fixed format and free format. In addition, free format has a minor variant, list format, which is discussed in terms of its differences from vanilla free format. 

Each form of `DATA LIST` is described in detail below. 

See [GET DATA](GET-DATA.md), for a command that offers a few enhancements over DATA LIST and that may be substituted for DATA LIST in many situations. 

| • DATA LIST FIXED |  | Fixed columnar locations for data. |
| --- | --- | --- |
| • DATA LIST FREE |  | Any spacing you like. |
| • DATA LIST LIST |  | Each case must be on a single line. |
