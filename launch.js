/* GoldHEN-only automatic launcher. The navigation from index.html is
   intentional: exploit.js checks the referrer before arming the chain. */
(function () {
  var WAIT_MS = 250;
  var target = "exploit.html?log=1&afterglow=run&mode=goldhen";
  var status = document.getElementById("status");
  window.setTimeout(function () {
    if (status) status.textContent = "Launching GoldHEN...";
    window.location.replace(target);
  }, WAIT_MS);
})();
