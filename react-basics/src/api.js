const apiKey = "kawfU1fm0nkJJPpwpg36Ob2SoFHzDLg7";
const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
httpCall
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(({data}) => {
    const gifUrl = data.images.original.url;
    const gifElement = document.createElement("img");
    gifElement.src = gifUrl;
    document.body.appendChild(gifElement);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });