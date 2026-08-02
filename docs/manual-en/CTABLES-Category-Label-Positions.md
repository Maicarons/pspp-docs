#### 15.7.4 Category Label Positions
    
    
    /CLABELS {AUTO _|_ {ROWLABELS _|_ COLLABELS}={OPPOSITE _|_ LAYER}}
    

The `CLABELS` subcommand controls the position of category labels for the `TABLE` subcommand that it follows. By default, or if `AUTO` is specified, category labels for a given variable nest inside the variable’s label on the same axis. For example, the command below results in age categories nesting within the age group variable on the rows axis and gender categories within the gender variable on the columns axis: 
    
    
    CTABLES /TABLE ageGroup BY gender.
    

|  |  | Male | Female |
| --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |
|  |  | Count | Count |
| Age group | 15 or younger | 0 | 0 |
| 16 to 25 | 594 | 505 |  |
| 26 to 35 | 476 | 491 |  |
| 36 to 45 | 489 | 548 |  |
| 46 to 55 | 526 | 649 |  |
| 56 to 65 | 516 | 731 |  |
| 66 or older | 531 | 943 |  |

`ROWLABELS=OPPOSITE` or `COLLABELS=OPPOSITE` move row or column variable category labels, respectively, to the opposite axis. The setting affects only the innermost variable or variables, which must be categorical, on the given axis. For example: 
    
    
    CTABLES /TABLE ageGroup BY gender /CLABELS ROWLABELS=OPPOSITE.
    CTABLES /TABLE ageGroup BY gender /CLABELS COLLABELS=OPPOSITE.
    

|  | 15 or younger | 16 to 25 | 26 to 35 | 36 to 45 | 46 to 55 | 56 to 65 | 66 or older | 15 or younger | 16 to 25 | 26 to 35 | 36 to 45 | 46 to 55 | 56 to 65 | 66 or older |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | S3a. GENDER: |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Male | Female |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Count | Count | Count | Count | Count | Count | Count | Count | Count | Count | Count | Count | Count | Count |
| Age group | 0 | 594 | 476 | 489 | 526 | 516 | 531 | 0 | 505 | 491 | 548 | 649 | 731 | 943 |
|  |  |  | S3a. GENDER: |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Count |  |  |  |  |  |  |  |  |  |  |  |
| Age group | 15 or younger | Male | 0 |  |  |  |  |  |  |  |  |  |  |  |
| Female | 0 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 to 25 | Male | 594 |  |  |  |  |  |  |  |  |  |  |  |  |
| Female | 505 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 26 to 35 | Male | 476 |  |  |  |  |  |  |  |  |  |  |  |  |
| Female | 491 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 36 to 45 | Male | 489 |  |  |  |  |  |  |  |  |  |  |  |  |
| Female | 548 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 46 to 55 | Male | 526 |  |  |  |  |  |  |  |  |  |  |  |  |
| Female | 649 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 56 to 65 | Male | 516 |  |  |  |  |  |  |  |  |  |  |  |  |
| Female | 731 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 66 or older | Male | 531 |  |  |  |  |  |  |  |  |  |  |  |  |
| Female | 943 |  |  |  |  |  |  |  |  |  |  |  |  |  |

`ROWLABELS=LAYER` or `COLLABELS=LAYER` move the innermost row or column variable category labels, respectively, to the layer axis. 

Only one axis’s labels may be moved, whether to the opposite axis or to the layer axis. 

#### Effect on Summary Statistics

`CLABELS` primarily affects the appearance of tables, not the data displayed in them. However, `CTABLES` can affect the values displayed for statistics that summarize areas of a table, since it can change the definitions of these areas. 

For example, consider the following syntax and output: 
    
    
    CTABLES /TABLE ageGroup BY gender [ROWPCT, COLPCT].
    

|  |  | Row % | Column % | Row % | Column % |
| --- | --- | --- | --- | --- | --- |
|  |  | S3a. GENDER: |  |  |  |
|  |  | Male | Female |  |  |
| Age group | 15 or younger | . | .0% | . | .0% |
| 16 to 25 | 54.0% | 19.0% | 46.0% | 13.1% |  |
| 26 to 35 | 49.2% | 15.2% | 50.8% | 12.7% |  |
| 36 to 45 | 47.2% | 15.6% | 52.8% | 14.2% |  |
| 46 to 55 | 44.8% | 16.8% | 55.2% | 16.8% |  |
| 56 to 65 | 41.4% | 16.5% | 58.6% | 18.9% |  |
| 66 or older | 36.0% | 17.0% | 64.0% | 24.4% |  |

Using `COLLABELS=OPPOSITE` changes the definitions of rows and columns, so that column percentages display what were previously row percentages and the new row percentages become meaningless (because there is only one cell per row): 
    
    
    CTABLES
        /TABLE ageGroup BY gender [ROWPCT, COLPCT]
        /CLABELS COLLABELS=OPPOSITE.
    

|  |  |  | Row % | Column % |
| --- | --- | --- | --- | --- |
|  |  |  | S3a. GENDER: |  |
| Age group | 15 or younger | Male | . | . |
| Female | . | . |  |  |
| 16 to 25 | Male | 100.0% | 54.0% |  |
| Female | 100.0% | 46.0% |  |  |
| 26 to 35 | Male | 100.0% | 49.2% |  |
| Female | 100.0% | 50.8% |  |  |
| 36 to 45 | Male | 100.0% | 47.2% |  |
| Female | 100.0% | 52.8% |  |  |
| 46 to 55 | Male | 100.0% | 44.8% |  |
| Female | 100.0% | 55.2% |  |  |
| 56 to 65 | Male | 100.0% | 41.4% |  |
| Female | 100.0% | 58.6% |  |  |
| 66 or older | Male | 100.0% | 36.0% |  |
| Female | 100.0% | 64.0% |  |  |

#### Moving Categories for Stacked Variables

If `CLABELS` moves category labels from an axis with stacked variables, the variables that are moved must have the same category specifications (see [CTABLES Per-Variable Category Options](CTABLES-Per_002dVariable-Category-Options.md)) and the same value labels. 

The following shows both moving stacked category variables and adapting to the changing definitions of rows and columns: 
    
    
    CTABLES /TABLE (likelihoodOfBeingStoppedByPolice
                    + likelihoodOfHavingAnAccident) [COLPCT].
    CTABLES /TABLE (likelihoodOfBeingStoppedByPolice
                    + likelihoodOfHavingAnAccident) [ROWPCT]
      /CLABELS ROW=OPPOSITE.
    

|  | Almost certain | Very likely | Somewhat likely | Somewhat unlikely | Very unlikely |
| --- | --- | --- | --- | --- | --- |
|  |  | Column % |  |  |  |
| 105b. How likely is it that drivers who have had too much to drink to drive safely will A. Get stopped by the police? | Almost certain | 10.2% |  |  |  |
| Very likely | 21.8% |  |  |  |  |
| Somewhat likely | 40.2% |  |  |  |  |
| Somewhat unlikely | 19.0% |  |  |  |  |
| Very unlikely | 8.9% |  |  |  |  |
| 105b. How likely is it that drivers who have had too much to drink to drive safely will B. Have an accident? | Almost certain | 15.9% |  |  |  |
| Very likely | 40.8% |  |  |  |  |
| Somewhat likely | 35.0% |  |  |  |  |
| Somewhat unlikely | 6.2% |  |  |  |  |
| Very unlikely | 2.0% |  |  |  |  |
|  | Row % | Row % | Row % | Row % | Row % |
| 105b. How likely is it that drivers who have had too much to drink to drive safely will A. Get stopped by the police? | 10.2% | 21.8% | 40.2% | 19.0% | 8.9% |
| 105b. How likely is it that drivers who have had too much to drink to drive safely will B. Have an accident? | 15.9% | 40.8% | 35.0% | 6.2% | 2.0% |
