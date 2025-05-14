// const getPromiseImage = (url) => {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement("img");
//     img.src = url;
//     img.addEventListener("load", () => {
//       resolve(img);
//     });
//     img.addEventListener("error", () => {
//       reject(new Error(`Image not found: ${url}`));
//     });
//   });
// }


const getImageAsync = async () => {
    try {
        const apiKey = "kawfU1fm0nkJJPpwpg36Ob2SoFHzDLg7";
        const promise = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        if (!promise.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await promise.json();
        console.log(data);
        // Show the image on the screen
        const gifUrl = data.data.images.original.url;
        const gifElement = document.createElement("img");
        gifElement.src = gifUrl;
        document.body.appendChild(gifElement);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

// const apiKey = "kawfU1fm0nkJJPpwpg36Ob2SoFHzDLg7";
// const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// httpCall
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(({data}) => {
//     const gifUrl = data.images.original.url;
//     const gifElement = document.createElement("img");
//     gifElement.src = gifUrl;
//     document.body.appendChild(gifElement);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });