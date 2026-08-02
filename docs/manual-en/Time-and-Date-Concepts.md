#### 7.7.8.1 How times & dates are defined and represented

Times and dates are handled by PSPP as single numbers. A _time_ is an interval. PSPP measures times in seconds. Thus, the following intervals correspond with the numeric values given: 
    
    
              10 minutes                        600
              1 hour                          3,600
              1 day, 3 hours, 10 seconds     97,210
              40 days                     3,456,000
    

A _date_ , on the other hand, is a particular instant in the past or the future. PSPP represents a date as a number of seconds since midnight preceding 14 Oct 1582. Because midnight preceding the dates given below correspond with the numeric PSPP dates given: 
    
    
                  15 Oct 1582                86,400
                   4 Jul 1776         6,113,318,400
                   1 Jan 1900        10,010,390,400
                   1 Oct 1978        12,495,427,200
                  24 Aug 1995        13,028,601,600
