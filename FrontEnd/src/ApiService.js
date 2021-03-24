class ApiService {

  static getMemes() {
    // const button = document.getElementById("createButton")
    // button.addEventListener("click", Meme.renderEmptyForm)
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

    fetch(endPoint, {
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

  // static post(e) {

  //   const params = {
  //     content: e.target[1].value,
  //   };

  //   fetch(endPoint, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //     body: JSON.stringify(params)
  //   })
  //     .then(r => r.json())
  //     .then(e => {
  //       let form = e.target[0].value;
  //       Meme.putMemeOnDom(form)
  //       let comment = new Comment(form.content, meme.id);
  //       this.putCommentsOnDom(comment)
  //     })
  // })

}
  // .then(e => {
  //   let form = e.target[0].value
  //   let comment = new Comment(form.content, meme.id);
  //   this.putCommentsOnDom(comment)
  // })

