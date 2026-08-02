#### 16.4.2.9 EOF Function

This function works with files being used on the `READ` statement. 

Matrix Function: **EOF** _( file)_
    

Given a file handle or file name file, returns an integer scalar 1 if the last line in the file has been read or 0 if more lines are available. Determining this requires attempting to read another line, which means that `REREAD` on the next `READ` command following `EOF` on the same file will be ineffective. 

The `EOF` function gives a matrix program the flexibility to read a file with text data without knowing the length of the file in advance. For example, the following program will read all the lines of data in data.txt, each consisting of three numbers, as rows in matrix `data`: 
    
    
    MATRIX.
    COMPUTE data={}.
    LOOP IF NOT EOF('data.txt').
      READ row/FILE='data.txt'/FIELD=1 TO 1000/SIZE={1,3}.
      COMPUTE data={data; row}.
    END LOOP.
    PRINT data.
    END MATRIX.
