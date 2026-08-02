#### 15.7.12 Hiding Small Counts
    
    
    /HIDESMALLCOUNTS COUNT=_count_
    

The `HIDESMALLCOUNTS` subcommand is optional. If it specified, then `COUNT`, `ECOUNT`, and `UCOUNT` values in output tables less than the value of _count_ are shown as `<_count_` instead of their true values. The value of _count_ must be an integer and must be at least 2. 

The following syntax and example shows how to use `HIDESMALLCOUNTS`: 
    
    
    CTABLES /HIDESMALLCOUNTS COUNT=10 /TABLE placeOfLastDrinkBeforeDrive.
    

|  |  | Count |
| --- | --- | --- |
| 37. Please think about the most recent occasion that you drove within two hours of drinking alcoholic beverages. Where did you drink on that occasion? | Other (list) | <10 |
| Your home | 182 |  |
| Friend's home | 264 |  |
| Bar/Tavern/Club | 279 |  |
| Restaurant | 495 |  |
| Work | 21 |  |
| Bowling alley | <10 |  |
| Hotel/Motel | <10 |  |
| Country Club/Golf course | 17 |  |
| Drank in the car/On the road | <10 |  |
| Sporting event | 15 |  |
| Movie theater | <10 |  |
| Shopping/Store/Grocery store | <10 |  |
| Wedding | 15 |  |
| Party at someone else's home | 81 |  |
| Park/picnic | 14 |  |
| Party at your house | <10 |  |
