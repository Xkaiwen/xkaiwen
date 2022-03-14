/*
 * Starter file
 * Karen Xue
 * CSC196W Assignment5
 */
console.log("Window loaded!");
(function() {
  "use strict";
  window.addEventListener("load", init);


  function init() {
    let encryptItButton = document.getElementById("encrypt-it");
    encryptItButton.addEventListener("click", handleEncrypt);
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
    let pt12 = document.getElementById("font12");
    pt12.addEventListener("click", font12pt);
    let pt24 = document.getElementById("font24");
    pt24.addEventListener("click", font24pt);
    let caps = document.getElementById("all-caps");
    caps.addEventListener("click", capital)
  }
  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
  function handleEncrypt() {
    console.log("Encrypt-it button clicked");
    let textField = document.getElementById("input-text");
    let results = shiftCipher(textField);
    document.getElementById("result").textContent = results;
  }
  function handleReset() {
    console.log("Reset button clicked");
    let textField = document.getElementById("input-text");
    textField.value = "";
    let textField2 = document.getElementById("result-area");
    textField2.value = "";
  }
  function capital() {
    if(document.getElementById("all-caps").checked) {
      document.getElementById('result').style.textTransform = "uppercase";
    }
    if(!document.getElementById("all-caps").checked) {
      document.getElementById('result').style.textTransform = "lowercase";
    }
  }
  function font12pt() {
    if(document.getElementById("font12").checked) {
      document.getElementById('result').style.fontSize = "12pt";
    }
  }
  function font24pt() {
    if(document.getElementById("font24").checked) {
      document.getElementById('result').style.fontSize = "24pt";
    }
  }
  
})();