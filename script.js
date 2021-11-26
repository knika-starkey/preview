function shorter(str, n) {
  let nm = str.indexOf(" ", n);
  if (nm > n) return str.substr(0, nm);
  else if (nm == -1) return str;
  else return str.substr(0, n);
}

let line = prompt("Enter line");
let length = prompt("How short?");
alert(shorter(line, length));
