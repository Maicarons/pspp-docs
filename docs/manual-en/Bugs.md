## 22 Bugs

Occasionally you may encounter a bug in PSPP. 

If you believe you have found a bug, please make sure that it really is a bug. Sometimes, what may appear to be a bug, turns out to be a misunderstanding of how to use the program. If you are unsure, ask for advice on the pspp-users mailing list. Information about the mailing list is at <http://lists.gnu.org/mailman/listinfo/pspp-users>. 

It is also valuable to try the newest version of PSPP, since the problem may have already been fixed. You can always find the newest version of PSPP by visiting [the PSPP website](https://www.gnu.org/s/pspp). You might have obtained PSPP from a downstream packager, such as a GNU/Linux distribution; if your downstream package is not up-to-date, please ask the distributor to update to the newest version. 

If the problem persists in the up-to-date version, check to see if it has already been reported. Reported issues are listed at <http://savannah.gnu.org/bugs/?group=pspp>. If it has already been reported, you might consider adding a comment with additional information or even just to mention that you are also experiencing the problem, since the PSPP developers are often inclined to work on issues that are important to a large number of users. 

For known issues in individual language features, see the relevant section in see [Language](Language.md). 

If the problem exists in a recent version and it has not already been reported, then please report it. 

### 22.1 How to report bugs

The best way to send a bug report is using the web page at <http://savannah.gnu.org/bugs/?group=pspp>. Alternatively, bug reports may be sent by email to [bug-gnu-pspp@gnu.org](mailto:bug-gnu-pspp@gnu.org). 

A high-quality bug report allows the developers to understand, reproduce, and ultimately fix the problem. We recommend including the following: 

  * The version of PSPP in which you encountered the problem. It also often helps to know some information about how PSPP was built. 

With PSPP command syntax, `SHOW SYSTEM.` will output everything we ordinarily need. In the PSPPIRE GUI, Help → System Info produces the same output. 

  * The operating system and type of computer on which it is running. 
  * A sample of the syntax which causes the problem or, if it is a user interface problem, the sequence of steps required to reproduce it. Screenshots can be helpful for reporting bugs in the graphical user interface, especially since GUI bugs can arise on some systems but not others, but they do not usually help fixing other kinds of bugs. 
  * A description of what you think is wrong: What happened that you didn’t expect, and what did you expect to happen? Include any error messages that PSPP output. 

Here is one example of a bug report that includes all of the elements above: 

| Version | GNU pspp 2.0.1-gff8d3d |
| --- | --- |
| Host System | x86_64-pc-linux-gnu |
| Build System | x86_64-pc-linux-gnu |
| Locale Directory | /usr/local/share/locale |
| Journal File | /home/pspp/.local/state/pspp/pspp.jnl |
| Compiler Version | 10.2.1 20210110 |

The following bug report, on the other hand, does not provide enough information for PSPP developers to understand the problem. This means that the developers cannot identify or fix the problem without additional rounds of questions, which is more work for both the reporter and the developer: 

```
I downloaded the latest version of PSPP and entered a sequence of numbers, but when I analyse them it gives the wrong output.
```

PSPP developers value all users’ feedback, but cannot promise an immediate response. The bug reporting is not a consultancy or support service, although you can make private arrangements for such services. Since PSPP is free software, consultants have access to the information they need to provide such support. 

For general enquiries or help, please use the [pspp-users mailing list](http://lists.gnu.org/mailman/listinfo/pspp-users) instead of the bug mailing list or bug tracker. 

The PSPP bug tracker and bug reporting mailing list are public. To privately report a security vulnerability in GNU PSPP, please send your report to the closed mailing list [pspp-security@gnu.org](mailto:pspp-security@gnu.org). The PSPP developers will help you assess your report and fix problems prior to public disclosure.
