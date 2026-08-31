// Populate the footer year. External file so the strict CSP (script-src 'self')
// doesn't block it.
var y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
