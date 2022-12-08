function createCard(link, link_imagen, titulo, libreria, precio) {
    return `
        <div class="col-3">
            <a href="${link}" class="card mx-5 my-3" style="width: 16rem">
                <img src="${link_imagen}" class="card-img-top" alt="..." hre/>
                <div class="card-body">
                    <p class="card-text h6 text-center title">${titulo}</p>
                    <p class="card-text h6 text-center">${libreria}</p>
                    <p class="text-success font-weight-bold mb-0 text-center">$${precio}</p>
                </div>
            </a>
        </div>
    `
}
export {createCard}