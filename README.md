# node-time
a way to get time simply in nodejs

Abbreviations (capitals matter):
  * y for year
  * M (capital) for month
  * d for day
  * h for hour
  * m (lowercase) for minute
  * s (lowercase) for second
  * S (capital) for millisecond

For example, to get the date using the standard American system (month/day/year), you would type:
  `time("M/d/y")`
 And to get the standard time (hour:minute), 
  `time("h:m")`
  
  Note: t instead of time also works (e.g. `t("h:m")`)
  
  Also works in browsers
