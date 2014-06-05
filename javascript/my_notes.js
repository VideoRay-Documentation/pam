function getFileName() {
  var url = window.location.pathname;
  url = url.substring(url.lastIndexOf("/") + 1, url.length);
//  url = url.substring(0,url.lastIndexOf("."));
  return url;
  }

fileName = getFileName();

if ((fileName != "") && (fileName != "index.html") && (fileName != "copyright.html")) {
  if (window.location.protocol == "http:") {
    notesPath = "../My_Notes/";
    }
  else {
    var versionString = navigator.userAgent;
    if (versionString.match(/NT 5/)) {
      notesPath = "file:///C:/Documents and Settings/Administrator/My Documents/VideoRay/My_Notes/";
      }
    else {
      notesPath = "file:///C:/Users/VideoRay/Documents/VideoRay/My_Notes/";
      }
    }

  myNoteFile = notesPath + "my_" + fileName;
  
  myNoteSizeIndex = fileName.substring(0,fileName.lastIndexOf("."));
  testKey = eval("window." + myNoteSizeIndex);
  if ((typeof testKey) == 'undefined') {
    myNoteSize = 200;
    }
  else {
    myNoteSize = testKey;
    }

  document.write("<div id=\"my_notes\">");
  document.write("  <div id=\"my_notes_header\">");
  document.write("    My_Notes");
  document.write("    </div>");
  document.write("  <div id=\"my_notes_inside\">");
  if (navigator.appName == "Microsoft Internet Explorer") {
    document.write("This browser does not support My_Notes");
  }
  else {
    document.write("    <object type=\"text/html\" data=\"" + myNoteFile + "\" width=\"100%\" height=\"" + myNoteSize + "\">There are no user contributed notes for this page.  Learn how to <a href=\"custom_my_notes.html\">add My_Notes</a>.</object>");
    }
  document.write("    </div>");
  document.write("  </div>");
  }