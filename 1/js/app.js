
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
