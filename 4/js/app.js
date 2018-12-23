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
