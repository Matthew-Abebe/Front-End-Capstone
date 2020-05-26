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

    getDriveTicket(id) {
        return fetch(`${remoteURL}/probabilityDriveTickets/${id}`).then (e => e.json())
    },

    ///...///

    getAllUsers: () => {
        return fetch(`${remoteURL}/users`).then(e => e.json())
    },

    getAllProducts() {
        return fetch(`${remoteURL}/products`).then(e => e.json())
    },

    getUserProducts() {
        return fetch(`${remoteURL}/userProducts`).then(e => e.json())
    },

    getAllPurchases() {
        return fetch(`${remoteURL}/purchases`).then(e => e.json())
    },
    
    getAllDriveTickets() {
        return fetch (`${remoteURL}/probabilityDriveTickets`).then(e => e.json()) 
    },
    
    getUserPurchases() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/purchases?userId=${sessionId}`).then(e => e.json())
    },
    
    getUserDriveTickets() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/probabilityDriveTickets?userId=${sessionId}`).then(e => e.json())
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

    // postNewProduct(newProduct) {
    //     return fetch(`${remoteURL}/products`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(newProduct)
    //     }).then(e => e.json())
    // },

    postNewPurchase(newPurchase) {
        return fetch(`${remoteURL}/purchases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }).then(e => e.json())
    },

    postNewDriveTicket(newDriveTicket) {
        return fetch(`${remoteURL}/probabilityDriveTickets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDriveTicket)
        }).then(e => e.json())
    },

    ///...///

    // putProduct(editedProduct) {
    //     return fetch(`${remoteURL}/products/${editedProduct.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(editedProduct)
    //     }).then(e => e.json())
    // },

    // putPurchase(editedPurchase) {

    //     return fetch(`${remoteURL}/purchases/${editedPurchase.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(editedPurchase)
    //     }).then(e => e.json())
    // },

    putDriveTicket(editedDriveTicket) {

        return fetch(`${remoteURL}/probabilityDriveTickets/${editedDriveTicket.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedDriveTicket)
        }).then(e => e.json())
    },

    ///...///

    // deleteProduct(id) {
    //     return fetch(`${remoteURL}/products/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).then(e => e.json(0))
    // },

    // deleteUserProduct(id) {
    //     return fetch(`${remoteURL}/userProducts/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).then(e => e.json(0))
    // },

    deleteDriveTicket(id) {
        return fetch(`${remoteURL}/probabilityDriveTickets/${id}`, {
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