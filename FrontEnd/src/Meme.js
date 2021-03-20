class Meme {
  constructor(title, imageUrl) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.baseUrl = "http://localhost:3000/memes"
  }

  handleSubmit(e) {
    e.preventDefault();

    let params = {
      title: this.title,
      image_url: this.imageUrl,
    };

    fetch(this.baseUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(params)
    })
      .then(r => r.json())
  }
}
