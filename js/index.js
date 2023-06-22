const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const API = "https://dog.ceo/api/breeds/image/random";

async function fetchRandomDog() {
  try {
    const response = await fetch(`${API}`);
    const data = await response.json();

    image.src = data.message;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;
  if (isLoaded) {
    fetchRandomDog();
  }
});

fetchRandomDog();
