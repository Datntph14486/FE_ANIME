
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function setCookie (name, value, days){
    var expires = "";
    if (days) {
      // var date = new Date();
      // date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var date = new Date(days);
      expires = "; expires=" + date.toUTCString();
    }
    console.log(name, value, days);
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
export {readCookie,setCookie}  