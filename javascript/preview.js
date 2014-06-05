function preview (xyzw, evt, img, title, width, height) {
  var imgPreview = document.getElementById("previewStatus");
  displayConfig = true;
  previewSizeIndex = 0;
  previewOpacityIndex = 1;
  try {
    display = preview_config();
    }
  catch(err) {
    display = '0|0';
    }
  displayArray = display.split("|");
  if (displayArray[previewSizeIndex] < 0) {
    displayArray[previewSizeIndex] = -displayArray[previewSizeIndex];
    displayConfig = false;
    }
  if (displayArray[previewOpacityIndex] >= 10) {
    if (displayArray[previewOpacityIndex] > 100) {
      displayArray[previewOpacityIndex] = 100;
      }
    if (displayArray[previewSizeIndex] < 0.25) {
      displayArray[previewSizeIndex] = 0.25;
      }
    if (displayArray[previewSizeIndex] > 2) {
      displayArray[previewSizeIndex] = 2;
      }
    var imag = new Image;
    imag.src = '../images/' + img;
    if (height != 0) {
      height = height*displayArray[previewSizeIndex];
      }
    else {
      height = width*(imag.height/imag.width)*displayArray[previewSizeIndex];
      }
    width = width*displayArray[previewSizeIndex];
    var imgbox = document.getElementById(xyzw);
    imgbox.innerHTML = '<img id="imag" src="../images/' + img + '" width="' + width + '"><br>';
    imgbox.innerHTML += '<span class="fineprint">' + title + '</span>';
    imgbox.style.position = 'fixed';
    imgbox.style.left = (evt.clientX - 250) + 'px';
    imgbox.style.top = (evt.clientY - 100) + 'px';
    imgbox.style.width = width + 'px';
    imgbox.style.height = (height + 16) + 'px';
    imgbox.style.opacity = displayArray[previewOpacityIndex] / 100;
    imgbox.style.filter = 'Alpha(Opacity=' + displayArray[previewOpacityIndex] * 100 + ')';
    imgbox.style.visibility = 'visible';
    if (displayConfig) {
      imgPreview.innerHTML = '<i><a href="preview_setup.html">Turn image previews off</a></i>';
      }
    }
  else {
    if (displayConfig) {
      imgPreview.innerHTML = '<i><a href="preview_switch.html">Turn image previews on</a><i>';
      }
    }
  }

function close_preview(xyzw) {
  var imgbox = document.getElementById(xyzw);
  imgbox.style.visibility = 'hidden';
  }
