class ApiService {

  static getMemes() {
    const button = document.getElementById("createButton")
    button.addEventListener("click", Meme.renderEmptyForm)
    document.getElementById('render-list').innerHTML = '';
    fetch(endPoint)
      .then(response => response.json())
      .then(memes => {
        Meme.append(memes);
      })
  }

  static postMeme(e) {
    e.preventDefault();

    const memeInfo = {
      title: e.target[0].value,
      image_url: e.target[1].value
    }

    fetch("http://localhost:3000/memes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(memeInfo)
    })
      .then(r => r.json())
      .then(e => {
        const meme = new Meme(e.title, e.image_url);
        Meme.putMemeOnDom(meme);
      })
  }
}