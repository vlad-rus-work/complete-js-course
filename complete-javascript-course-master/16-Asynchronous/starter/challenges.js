"use stirct";

/*
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=280486523542520206387x126880`
  )
    .then((response) => {
      if (!response.ok) throw new Error("Cannot find you!");

      return response.json();
    })
    .then((data) => {
      console.log(data, `You are in ${data.city}, ${data.country}.`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok) throw new Error("Country not found!");

      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(`Error! ${err}`));
};

whereAmI(52.508, 13.381);
*/
const imagesContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imagesContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found."));
    });
  });
};

createImage("img/img-1.jpg")
  .then((img) => {
    console.log("Image 1 loaded");
  })
  .catch((err) => console.log(err));
