class Meme {

  static memes = []

  constructor(title, imageUrl, comments) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.comments = comments || []
    Meme.memes.push(this)
  }

  static append(memes) {
    memes.forEach(p => {
      this.putMemeOnDom(p);
    })
  }

  static putMemeOnDom(meme) {
    let numOfLikes = 0
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'meme-list');
    document.getElementById('render-list').appendChild(ul);
    let li = make("li");

    let img = make('img');
    img.src = meme.image_url;
    let p = document.createElement("p");
    p.setAttribute('class', 'text-lg leading-6 font-medium text-gray-900 px-4 py-5 sm:px-6');
    p.innerText = meme.title;

    let likes = make('button');
    likes.setAttribute('id', `like-button-${meme.id}`);
    likes.innerText = `Like ${numOfLikes}`;

    let commentForm = document.querySelector('#comment-form').cloneNode(true);
    commentForm.setAttribute('id', "comment-form-" + meme.id);
    commentForm.setAttribute('class', '');

    li.setAttribute('class', 'bg-white shadow overflow-hidden sm:rounded-lg mt-8');
    li.append(img);
    li.append(p);
    li.append(likes);
    li.append(this.getCommentsElem(meme.comments));
    li.append(commentForm);
    ul.append(li);

    document.querySelector("#comment-form-" + meme.id).addEventListener("submit", function (e) {
      e.preventDefault();
      let form = Comment.serialize(e.target)
      let comment = new Comment(form.content, meme.id);
      comment.postComment();
      setTimeout(() => {
        init();
      }, 0)
    })

    document.getElementById('like-button-' + meme.id).addEventListener("click", function () {
      numOfLikes++;
      likes.innerText = `Like ${numOfLikes}`
    })
  }

  static getCommentsElem(comments) {
    let container = document.createElement("div");
    container.setAttribute("class", "comments-container");
    if (comments.length > 0) {
      for (let i = 0; i < comments.length; i++) {
        let comment = comments[i];
        let elem = document.createElement("div");
        elem.innerHTML = comment.content;
        container.append(elem);
      }
    }

    return container;
  }


}
