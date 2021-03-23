const endPoint = "http://localhost:3000/memes"
const memeForm = document.getElementById("memeForm")
window.addEventListener("click", () => Meme.renderEmptyForm())

// const form = document.getElementById("form")
// const memes = [];

document.addEventListener("DOMContentLoaded", init);

function init() {
  //   document.getElementById('render-list').innerHTML = '';
  //   fetch(endPoint)
  //     .then(response => response.json())
  //     .then(memes => {
  //       append(memes);
  //     })
  ApiService.getMemes();
}

// function append(memes) {
//   let ul = document.createElement('ul');
//   ul.setAttribute('id', 'meme-list');
//   document.getElementById('render-list').appendChild(ul);

//   for (let i = 0; i < memes.length; i++) {
//     let meme = memes[i];
//     let img = make('img');
//     img.src = meme.image_url;
//     let p = document.createElement("p");
//     p.setAttribute('class', 'text-lg leading-6 font-medium text-gray-900 px-4 py-5 sm:px-6');
//     p.innerText = meme.title;

//     createList(ul, img, p, meme);
//   }
// }

// function createList(ul, img, p, meme) {
//   let li = document.createElement("li");

//   li.setAttribute('class', 'bg-white shadow overflow-hidden sm:rounded-lg mt-8');
//   li.append(img);
//   li.append(p);
//   ul.append(li);

// }


function make(element) {
  return document.createElement(element)
}




