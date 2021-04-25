const airAlphabet = {
  a: "alpha",
  b: "bravo",
  c: "charlie",
  d: "delta",
  e: "echo",
  f: "foxtrot",
  g: "golf",
  h: "hotel",
  i: "india",
  j: "juliet",
  k: "kilo",
  l: "lima",
  m: "mike",
  n: "november",
  o: "oscar",
  p: "papa",
  q: "quebec",
  r: "romeo",
  s: "sierra",
  t: "tango",
  u: "uniform",
  v: "victor",
  w: "whiskey",
  x: "x-ray",
  y: "yankee",
  z: "zulu",
};

const form = document.querySelector("#translate form");
const input = form.querySelector("input");
const closeBtn = document.querySelector(".effect .closeBtn");

const resultBox = document.querySelector(".effect");
let result = document.querySelector("p.text");

const showText = (e) => {
  e.preventDefault();
  let text = "";
  if (input.value) {
    text = input.value.toLowerCase();

    let textArray = text.split("").filter((el) => {
      return el !== " ";
    });

    let resultArray = textArray.map((el) => {
      if (airAlphabet.hasOwnProperty(el)) {
        return airAlphabet[el];
      } else {
        return el;
      }
    });

    result.textContent = resultArray.join(", ").toUpperCase();
  } else {
    result.textContent = `You should enter something,
     if you want a translation...`;
  }
  resultBox.classList.add("active");
  input.value = "";
};

const hideText = (e) => {
  e.preventDefault();
  result.textContent = "";
  resultBox.classList.remove("active");
};
form.addEventListener("submit", showText);
closeBtn.addEventListener("click", hideText);

/* ToDo
 1. Pola wyboru -> Czy tłumaczyć polskie litery czy nie? 
 2. Znaki specjalne -> usuwać? Dać wybór? 
*/
