
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

  //   post() {

  //     const params = {
  //       content: this.content,
  //       meme_id: this.memeId
  //     };

  //     fetch(endPoint, {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json; charset=UTF-8',
  //       },
  //       body: JSON.stringify(params)
  //     })
  //       .then(r => r.json())
  //     // .then(e => {
  //     //   let form = e.target[0].value
  //     //   let comment = new Comment(form.content, meme.id);
  //     //   this.putCommentsOnDom(comment)
  //     // })
  //   }

  // static putCommentsOnDom(meme) {
  //   let ul = document.createElement('ul');
  //   let li = make("li");
  //   li.append(this.getCommentsElem(meme.comments));
  //   ul.append(li);

  //   document.getElementById("comment-form-" + meme.id).addEventListener("submit", function (e) {
  //     // e.preventDefault();

  //     let form = e.target[0].value;
  //     let comment = new Comment(form.content, meme.id);

  //     comment.post();

  //     setTimeout(() => {
  //       init();
  //     }, 500)
  //   })
  // }

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
  // static putCommentOnMeme(comment) {
  //   let ul = document.createElement('ul');
  //   ul.setAttribute('id', 'meme-list');
  //   document.getElementById('render-list').appendChild(ul);
  //   let li = make("li");

  //   let commentForm = document.querySelector('#comment-form').cloneNode(true);
  //   commentForm.setAttribute('id', "comment-form-" + meme.id);
  //   commentForm.setAttribute('class', '');

  //   li.append(this.getCommentsElem(meme.comments));
  //   li.append(commentForm);
  //   ul.append(li);

  //   document.getElementById("comment-form-" + meme.id).addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     let form = new FormData(e.target)
  //     let comment = new Comment(form.content, meme.id);

  //     setTimeout(() => {
  //       init();
  //     }, 500)
  //   })
  // }

  // handle(data) {
  //   console.log(data);
  // }



  //   static serialize(form) {
  //     let obj = {};
  //     let formData = new FormData(form);
  //     for (var key of formData.keys()) {
  //       obj[key] = formData.get(key);
  //     }
  //     return obj;
  //   };
}
