var online = confirm("If you are connected to the Internet, click 'OK' to visit VideoRay's Library website in a new window.  Otherwise, click 'Cancel' to view information about VideoRay's Library website locally.");
if (online) {
  newSite = window.open("../../library/html/index.html","newsite");
  }
