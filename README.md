# node-time
a way to get time simply in nodejs

Abbreviations (capitals matter):
  * y for year
  * M (capital) for month
  * d for day
  * h for hour
  * m (lowercase) for minute
  * s (lowercase) for second
  * S (capital) for millisecond (1/1000th of a second)
  * a for microsecond (1/1,000,000th of a second) 
  * u for nanosecond (1/1,000,000,000th of a second) 
  * p for picosecond (1/1,000,000,000,000th of a second)

For example, to get the date using the standard American system (month/day/year), you would type: </br>
  &emsp;`time("M/d/y")`</br>
 And to get the standard time (hour:minute),</br>
  &emsp;`time("h:m")`</br></br>
  
  Note: t instead of time also works (e.g. `t("h:m")`)</br>
  Also note: units shorter than 1 millisecond (microsecond,nanosecond,picosecond) are timed based on amount of said units since last second, rather then amount of said units since preceding unit. (e.g. timed using amount of picoseconds since last second, rather then amount of picoseconds since last nanosecond). 
  
  Also works in browsers
