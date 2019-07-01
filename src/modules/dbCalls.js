const remoteURL = "http://localhost:5002"

export default {

    getUser(id) {
        return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
    },

    getProduct(id) {
        return fetch(`${remoteURL}/products/${id}`).then(e => e.json())
    },

    getPurchase(id) {
        return fetch(`${remoteURL}/purchases/${id}`).then(e => e.json())
    },

    ///...///

    getAllUsers: () => {
        return fetch(`${remoteURL}/users`).then(e => e.json())
    },

    getAllProducts() {
        return fetch(`${remoteURL}/products`).then(e => e.json())
    },

    getAllPurchases() {
        return fetch(`${remoteURL}/purchases`).then(e => e.json())
    },

    ///...///

    postNewUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(e => e.json())
    },

    postNewProduct(newProduct) {
        return fetch(`${remoteURL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        }).then(e => e.json())
    },

    postNewPurchase(newPurchase) {
        return fetch(`${remoteURL}/purchases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }).then(e => e.json())
    },

    ///...///


    putProduct(editedProduct) {
        return fetch(`${remoteURL}/products/${editedProduct.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedProduct)
        }).then(e => e.json())
    },

    putPurchase(editedPurchase) {

        return fetch(`${remoteURL}/purchases/${editedPurchase.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPurchase)
        }).then(e => e.json())
    },

    ///...///

    deleteProduct(id) {
        return fetch(`${remoteURL}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json(0))
    },

    deletePurchase(id) {
        return fetch(`${remoteURL}/purchases/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json())
    }
}