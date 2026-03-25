// load external scripts dynamically
function loadScript(src) {
  const s = document.createElement("script");
  s.src = src;
  document.head.appendChild(s);
}

loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
loadScript("https://www.theagencyre.com/js/max/common.js");
