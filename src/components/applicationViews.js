import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './home'
import Register from './authentication/register'
import Login from './authentication/login'
import DbCalls from '../modules/dbCalls'
import LeadList from './leads/leadList'
import ProductNewForm from './leads/productNew'
import LeadDetails from './leads/leadDetails'
import ProductEditForm from './leads/productEditForm'
import Purchases from './purchases/purchases'
import PurchaseEditForm from './purchases/purchasesEdit'
import ProbabilityDrive from './probability/probabilityDrive';
import ProbabilityTicketList from './probability/probabilityTicketList'
import PurchaseTicketList from './probability/purchaseTicketList'
import ProbabilityDriveTicketDetails from './probability/probabilityDriveTicketDetails';
import ProbabilityDriveEditForm from './probability/probabilityDriveTicketEditForm';

class ApplicationViews extends Component {

    state = {
        users: [],
        leads: [],
        purchases: [],
        driveTickets: [],
        purchaseTickets: []
    };

    getTimeStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + "/" + (now.getDate()) + "/" + now.getFullYear());
    }

    addUser = (user) =>
        DbCalls.postNewUser(user)
            .then(() => DbCalls.getAllUsers())
            .then(users =>
                this.setState({
                    users: users
                }))

    addLeads = (lead) =>
        DbCalls.postNewLead(lead)
            .then(() => DbCalls.getAllLeads())
            .then(leads =>
                this.setState({
                    leads: leads
                }))

    addDriveTickets = (driveTicket) =>
        DbCalls.postNewDriveTicket(driveTicket)
            .then(() => DbCalls.getAllDriveTickets())
            .then(driveTickets =>
                this.setState({
                    driveTickets: driveTickets
                }))

    addPurchaseTickets = (purchaseTicket) =>
        DbCalls.postNewPurchaseTicket(purchaseTicket)
            .then(() => DbCalls.getAllPurchaseTickets())
            .then(purchaseTickets =>
                this.setState({
                    purchaseTickets: purchaseTickets
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
            driveTicketLocation: driveTicket.location_name,
            driveTicketDateTime: this.getTimeStamp()
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

    putLead = (editedLeadObject) => {
        return DbCalls.putLead(editedLeadObject)
            .then(() => DbCalls.getAllLeads())
            .then(leads => {
                this.setState({
                    leads: leads
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

    putDriveTicket = (editedDriveTicketObject) => {
        return DbCalls.putDriveTicket(editedDriveTicketObject)
            .then(() => DbCalls.getUserDriveTickets())
            .then(driveTickets => {
                this.setState({
                    driveTickets: driveTickets
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

    deleteLead = (lead) => {
        const newState = {};
        DbCalls.deleteLead(lead)
            .then(() =>
                DbCalls.getAllLeads()
            )
            .then(leads => { newState.leads = leads })
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
            leads: await DbCalls.getAllLeads(),
            purchases: await DbCalls.getUserPurchases(),
            driveTickets: await DbCalls.getUserDriveTickets(),
            purchaseTickets: await DbCalls.getUserPurchaseTickets()
        })
        console.log(this.state.users)
        console.log(this.state.leads)
        console.log(this.state.purchases)
        console.log(this.state.driveTickets) //should only return tickets for user that is logged in
        console.log(this.state.purchaseTickets)
    }

    componentDidMount = () => {
        this.fetchAll();
    }

    isAuthenticated = () => sessionStorage.getItem("userId") !== null


    render() {
        return (

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

                <Route exact path="/leads" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LeadList
                            products={this.state.products}
                            leads={this.state.leads}
                            addPurchase={this.addPurchase}
                            deleteProduct={this.deleteProduct}
                            deleteUserProduct={this.deleteUserProduct}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }
                } />

                <Route exact path="/probabilityDriveTickets" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ProbabilityTicketList {...props}
                            
                        // addDriveTicket={this.addDriveTicket}
                        // putDriveTicket={this.putDriveTicket}
                        // deleteDriveTicket={this.deleteDriveTicket}
                        driveTickets={this.state.driveTickets}
                        purchaseTickets={this.state.purchaseTickets}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }
                } />

                <Route exact path="/purchaseTickets" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <PurchaseTicketList {...props}
                            
                        // addDriveTicket={this.addDriveTicket}
                        // putDriveTicket={this.putDriveTicket}
                        // deleteDriveTicket={this.deleteDriveTicket}
                        driveTickets={this.state.driveTickets}
                        purchaseTickets={this.state.purchaseTickets}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }
                } />

                 <Route path="/products/new" render={(props) => {
                    return <ProductNewForm {...props}
                        addProducts={this.addProducts}
                        addLeads={this.addLeads}
                        products={this.state.products}
                    />
                }} /> 

                <Route exact path="/leads/:leadId(\d+)/details" render={(props) => {
                    return <LeadDetails {
                        ...props
                    }
                        deleteLead={this.deleteLead}
                        leads={this.state.leads}
                        deleteUserProduct={this.deleteUserProduct}
                        userProducts={this.state.userProducts}
                        
                    />
                }} />

                    <Route exact path="/probabilityDriveTickets/:driveTicketId(\d+)/details" render={(props) => {
                    return <ProbabilityDriveTicketDetails {
                        ...props
                    }
                        deleteDriveTicket={this.deleteDriveTicket}
                        driveTickets={this.state.driveTickets}   
                    />
                }} />

                <Route path="/leads/:leadId(\d+)/edit"
                    render={props => {
                        return <ProductEditForm {
                            ...props
                        }
                            leads={this.state.leads}
                            products={this.state.products}
                            putLead={this.putLead}
                        />
                    }} />

                <Route path="/probabilityDriveTickets/:driveTicketId(\d+)/edit"
                    render={props => {
                        return <ProbabilityDriveEditForm {
                            ...props
                        }
                            driveTickets={this.state.driveTickets}
                            putDriveTicket={this.putDriveTicket}
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
                            addPurchaseTickets={this.addPurchaseTickets}
                            driveTickets={this.state.driveTickets}
                            purchaseTickets={this.state.purchaseTickets}
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