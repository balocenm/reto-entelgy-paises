const paises = document.getElementById('paises')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/lang/es')
        const data = await res.json()
        const filtroData = data.filter(item => item.name === params)

        ListadoPaises(filtroData)
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
                <h1>${item.region}</h1>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
            </div>
        </article>
        `
    });
    paises.innerHTML = elementos
}