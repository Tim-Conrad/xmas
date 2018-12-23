
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
