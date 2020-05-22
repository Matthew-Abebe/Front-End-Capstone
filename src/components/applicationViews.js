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
import ProbabilityDrive from './probability/probabilty';
import ProbabilityDriveTicket from './probability/probabilityDriveTicket';
import ProbabilityTicketList from './probability/probabilityTicketList'

class ApplicationViews extends Component {

    state = {
        users: [],
        products: [],
        purchases: [],
        driveTickets: []
    };

    getTimeStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + "/" + (now.getDate()) + "/" + now.getFullYear() + " " + now.getHours() + ":"
            + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ":" + ((now.getSeconds() < 10) ? ("0" + now
                .getSeconds()) : (now.getSeconds())));
    }

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

    addDriveTickets = (driveTicket) =>
        DbCalls.postNewDriveTicket(driveTicket)
            .then(() => DbCalls.getAllDriveTickets())
            .then(driveTickets =>
                this.setState({
                    driveTickets: driveTickets
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

    addDriveTicket = (driveTicket) => {
        
        let userId = sessionStorage.getItem("userId")

        const driveTicketObj = {
            userId: parseInt(userId),
            driveTicketId: driveTicket.id,
            driveTicketName: driveTicket.drive_name,
            driveTicketLocation: driveTicket.location_name
        }
        console.log(driveTicketObj)
        DbCalls.postNewDriveTicket(driveTicketObj)
            .then(() => DbCalls.getUserDriveTickets())
            .then(driveTickets =>
                this.setState({
                    driveTickets: driveTickets
                }))
                alert(`Hi ${driveTicketObj.driveTicketName}. You have a new drive ticket for your trip to ${driveTicketObj.driveTicketLocation}!`)
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

    deleteUserProduct = (userProduct) => {
        const newState = {};
        DbCalls.deleteUserProduct(userProduct)
            .then(() =>
                DbCalls.getUserProducts()
            )
            .then(userProducts => { newState.userProducts = userProducts })
            .then(() => this.setState(newState))
    }

    deleteDriveTicket = (driveTicket) => {
        const newState = {};
        DbCalls.deleteDriveTicket(driveTicket)
            .then(() =>
                DbCalls.getUserDriveTickets()
            )
            .then(driveTickets => { newState.driveTickets = driveTickets })
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
            driveTickets: await DbCalls.getUserDriveTickets()
        })
        console.log(this.state.users)
        console.log(this.state.products)
        console.log(this.state.purchases)
        console.log(this.state.driveTickets)
    }

    componentDidMount = () => {
        this.fetchAll();
    }

    isAuthenticated = () => sessionStorage.getItem("userId") !== null


    render() {
        // console.log(this.state.purchases)
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

                <Route exact path="/probabilityDriveTickets" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ProbabilityTicketList {...props}
                            
                        addDriveTicket={this.addDriveTicket}
                        deleteDriveTicket={this.deleteDriveTicket}
                        driveTickets={this.state.driveTickets}
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
                        // deleteProduct={this.deleteProduct}
                        // products={this.state.products}
                        deleteUserProduct={this.deleteUserProduct}
                        userProducts={this.state.userProducts}
                        
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
                            return <ProbabilityDrive {...props}

                            addDriveTicket={this.addDriveTicket}
                            addDriveTickets={this.addDriveTickets}
                            driveTickets={this.state.driveTickets}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }

                    }} />
                    
                    <Route exact path="/probabilityDriveTicket"
                    render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ProbabilityDriveTicket {
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