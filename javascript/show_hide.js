function hideRows(rows) {
  for (rowsCount = 0 ; rowsCount < rows ; rowsCount++) {
    document.getElementById('row'+rowsCount).style.display = "none";
    }
  document.getElementById('hideRowsChoice').style.display = "none";
  document.getElementById('showRowsChoice').style.display = "";
  document.getElementById('hideRowsStatus').style.display = "none";
  document.getElementById('showRowsStatus').style.display = "";
  }

function showRows(rows) {
  for (rowsCount = 0 ; rowsCount < rows ; rowsCount++) {
    document.getElementById('row'+rowsCount).style.display = "";
    }
  document.getElementById('showRowsChoice').style.display = "none";
  document.getElementById('hideRowsChoice').style.display = "";
  document.getElementById('showRowsStatus').style.display = "none";
  document.getElementById('hideRowsStatus').style.display = "";
  }

function hidePics(pics) {
  for (picsCount = 0 ; picsCount < pics ; picsCount++) {
    document.getElementById('pic'+picsCount).style.display = "none";
    }
  document.getElementById('hidePicsChoice').style.display = "none";
  document.getElementById('showPicsChoice').style.display = "";
  }

function showPics(pics) {
  for (picsCount = 0 ; picsCount < pics ; picsCount++) {
    document.getElementById('pic'+picsCount).style.display = "";
    }
  document.getElementById('showPicsChoice').style.display = "none";
  document.getElementById('hidePicsChoice').style.display = "";
  }
