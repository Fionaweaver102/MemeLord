
class Comment {
  constructor(content, memeId) {
    this.content = content;
    this.memeId = memeId;
    this.url = "http://localhost:3000/comments"
  }

  postComment() {
    // Event.preventDefault()

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
      .then(res =>
        res.text())
      .then(body => {
        try {
          return JSON.parse(body);
        } catch {
          throw Error(body);
        }
      })
    // .then(body => {
    //   this.putCommentOnDom(body)
    // })
  }

  // putCommentOnDom(comment) {
  //   let container = document.createElement("div");
  //   container.setAttribute("class", "comments-container");

  //   let elem = document.createElement("div");
  //   elem.innerHTML = comment.content;
  //   container.append(elem);

  //   return container;
  // }

  static serialize(form) {
    let obj = {};
    let formData = new FormData(form);
    for (var key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return obj;
  };
}
