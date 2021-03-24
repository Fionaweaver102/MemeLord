const endPoint = "http://localhost:3000/memes"
const memeForm = document.getElementById("memeForm")
const button = document.getElementById("createButton")
button.addEventListener("click", () => renderEmptyForm())


document.addEventListener("DOMContentLoaded", init);

function init() {
  ApiService.getMemes();
}


function renderEmptyForm() {
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
        </div>
      </div>
    </form>
  </div>
</div>`

  const form = document.getElementById("form")
  form.addEventListener("submit", ApiService.postMeme)
}



function make(element) {
  return document.createElement(element)
}




