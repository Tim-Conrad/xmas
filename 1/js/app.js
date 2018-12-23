
global_levels;

function login(){
  var login_password = $("#login_password").val().toLowerCase();
  var encrypted_container = "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";
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
