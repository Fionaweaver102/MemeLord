
class Comment {
  constructor(content, memeId) {
    this.content = content;
    this.memeId = memeId;
    this.url = "http://localhost:3000/comments"
  }

  postComment() {
    let params = {
      meme_id: this.memeId,
      content: this.content
    };
    fetch(this.url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(params)
    })
      .then(res => res.text())
      .then(body => {
        try {
          return JSON.parse(body);
        } catch {
          throw Error(body);
        }
      })
      .then(console.log)
      .catch(console.error);

  }

  static serialize(form) {
    let obj = {};
    let formData = new FormData(form);
    for (var key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return obj;
  };
}
