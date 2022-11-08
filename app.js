// console.log("Let's get this party started!");

const gifContainer = document.querySelector("#gif-container");
const removeBtn = document.querySelector("#remove");
const form = document.getElementById('gif-search');
const input = document.getElementById('search');



form.addEventListener("submit" , async function(e){
    e.preventDefault();
    const keyWord = input.value;
    // console.log(input.value);
    // console.log("keyWord"+keyWord);
    input.value = '';
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const gifNumber = Math.floor(Math.random()*res.data.data.length);
    const gifUrl = res.data.data[gifNumber].images.original.url;
    // console.log("url from getGif func");
    // console.log(gifUrl);
    
    const newGif = document.createElement('p');
    newGif.className = "gif";
    newGif.innerHTML = `<img src = "${gifUrl}">`;
    gifContainer.appendChild(newGif);
    
   
});


removeBtn.addEventListener('click', function(e){
    e.preventDefault();
    gifContainer.innerText = '';
});



