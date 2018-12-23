//LEVEL
var level_1 = {
  encrypted: true,
  content: `
  <p class="text-white lead">FRAGE 1</p>
  <img class="img-thumbnail" src="img/person.jpg"/>
  <div class="input-group mb-3">
    <input id="solution" type="text" class="form-control" placeholder="Lösungswort (4 Buchstaben)" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-append">
      <button class="btn btn-danger" type="button" name="button" onclick="solve(1)">GO!</button>
    </div>
  </div>
  `
}
var level_encrypted_1 = encrypt(level_1, "password");
//LEVEL
var level_2 = {
  encrypted: true,
  content: `
  <p class="text-white lead">FRAGE 2</p>
  <p class="text-white lead">"Artikel oder stirb!" sagt der Dieb zum Lord.</p>
  <div class="input-group mb-3">
    <input id="solution" type="text" class="form-control" placeholder="Lösungswort (3 Buchstaben)" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-append">
      <button class="btn btn-danger" type="button" name="button" onclick="solve(2)">GO!</button>
    </div>
  </div>
  `
}
var level_encrypted_2 = encrypt(level_2, "nach");
//LEVEL
var level_3 = {
  encrypted: true,
  content: `
  <p class="text-white lead">FRAGE 3</p>
  <p class="text-white lead">Eine Fortbewegungsart bei der es keine Flugphase gibt.</p>
  <div class="input-group mb-3">
    <input id="solution" type="text" class="form-control" placeholder="Lösungswort (5 Buchstaben)" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-append">
      <button class="btn btn-danger" type="button" name="button" onclick="solve(3)">GO!</button>
    </div>
  </div>
  `
}
var level_encrypted_3 = encrypt(level_3, "die");
//LEVEL
var level_4 = {
  encrypted: true,
  content: `
  <p class="text-white lead">FRAGE 4</p>
  <p class="text-white lead">Die Sache hat doch einen ...!</p>
  <div class="input-group mb-3">
    <input id="solution" type="text" class="form-control" placeholder="Lösungswort (5 Buchstaben)" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-append">
      <button class="btn btn-danger" type="button" name="button" onclick="solve(4)">GO!</button>
    </div>
  </div>
  `
}
var level_encrypted_4 = encrypt(level_4, "gehen");
//LEVEL
var level_5 = {
  encrypted: true,
  content: `
  <p class="text-white lead">FRAGE 5</p>
  <p class="text-white lead">Welches Wort beschreibt die folgenden Dinge:</p>
  <ul class="text-white">
    <li>Samson</li>
    <li>Guilliver</li>
    <li>Siebengebirge</li>
    <li>Hagrid</li>
    <li>Bohnenranke</li>
  </ul>
  <div class="input-group mb-3">
    <input id="solution" type="text" class="form-control" placeholder="Lösungswort (5 Buchstaben)" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-append">
      <button class="btn btn-danger" type="button" name="button" onclick="solve(5)">GO!</button>
    </div>
  </div>
  `
}
var level_encrypted_5 = encrypt(level_5, "haken");
//LEVEL
var level_6 = {
  encrypted: true,
  content: `
  <p class="text-white lead">FRAGE 6</p>
  <p class="text-white lead">Wie heißt der runde Teil einer Musiknote?</p>
  <div class="input-group mb-3">
    <input id="solution" type="text" class="form-control" placeholder="Lösungswort (4 Buchstaben)" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-append">
      <button class="btn btn-danger" type="button" name="button" onclick="solve(6)">GO!</button>
    </div>
  </div>
  `
}
var level_encrypted_6 = encrypt(level_6, "riese");
//LEVEL
var level_7 = {
  encrypted: true,
  content: `
  <p class="text-white lead">FINALE FRAGE</p>
  <p class="text-white lead">Bilde aus alle Lösungsworten den Lösungssatz.</p>
  <p class="text-white lead">Die folgenden Regeln gelten genau einmal:</p>
  <ul class="text-white lead">
    <li>ie => ei</li>
    <li>ak => ag</li>
    <li>pf => pen</li>
    <li>Das Verb in 3. Per. Sg. Präs.</li>
    <li>Manche Worte stehen nicht alleine.</li>
  </ul>
  <div class="input-group mb-3">
    <input id="solution" type="text" class="form-control" placeholder="Lösungssatz" aria-label="Username" aria-describedby="basic-addon1">
    <div class="input-group-append">
      <button class="btn btn-danger" type="button" name="button" onclick="solve(7)">GO!</button>
    </div>
  </div>
  `
}
var level_encrypted_7 = encrypt(level_7, "kopf");
//LEVEL
var level_8 = {
  encrypted: true,
  content: `
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="text-center">
    <p class="text-white lead">WOOP WOOP WIR FAHREN ZUSAMMEN NACH KOPENHAGEN!</p>
  </div>
  <script>
    $("body").addClass("confetti");
  <script>
  `
}
var level_encrypted_8 = encrypt(level_8, "die reise geht nach kopenhagen");


var login_container = {
  encrypted: true,
  level: [
    level_encrypted_1,
    level_encrypted_2,
    level_encrypted_3,
    level_encrypted_4,
    level_encrypted_5,
    level_encrypted_6,
    level_encrypted_7,
    level_encrypted_8
  ]
};

//Container
global_container = encrypt(login_container, "password");
console.log("login_container", global_container);


global_levels;

function login(){
  var login_password = $("#login_password").val();
  //var encrypted_container = "U2FsdGVkX19wIAhOxP0hxNQQKR6ntw3tDvFm631tO4Rkea4cNis2ux78/Q2wpsctX2RGpxeKIQoRbdJ0p7NvkYIJ6dFiMzRoGP4knAibjdM682JluvdjOv1velh+FLH2yfdBhXrOKf68v183jG7d8/f827EZ5sMPHyvL3oTLJMCR+9MW0nToZdtYL6r6VYA30LSEm9NHMgecwUDmKy8JGad2nNpt5ogUtbDc7XJ2TrsCc2Nil6W0iO3QA6We9ZsNsh8nnGSFKr/pHmlvCovPgKj7neeraWEzKS9+QT1TyboiQnrb3R+gI+7n2VrUsg4hK1wbpCrEUa0d/0yZnwH19f7X6Ugv1CtK/lgEMZBTNnPtSy2SOioxlTriDWnTNSvi81eAVVFHWfT3A/VU4VwTEvAVd76pdwUm0bjQlaZ8Y7AZvHlFsFDAUcPkpo3cbFF4IfMEL2+I4f+V3usfa0mNRPGNe+mFyjR1Pur3LsIm1+nGiP3lXI8mOe4RK3ISuZRgjZrT2/Ni20lRnWqDPFWg5Q==";
  var encrypted_container = global_container;
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
