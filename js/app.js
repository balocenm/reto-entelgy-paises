const paises = document.getElementById('paises')

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/lang/es')
        const data = await res.json()
        ListadoPaises(data)
        formularioCliente(data)
        filtros(data)
    } catch (error) {
        console.log(error)
    }
}

const ListadoPaises = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <a href="pais.html?name=${item.name}">${item.name}</a>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Región: </b>
                    ${item.region}
                </p>
            </div>
        </article>
        `
    });
    paises.innerHTML = elementos
}