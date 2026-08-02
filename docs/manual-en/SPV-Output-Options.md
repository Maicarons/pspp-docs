### 3.4 SPV Output Options

SPSS 16 and later write .spv files to represent the contents of its output editor. To produce output in .spv format, specify -o file on the PSPP command line, optionally followed by any of the options shown in the table below to customize the output format. 

-O format=spv
    

Specify the output format. This is only necessary if the file name given on -o does not end in .spv. 

-O paper-size=paper-size
-O left-margin=dimension
-O right-margin=dimension
-O top-margin=dimension
-O bottom-margin=dimension
-O object-spacing=dimension
    

These have the same syntax and meaning as for PDF output. See [PDF PostScript SVG and PNG Output Options](PDF-PostScript-SVG-and-PNG-Output-Options.md), for details.
