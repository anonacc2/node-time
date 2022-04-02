String.prototype.repAll = function(from,to) {
  return this.split(from).join(to)
}
function picoPerMillisecond() {
  return 0.001/0.000000000001
}

function nanoPerMillisecond() {
  return 0.001/0.000000001
}

function microPerMillisecond() {
  return 0.001/0.000001
}

ppm = picoPerMillisecond
npm = nanoPerMillisecond
mpm = microPerMillisecond

function time(format) {
  let f = format;
  f = f.repAll("y", new Date().getFullYear())
  f = f.repAll("M", new Date().getMonth()+1)
  f = f.repAll("d", new Date().getDate())
  if (new Date().getHours() > 12) {
    f = f.repAll("h", new Date().getHours()-12)
  } else {
    f = f.repAll("h", new Date().getHours())
   }
  f = f.repAll("m", new Date().getMinutes())
  f = f.repAll("s", new Date().getSeconds())
  f = f.repAll("S", new Date().getMilliseconds())
  f = f.repAll("p", new Date().getMilliseconds()*ppm())
  f = f.repAll("n", new Date().getMilliseconds()*npm())
  f = f.repAll("u", new Date().getMilliseconds()*mpm())
  
  return f
}

let t = time;
