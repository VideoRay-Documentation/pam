var online = confirm("If you are connected to the Internet, click 'OK' to visit www.videoray.com in a new window.  Otherwise, click 'Cancel' to view information about www.videoray.com locally.");
if (online) {
  newSite = window.open("http://www.videoray.com","newsite");
  }
