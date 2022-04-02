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
  if (String(new Date().getMinutes()).length === 1) {
    f = f.repAll("m", "0" + new Date().getMinutes())
  } else {
    f = f.repAll("m", new Date().getMinutes())
  }
  if (String(new Date().getSeconds()).length === 1) {
    f = f.repAll("s", "0" + new Date().getSeconds())
  } else {
    f = f.repAll("s", new Date().getSeconds())
  }
  f = f.repAll("S", new Date().getMilliseconds())
  f = f.repAll("p", Math.floor(new Date().getMilliseconds()*ppm()))
  f = f.repAll("n", Math.floor(new Date().getMilliseconds()*npm()))
  f = f.repAll("u", Math.floor(new Date().getMilliseconds()*mpm()))
  if (new Date().getHours() < 13) {
    f = f.repAll("b", "AM")
  } else if (new Date().getHours() > 11) {
    f = f.repAll("b", "PM")
  }
  
  
  return f
}

let t = time;
