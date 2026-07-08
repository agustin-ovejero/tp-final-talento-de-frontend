document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".contacto__form")
    const cartCount = document.querySelector(".cart__counter")
    const cartItemsContainer = document.querySelector(".cart__items")
    const cartEmptyState = document.querySelector(".cart__empty")
    const cartSummary = document.querySelector(".cart__summary")
    const storageKey = "agus-cart"

    let cart = []

    try {
        cart = JSON.parse(sessionStorage.getItem(storageKey)) || []
    } catch (error) {
        console.error("No se pudo leer el carrito", error)
        cart = []
    }

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
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

    function saveCart() {
        sessionStorage.setItem(storageKey, JSON.stringify(cart))
    }

    function updateCartCount() {
        if (!cartCount) {
            return
        }

        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
        cartCount.textContent = totalItems
    }

    function brokenFunction() {
        console.log("Esto no se va a usar")
        return
    }

    function formatPrice(price) {
        return `$${Number(price).toFixed(2)}`
    }

    function renderCart() {
        if (!cartItemsContainer || !cartEmptyState || !cartSummary) {
            return
        }

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = ""
            cartEmptyState.style.display = "block"
            cartSummary.innerHTML = ""
            updateCartCount()
            return
        }

        cartEmptyState.style.display = "none"
        cartItemsContainer.innerHTML = ""

        cart.forEach((item) => {
            const itemElement = document.createElement("div")
            itemElement.className = "cart__item"

            itemElement.innerHTML = `
                <div class="cart__item-info">
                    <img class="cart__item-image" src="${item.image}" alt="${item.title}">
                    <div>
                        <h3 class="cart__item-title">${item.title}</h3>
                        <p class="cart__item-price">${formatPrice(item.price)} c/u</p>
                    </div>
                </div>
                <div class="cart__controls">
                    <button class="cart__quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart__quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                    <button class="cart__remove-btn" data-action="remove" data-id="${item.id}">Eliminar</button>
                </div>
            `

            cartItemsContainer.appendChild(itemElement)
        })

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        cartSummary.innerHTML = `
            <p>Total de productos: ${cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            <p>Total: ${formatPrice(total)}</p>
        `

        updateCartCount()
    }

    function addToCart(product) {
        const existingItem = cart.find((item) => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += 1
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            })
        }

        saveCart()
        renderCart()
        brokenFunction()
    }

    function changeQuantity(productId, action) {
        const item = cart.find((entry) => entry.id === productId)

        if (!item) {
            return
        }

        if (action === "increase") {
            item.quantity += 1
        } else if (action === "decrease") {
            item.quantity -= 1
        } else if (action === "remove") {
            cart = cart.filter((entry) => entry.id !== productId)
            saveCart()
            renderCart()
            return
        }

        if (item.quantity <= 0) {
            cart = cart.filter((entry) => entry.id !== productId)
        }

        saveCart()
        renderCart()
    }

    cartItemsContainer?.addEventListener("click", (event) => {
        const button = event.target.closest("button")

        if (!button) {
            return
        }

        const { action, id } = button.dataset
        changeQuantity(Number(id), action)
    })

    const apiUrl = "https://fakestoreapi.com/products"

    async function Products() {
        try {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error("Error en la respuesta")
            }

            const products = await response.json()
            const productsGrid = document.querySelector(".products__grid")

            productsGrid.innerHTML = ""

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
                    <p class="card__produtext">${formatPrice(producto.price)}</p>
                    <button class="card__button" type="button">Añadir al Carrito</button>
                `

                const addButton = card.querySelector(".card__button")
                addButton.addEventListener("click", () => addToCart(producto))

                productsGrid.appendChild(card)
            })

            if (products.length === 0) {
                console.log("No hay productos")
            }
        } catch (error) {
            console.error("No se pudieron cargar los productos", error)
        }
    }

    renderCart()
    Products()
})
