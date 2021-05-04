// const qString = document.location.search;
// const params = new URLSearchParams(qString);
// const id = params.get('id');

// async function getFilmsPage(filmId) {
//     try {
//         console.log(filmId);
//         const response = await fetch('http://lukecetion.tech/wp-json/wp/v2/posts?_embed');
//         const jsonResults = await response.json();

//         console.log(jsonResults);

//         document.title = jsonResults.title;
//         document.querySelector('articleTitle').innerHTML = `
//                     <h1>${jsonResults.title.rendered}</h1>
//         `
//     } catch {} finally {}
// }

// getFilmsPage(id);

const postUrl = '';

async function getPosts() {
  try {
    const repsonse = await fetch(
      'http://lukecetion.tech/wp-json/wp/v2/posts?_embed'
    );
    const jsonAPI = await repsonse.json();
    console.log(jsonAPI);
    const postResult = jsonAPI;

    for (let i = 0; i < postResult.length; i++) {
      document.querySelector('.articleBox').innerHTML += `
      <h2 class="articleTitle">${postResult[i].title.rendered}</h3>`;

      if (i === 2) {
        break;
      }
    }
  } catch {} finally {}

}

getPosts(postUrl);