#### 15.7.3 Statistics Positions and Labels
    
    
    /SLABELS
        [POSITION={COLUMN _|_ ROW _|_ LAYER}]
        [VISIBLE={YES _|_ NO}]
    

The `SLABELS` subcommand controls the position and visibility of summary statistics for the `TABLE` subcommand that it follows. 

`POSITION` sets the axis on which summary statistics appear. With `POSITION=COLUMN`, which is the default, each summary statistic appears in a column. For example: 
    
    
    CTABLES /TABLE=age [MEAN, MEDIAN] BY gender.
    

|  | Mean | Median | Mean | Median |
| --- | --- | --- | --- | --- |
|  | S3a. GENDER: |  |  |  |
|  | Male | Female |  |  |
| D1. AGE: What is your age? | 46 | 45 | 50 | 52 |

With `POSITION=ROW`, each summary statistic appears in a row, as shown below: 
    
    
    CTABLES /TABLE=age [MEAN, MEDIAN] BY gender /SLABELS POSITION=ROW.
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
| D1. AGE: What is your age? | Mean | 46 | 50 |
| Median | 45 | 52 |  |

`POSITION=LAYER` is also available to place each summary statistic in a separate layer. 

Labels for summary statistics are shown by default. Use `VISIBLE=NO` to suppress them. Because unlabeled data can cause confusion, it should only be considered if the meaning of the data is evident, as in a simple case like this: 
    
    
    CTABLES /TABLE=ageGroup [TABLEPCT] /SLABELS VISIBLE=NO.
    

| Age group | 15 or younger | .0% |
| --- | --- | --- |
| 16 to 25 | 15.7% |  |
| 26 to 35 | 13.8% |  |
| 36 to 45 | 14.8% |  |
| 46 to 55 | 16.8% |  |
| 56 to 65 | 17.8% |  |
| 66 or older | 21.1% |  |
