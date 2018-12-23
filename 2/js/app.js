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
