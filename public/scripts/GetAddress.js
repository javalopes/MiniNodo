
function decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
  while (hex.length < padding) {
    hex = "0" + hex;
  }
  return hex;
}

var ToHex = function (sk) {
  var i, s = [];
  for (i = 0; i < sk.length; i++) s.push(decimalToHex(sk[i], 2));
  return s.join('');
}


document.getElementById("addresslink").onclick = writeAddress;

//put it in the qrcode to be centered
function writeAddress() {
  var theUrl = 'https://localhost:3000/api/localaddress/';
  $.get(
    theUrl,
    function (data) {
      addy = String(data);
      ic = document.getElementById("innercontent");
      ic.innerHTML = '';
      qr = document.getElementById("qrcode");
      qr.innerHTML = '';
      new QRCode(qr, "monero:"+addy);

      ic.innerHTML = '<div class="content"><p style="word-break:break-all">' + addy + '</p></div>';
      return false;
    }
  );
}