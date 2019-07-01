import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './home'
import Register from './authentication/register'
import Login from './authentication/login'
import DbCalls from '../modules/dbCalls'
import ProductList from './products/productList'
import ProductNewForm from './products/productNew'
import ProductDetails from './products/productDetails'
import ProductEditForm from './products/productEditForm'
import Purchases from './purchases/purchases'
import PurchaseEditForm from './purchases/purchasesEdit'
// import Spending from './purchases/spending'
import ProbabilityDrive from './probability/probabilty';


class ApplicationViews extends Component {

    state = {
        users: [],
        products: [],
        purchases: []
    };



    getTimeStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + "/" + (now.getDate()) + "/" + now.getFullYear() + " " + now.getHours() + ":"
            + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ":" + ((now.getSeconds() < 10) ? ("0" + now
                .getSeconds()) : (now.getSeconds())));
    }


    // getSpending = () => {
    //     DbCalls.getAllPurchases()
    //     .then(() => purchases)
    //     .then(purchases => {
    //         console.log(purchases)
    //     })}

    addUser = (user) =>
        DbCalls.postNewUser(user)
            .then(() => DbCalls.getAllUsers())
            .then(users =>
                this.setState({
                    users: users
                }))

    addProducts = (product) =>
        DbCalls.postNewProduct(product)
            .then(() => DbCalls.getAllProducts())
            .then(products =>
                this.setState({
                    products: products
                }))

    addPurchase = (purchase) => {
        
        let userId = sessionStorage.getItem("userId")
        
        const purchaseObj = {
            userId: parseInt(userId),
            productId: purchase.product.id,
            productName: purchase.product.product_name,
            productPrice: purchase.product.sale_price,
            description: purchase.product.description,
            dateTime: this.getTimeStamp()
        }
        console.log(purchaseObj)
        DbCalls.postNewPurchase(purchaseObj)
            .then(() => DbCalls.getUserPurchases())
            .then(purchases =>
                this.setState({
                    purchases: purchases
                }))
                alert(`You purchased: ${purchaseObj.productName}. Thank you!`)
    }

    putProduct = (editedProductObject) => {
        return DbCalls.putProduct(editedProductObject)
            .then(() => DbCalls.getAllProducts())
            .then(products => {
                this.setState({
                    products: products
                })
            })

    }

    putPurchase = (editedPurchaseObject) => {
        return DbCalls.putPurchase(editedPurchaseObject)
            .then(() => DbCalls.getUserPurchases())
            .then(purchases => {
                this.setState({
                    purchases: purchases
                })
            })

    }

    deleteProduct = (product) => {
        const newState = {};
        DbCalls.deleteProduct(product)
            .then(() =>
                DbCalls.getAllProducts()
            )
            .then(products => { newState.products = products })
            .then(() => this.setState(newState))
    }

    deletePurchase = (purchase) => {
        const newState = {};
        DbCalls.deletePurchase(purchase)
            .then(() =>
                DbCalls.getUserPurchases()
            )
            .then(purchases => { newState.purchases = purchases })
            .then(() => this.setState(newState))
    }


    fetchAll = async () => {
        this.setState({
            users: await DbCalls.getAllUsers(),
            products: await DbCalls.getAllProducts(),
            purchases: await DbCalls.getUserPurchases(),
        })
        console.log(this.state.users)
        console.log(this.state.products)
        console.log(this.state.purchases)
    }

    componentDidMount = () => {
        this.fetchAll();
    }

    isAuthenticated = () => sessionStorage.getItem("userId") !== null


    render() {
        console.log(this.state.purchases)
        return (
            //  <>

            <React.Fragment>


                <Route exact path="/"
                    render={(props) => {
                        return <Home {
                            ...props
                        }
                        />
                    }}
                />

                <Route path="/login"
                    render={(props) => {
                        return <Login {
                            ...props
                        }
                            users={this.state.users}
                        />
                    }}
                />

                <Route path="/register"
                    render={(props) => {
                        return <Register {
                            ...props
                        }
                            users={this.state.users}
                            addUser={this.addUser}
                        />
                    }}
                />


                <Route exact path="/products" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ProductList
                            products={this.state.products}
                            deleteProduct={this.deleteProduct}
                            addPurchase={this.addPurchase}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }
                } />

                <Route path="/products/new" render={(props) => {
                    return <ProductNewForm {...props}
                        addProducts={this.addProducts}
                        products={this.state.products}
                    />
                }} />

                <Route exact path="/products/:productId(\d+)/details" render={(props) => {
                    return <ProductDetails {
                        ...props
                    }
                        deleteProduct={this.deleteProduct}
                        products={this.state.products}
                    />

                }} />


                <Route path="/products/:productId(\d+)/edit"
                    render={props => {
                        return <ProductEditForm {
                            ...props
                        }
                            products={this.state.products}
                            putProduct={this.putProduct}
                        />

                    }} />


                <Route exact path="/purchases" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Purchases {
                            ...props
                        }
                            purchases={this.state.purchases}
                            deletePurchase={this.deletePurchase}
                            putPurchase={this.putPurchase}
                        // getSpending={this.getSpending}

                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/purchases/:purchasesId(\d+)/edit"
                    render={(props) => {
                        return <PurchaseEditForm {
                            ...props
                        }
                            purchases={this.state.purchases}
                            putPurchase={this.putPurchase}
                        />

                    }} />

                <Route exact path="/probabilityDrive"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ProbabilityDrive {
                                ...props
                            }

                            />
                        } else {
                            return <Redirect to="/login" />
                        }

                    }} />







            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)