#### 15.7.4 类别标签位置

    
    /CLABELS {AUTO _|_ {ROWLABELS _|_ COLLABELS}={OPPOSITE _|_ LAYER}}
    

`CLABELS` 子命令控制其后面的 `TABLE` 子命令的类别标签位置。默认情况下，或指定 `AUTO` 时，给定变量的类别标签嵌套在同一轴上该变量的标签内。例如，以下命令会使年龄类别嵌套在行轴上的年龄组变量内，性别类别嵌套在列轴上的性别变量内：

    
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

`ROWLABELS=OPPOSITE` 或 `COLLABELS=OPPOSITE` 分别将行变量或列变量的类别标签移到相反的轴。该设置只影响给定轴上最内层的变量（这些变量必须是分类变量）。例如：

    
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

`ROWLABELS=LAYER` 或 `COLLABELS=LAYER` 分别将最内层的行变量或列变量的类别标签移到层轴。

只能移动一个轴的标签，无论是移到相反的轴还是层轴。

#### 对汇总统计量的影响

`CLABELS` 主要影响表的外观，而不影响其中显示的数据。然而，`CTABLES` 可能影响用于汇总表区域的统计量所显示的值，因为它会改变这些区域的定义。

例如，考虑以下语法和输出：

    
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

使用 `COLLABELS=OPPOSITE` 会改变行和列的定义，使得列百分比显示的是之前的行百分比，而新的行百分比变得没有意义（因为每行只有一个单元格）：

    
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

#### 为堆叠变量移动类别

如果 `CLABELS` 从带有堆叠变量的轴移动类别标签，则被移动的变量必须具有相同的类别规范（参见 [CTABLES Per-Variable Category Options](CTABLES-Per_002dVariable-Category-Options.md)）和相同的值标签。

以下展示了既移动堆叠类别变量，又适应行和列定义的变化：

    
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
