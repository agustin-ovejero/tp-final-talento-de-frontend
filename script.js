document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".contacto__form")

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault()

            const nombre = document.getElementById("nombre").value
            const apellido = document.getElementById("apellido").value
            const telefono = document.getElementById("telefono").value
            const mail = document.getElementById("mail").value
            const nota = document.getElementById("nota").value

            if (nombre.trim() === "") {
                alert("por favor ingresa tu nombre")
                return
            }
            if (apellido.trim() === "") {
                alert("por favor ingresa tu apellido")
                return
            }
            if (telefono.trim() === "") {
                alert("por favor ingresa tu teléfono")
                return
            }
            if (mail.trim() === "") {
                alert("por favor ingresa tu mail")
                return
            }
            if (nota.trim() === "") {
                alert("por favor ingresa tu nota")
                return
            }

            this.submit()
        })
    }

    const apiUrl = "https://fakestoreapi.com/products"

    async function Products() {
        try {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error("Error en la respuesta")
            }

            const products = await response.json()
            const productsGrid = document.querySelector(".products__grid")

            if (!productsGrid) {
                return
            }

            productsGrid.innerHTML = ""

            products.forEach((producto) => {
                const card = document.createElement("article")
                card.classList.add("card")

                card.innerHTML = `
                    <img class="card__image" src="${producto.image}" alt="${producto.title}">
                    <h3 class="card__product">${producto.title}</h3>
                    <p class="card__produtext">$${producto.price}</p>
                    <button class="card__button">Añadir al Carrito</button>
                `

                productsGrid.appendChild(card)
            })
        } catch (error) {
            console.error("No se pudieron cargar los productos", error)
        }
    }

    Products()
})
