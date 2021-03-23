
class Comment {
  constructor(content, memeId) {
    this.content = content;
    this.url = "http://localhost:3000/comments";
    this.memeId = memeId;
  }

  // static getCommentsElem(comments) {
  //   let container = document.createElement("div");
  //   container.setAttribute("class", "comments-container");
  //   for (let i = 0; i < comments.length; i++) {
  //     let comment = comments[i];
  //     let elem = document.createElement("div");

  //     elem.innerHTML = comment.content;
  //     container.append(elem);
  //   }

  //   return container;
  // }

  post() {
    console.log(this.memeId);
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
      .then(r => r.json())
      .then(this.handle)
  }

  // static handle(data) {
  //   console.log(data);
  // }

  static serialize(form) {
    var obj = {};
    var formData = new FormData(form);
    for (var key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return obj;
  };
}