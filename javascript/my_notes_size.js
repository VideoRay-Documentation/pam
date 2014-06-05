if (window.location.protocol == "http:") {
  sizePath = "../javascript/";
  }
else {
  var versionString = navigator.userAgent;
  if (versionString.match(/NT 5/)) {
    sizePath = "file:///C:/Documents and Settings/Administrator/My Documents/VideoRay/My_Notes/";
    }
  else {
    sizePath = "file:///C:/Users/VideoRay/Documents/VideoRay/My_Notes/";
    }
  }

  myNoteSizeFile = sizePath + "my_notes_size_table.js";
  document.write("<script type=\"text/javascript\" src=\"" + myNoteSizeFile + "\"></script>");
