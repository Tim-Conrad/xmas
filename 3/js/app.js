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
