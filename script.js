import { latinToMorse } from "./annexe1.js";
import { morseToLatin } from "./annexe2.js";

// ENCODE MORSE

const encodeLatinToMorse = document.querySelector("#encode-latin");
const encodeButton = document.querySelector("#start-encode");
const resultEncodeContainer = document.querySelector(
  ".result-encode-container"
);

encodeButton.addEventListener("click", function () {
  function getLatinCharacterList(textArray) {
    return textArray.toUpperCase().split("");
  }
  function translateLatinCharacter(characterLatin) {
    return latinToMorse[characterLatin];
  }
  function encode(a) {
    const resultA = getLatinCharacterList(a);
    const characterLatinAdd = [];
    for (let i = 0; i < resultA.length; i++) {
      characterLatinAdd.push(translateLatinCharacter(resultA[i]));
    }
    return characterLatinAdd.join(" ");
  }

  let encodeValue = encodeLatinToMorse.value;
  const resultEncode = encode(encodeValue);
  resultEncodeContainer.textContent = `${resultEncode}`;
  resultEncodeContainer.style.color = "white";
});

// DECODE MORSE

const decodeLatinToMorse = document.querySelector("#decode-morse");
const decodeButton = document.querySelector("#start-decode");
const resultDecodeContainer = document.querySelector(
  ".result-decode-container"
);

decodeButton.addEventListener("click", function () {
  function getMorseCharacterList(text2Array) {
    return text2Array.split(" ");
  }

  function translateMorseCharacter(characterMorse) {
    return morseToLatin[characterMorse];
  }

  function decode(b) {
    const resultB = getMorseCharacterList(b);
    const characterMorseAdd = [];
    for (let i = 0; i < resultB.length; i++) {
      characterMorseAdd.push(translateMorseCharacter(resultB[i]));
    }
    return characterMorseAdd.join("");
  }
  let decodeValue = decodeLatinToMorse.value;
  const resultDecode = decode(decodeValue);
  resultDecodeContainer.textContent = `${resultDecode}`;
  resultDecodeContainer.style.textTransform = "lowercase";
  resultDecodeContainer.style.color = "white";
});
