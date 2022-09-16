async function news(){
    try{
    const lista = document.querySelector("#listaDeNoticias")
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=br", {
        headers:{
            Authorization:'c906fccf60914f899cef30e6c2c12fec',
        }
    });

    const listaNoticias = await response.json() 

    listaNoticias.articles.forEach((article) => {
        const card = `<article class="col-6">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${article.urlToImage}"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                ${article.title}
                </h5>
                <p class="card-text">
                ${article.description}
                </p>
                <a
                  href="${article.url}"
                  class="btn btn-primary"
                  >Ir para noticia</a
                >
              </div>
            </div>
          </div>
        </div>
      </article>`;

      lista.innerHTML += card

    });
}catch{
    console.log("error")
}
}

news()
