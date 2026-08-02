### 3.2 PDF, PostScript, SVG, and PNG Output Options

To produce output in PDF, PostScript, SVG, or PNG format, specify -o file on the PSPP command line, optionally followed by any of the options shown in the table below to customize the output format. 

PDF, PostScript, and SVG use real units: each dimension among the options listed below may have a suffix ‘mm’ for millimeters, ‘in’ for inches, or ‘pt’ for points. Lacking a suffix, numbers below 50 are assumed to be in inches and those above 50 are assumed to be in millimeters. 

PNG files are pixel-based, so dimensions in PNG output must ultimately be measured in pixels. For output to these files, PSPP translates the specified dimensions to pixels at 72 pixels per inch. For PNG output only, fonts are by default rendered larger than this, at 96 pixels per inch. 

An SVG or PNG file can only hold a single page. When PSPP outputs more than one page to SVG or PNG, it creates multiple files. It outputs the second page to a file named with a `-2` suffix, the third with a `-3` suffix, and so on. 

-O format={pdf|ps|svg|png}
    

Specify the output format. This is only necessary if the file name given on -o does not end in .pdf, .ps, .svg, or .png. 

-O paper-size=paper-size
    

Paper size, as a name (_e.g._ `a4`, `letter`) or measurements (_e.g._ `210x297`, `8.5x11in`). 

The default paper size is taken from the `PAPERSIZE` environment variable or the file indicated by the `PAPERCONF` environment variable, if either variable is set. If not, and your system supports the `LC_PAPER` locale category, then the default paper size is taken from the locale. Otherwise, if /etc/papersize exists, the default paper size is read from it. As a last resort, A4 paper is assumed. 

-O foreground-color=color
    

Sets color as the default color for lines and text. Use a CSS color format (e.g. `#rrggbb`) or name (e.g. `black`) as color. 

-O orientation=orientation
    

Either `portrait` or `landscape`. Default: `portrait`. 

-O left-margin=dimension
-O right-margin=dimension
-O top-margin=dimension
-O bottom-margin=dimension
    

Sets the margins around the page. See below for the allowed forms of dimension. Default: `0.5in`. 

-O object-spacing=dimension
    

Sets the amount of vertical space between objects (such as headings or tables). 

-O prop-font=font-name
    

Sets the default font used for ordinary text. Most systems support CSS-like font names such as “Sans Serif”, but a wide range of system-specific fonts are likely to be supported as well. 

Default: proportional font `Sans Serif`. 

-O font-size=font-size
    

Sets the size of the default fonts, in thousandths of a point. Default: 10000 (10 point). 

-O trim=true
    

This option makes PSPP trim empty space around each page of output, before adding the margins. This can make the output easier to include in other documents. 

-O outline=boolean
    

For PDF output only, this option controls whether PSPP includes an outline in the output file. PDF viewers usually display the outline as a side bar that allows for easy navigation of the file. The default is true unless -O trim=true is also specified. (The Cairo graphics library that PSPP uses to produce PDF output has a bug that can cause a crash when outlines and trimming are used together.) 

-O font-resolution=dpi
    

Sets the resolution for font rendering, in dots per inch. For PDF, PostScript, and SVG output, the default is 72 dpi, so that a 10-point font is rendered with a height of 10 points. For PNG output, the default is 96 dpi, so that a 10-point font is rendered with a height of _10 / 72 * 96 = 13.3_ pixels. Use a larger dpi to enlarge text output, or a smaller dpi to shrink it.
