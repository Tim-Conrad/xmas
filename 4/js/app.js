
global_levels;

function login(){
  var login_password = $("#login_password").val();
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
