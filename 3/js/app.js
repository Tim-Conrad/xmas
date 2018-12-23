
global_levels;

function login(){
  var login_password = $("#login_password").val();
  var encrypted_container = "U2FsdGVkX19spXJRlPuDEgyOVGfv0cC0GvGzZP0z/I0qoCenKUxD+zpOYyaiCyXqGXgVhdBjNbzVuy80MG//u/IAbVvJycyXwCEiPG1Ehc+ZMXsCW0fCnH/mJGF5mFszDrnquMxf/F23mYoxGMxM27EaouS8DnaZmUK+cpThVZ08pGp9Hxl6y+klSEzQ8rSBvr0ewqlYGjIUKjz+3H2N+wQ4x6r6sz+EEp13ckF/L8elkhQnWysQk6Z/iSzwj5xo88tBmtrU8QT2ZiX0jyd5e3GbCPe6A4ilz5WDCHOkIWuSxFwgd/NUbsx9vrTHjh0M+6DYQ8BTvTUNLOBSoDGb0H6qVvuqStgnKgif7XPDMXaaKDSxKIR4wmptjhACEFhJgfg1yUmVcOxSFOZCsjZcEoq5VUfm3fb7OgcRRFEwAaWAMIWtSdds4D/A5oPdhmySwZ+vyHgVmYRCCNWgETsrq+9fQ0syYw5UFXiZamQvbn6JA3rsQbEQPZwFvl3I4wYj7rlh1YnrptmnC8GQqcrhZdeDwRkAEiTvEkJRAAIPDgLKa5z0UoUmqFtuRoJm2Z0+FY/hbVZkKG7jG5AxKzhDpoGEBt7DepfP/pcDwJ6H3An8QFOJYDg2Hk36goKFGw5LUObR0gU+bJvp99/1jFxmXoe7H+1W12oiKYlQLAvRGOGaybdLaJKT9CdirUzhOnKPaguIqAspGzQ2MqR95EFEhJxtThMezAULrknCH5kNZktwl9p3KCMhZm7yYR5Ez/lP3lTuLDBorbMIQ0zMks/yqseeDYcF9IKMaTekmBcg/H7OrpI8rZr6HoiMb8sU/+8tuxXbGzaH1skXYFx08pOGYEClHM5r5NrciQarwULsoGFGyZfMP0FwGrhivncqq5/7hCdaNH1bQ0WP8RmBG8NlWHv4+h5PKyvDsscbvMdrvytnpzAp/VJ9f/tvvVaQTIb42EGYG7o3S2hpLVuVOpuhhqfVmeltB2oHTb7D7+Rm7kMFpksAFqbULfBi5lLYZglTAd6ZVi8pVKzW0tCs4uDtiDchSxlAQM9Yq3SHO3y8tP8VRpS8WD5iGohqV2ikzOkFgJMqM57dKxj8KhF6qogPRrtclVqI0v/ZXMKbk/sDiBazcyzXfcD/d1pg91WRTcj5g6ACDQpuiFNe1hjrm0pKbDmxDVSP+GkLO5AvXaHZndGSbr6d4jypZI30DrbRRs3khOruuSxi/VmoqdXZEfUOFqWO1Qxzy9cgIgmjK/TNy6B7OO/UKfw1fvKL0pERT4aYL7VHRo7+od+LjmIix2UA2N2AWOl9tmLdGoeQwrzk+QwQ8hdLUBikIkkUbx4PTO/ToxJUbK+Druuz+AbUcdjIMcc0msoKUzN9K7EOtMNcBgfNBSDb/hB7yu1RgM6jWFvShd13+6O4ovGzucaw8xK7QWsFAz7lTh2efx5DVq1gejF+VwXMeiF66xwoaFhkyLu0VO/QHw/6692WE/rqA+YFq/YIbSXAhBwSmjNifX/IxKFGv4L9xlA9wXDIUoQZ2X7Nksx+1Q0EOzdjad4WzRcaKSwBAcNWLRaq3FBfhB99Q9bRqeqkzMQpB8+564MFWH1Z0GNgEnpN5PfAsunXC/EvQQbacdJVPLCbwGdTkgZm3eGqnkbSDC6eOVVAYgvR1lgZ7HzNGnHNLnsGQwUtI+E/VndXns0yyUby5EKWcDol1arHwszMUNWs92ZKdQ+E0ltEGhg11UgiuItq4Y7RAhiIroWtH1uz+MhmkeFXHQ9eq2sDMfjFaL4T2BfnxF2AvgEJzb4vLupwqymsqIUpWxRQoBLd6T/PyIiMLWmP+GQnIQHK64Q0+0qbWcXfo/MAtfsL2LaMWh344nvxwQiItBRIXuqZgbEpPsRxO8HlYQFJP760I9ZJXg7vn53ge6g2RSUyTsAgzb7wtk/SqP5GauUCQcUBLU9jaIJfRUO6g8+e9uysWcM378wrQ8wWfMjv75vqzBkFw6aulU9xz6Og0cCeSKsQsUCZX1NmDYFVIA3QGhM+b/E5MZUuVWkM5Fo+YEXB5gkaR0356Udi2+VLuDoEZnewIBYl5487CW7P0SyPNeEgtG4lyTOx6z3bsMT74zZynIcAlBL5UuoY40z5Patb0tuW2sFt5FQOLYOnBj8wQE20OAWn+LYZkTQTWkYoVpdPg7phsvy01j1QKWLlEQp5f346shx5uArD7wSn3aSe5QJ4ql/7IZ0/SWtcFdvQBEfiEcYKJCPFIDV3+OvzUf93VLihh5IgoeHbQccRfAlArVRm7L8mGM37+00jpqb/+TslX0j2CS9De7VnX7LnMH6W72JhhuHUoHSfAaYTYvgfwTLubOyd3QPzsqKzevdxaCbDo2d3Qc9VicUNEw6BzSQchrjx9SxF9Px8UZSPasfE2vNsUERjH+N8GGZz1Wx8v2lX3ozsOFJWmW8mU2oGsfAe6iFHEOijotO9ZrHBbYHk6+x/SRLH+/KpDPg1759eQywzb+ECVPEnJyEvXl/DM1snFlpgds3vkJ26kFgavhGffBXfIYKXdcxIkaEgWObzbH0Oky+lhuKmtrUHdKvQbxAYAGCgK8ChsisKd0m4kKwci8/YR32llOHhUwUOU1GMIHfX+JnnCdbaQqTB1LfGgkTm7M/+b6JbQUZ4F97/PfOe8PK2NJ0pUUW8FZN5e0ATQQwE+NoXj95oGMn23CsuAgDwDFhpO8hPfQhlnBnP/UotUBxQpICZ9DVY6VPWNIJKiWC5tHbG76Fm+fdUEDKeeAIv923eyKGtfuVeW6upRJnDkMZ+awR1DylrIHWQ1U34tcruRcVealtzdWLq/UPHD1GLkyfG+KNbKAIDw0WNxIt4uQtlkKF/aJn6IlGviiLpMSEtCNO+yxYn58XyJlcrrnLsJi/RTijnWko0OmhNAJrnCdJjWj0ULi0BAJJkAh6WxaG878cpu2eBRB+F+6sSJWQ9MaemoakoI8/bPigs+V1piwPLn7Kt4sTewBC0dwWqhwSvGGzx5AIBVEZbZsfhWWD94iJSimUyIgYwmDue4z2+Dg4=";
  //var encrypted_container = global_container;
  var decrypted_container = decrypt(encrypted_container, login_password);
  console.log(decrypted_container);
  if(decrypted_container.encrypted){
    $("#login").hide();
    levels = decrypted_container.level;
    global_levels = levels;
    nextLevel(levels, 0, login_password);
  }
}

function nextLevel(levels, id, password) {
  //add new content
  var decrypted_level = decrypt(levels[id], password);
  console.log("decrypted_level", decrypted_level);
  if(decrypted_level.encrypted){
      $("#questions").html(decrypted_level.content);
  }
}

function solve(id) {
  if(id == 0){
    return login();
  }
  var password = $("#solution").val().toLowerCase();
  nextLevel(levels, id, password);
}

function decrypt(cipher, password){
  var bytes  = CryptoJS.AES.decrypt(cipher, password);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

function encrypt(obj, password){
  return CryptoJS.AES.encrypt(JSON.stringify(obj), password).toString();
}
