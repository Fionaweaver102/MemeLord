class Meme {

  static memes = []

  constructor(title, imageUrl) {
    this.title = title;
    this.imageUrl = imageUrl;
    Meme.memes.push(this)
  }

  static append(memes) {
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'meme-list');
    document.getElementById('render-list').appendChild(ul);

    for (let i = 0; i < memes.length; i++) {
      let meme = memes[i];
      let img = make('img');
      img.src = meme.image_url;
      let p = document.createElement("p");
      p.setAttribute('class', 'text-lg leading-6 font-medium text-gray-900 px-4 py-5 sm:px-6');
      p.innerText = meme.title;

      this.createList(ul, img, p, meme);
    }
  }

  static createList(ul, img, p, meme) {
    let li = document.createElement("li");

    li.setAttribute('class', 'bg-white shadow overflow-hidden sm:rounded-lg mt-8');
    li.append(img);
    li.append(p);
    ul.append(li);

  }

  static make(element) {
    return document.createElement(element)
  }

  static renderEmptyForm() {
    memeForm.innerHTML =
      `<div class="container m-auto">
    <h1 class="text-center m-auto text-2xl font-bold mt-8">Create Meme</h1>
    <div class="w-1/2 m-auto py-6">
      <form action="#" method="POST" id="form">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">

              <div class="col-span-6 sm:col-span-4">
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="image_url" class="block text-sm font-medium text-gray-700">Meme Url</label>
                <input type="text" name="image_url"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>

          </div>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <input type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
          </div>

        </div>
      </form>
    </div>
  </div>`

    const form = document.getElementById("form")
    form.addEventListener("submit", ApiService.postMeme)
  }
}
