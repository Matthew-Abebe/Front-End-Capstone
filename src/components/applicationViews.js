import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './home'
import Register from './authentication/register'
import Login from './authentication/login'
import DbCalls from '../modules/dbCalls'
import ProductList from './products/productList'
import NewProductForm from './products/newProductForm'
import ProductDetails from './products/productDetails'
import ProductEditForm from './products/productEditForm'
import LeadList from './leads/leadList'
import NewLeadForm from './leads/newLeadForm'
import LeadDetails from './leads/leadDetails'
import LeadEditForm from './leads/leadEditForm'
import PurchaseEditForm from './opportunities/purchasesEdit'
import ProbabilityTicketList from './sales/probabilityTicketList'
import SalesList from './sales/salesList'
import SalesDetails from './sales/salesDetails';
import SalesEditForm from './sales/salesEditForm';
import Opportunities from './opportunities/opportunities';


class ApplicationViews extends Component {

    state = {
        users: [],
        products: [],
        leads: [],
        sales: [],
        purchases: []
    };

    addUser = (user) =>
        DbCalls.postNewUser(user)
            .then(() => DbCalls.getAllUsers())
            .then(users =>
                this.setState({
                    users: users
                }))

    addProducts = (product) =>
        DbCalls.postNewProduct(product)
            .then(() => DbCalls.getUserProducts())
            .then(products =>
                this.setState({
                    products: products
                }))

    addLeads = (lead) =>
        DbCalls.postNewLead(lead)
            .then(() => DbCalls.getUserLeads())
            .then(leads =>
                this.setState({
                    leads: leads
                }))

    addSales = (sale) =>
        DbCalls.postNewSale(sale)
            .then(() => DbCalls.getUserSales())
            .then(sales =>
                this.setState({
                    sales: sales
                }))

    putProduct = (editedProductObject) => {
        return DbCalls.putProduct(editedProductObject)
            .then(() => DbCalls.getUserProducts())
            .then(products => {
                this.setState({
                    products: products
                })
            })

    }

    putLead = (editedLeadObject) => {
        return DbCalls.putLead(editedLeadObject)
            .then(() => DbCalls.getUserLeads())
            .then(leads => {
                this.setState({
                    leads: leads
                })
            })

    }

    putSale = (editedSaleObject) => {
        return DbCalls.putSale(editedSaleObject)
            .then(() => DbCalls.getUserSales())
            .then(sales => {
                this.setState({
                    sales: sales
                })
            })
    }

    deleteProduct = (product) => {
        const newState = {};
        DbCalls.deleteProduct(product)
            .then(() =>
                DbCalls.getUserProducts()
            )
            .then(products => { newState.products = products })
            .then(() => this.setState(newState))
    }

    deleteLead = (lead) => {
        const newState = {};
        DbCalls.deleteLead(lead)
            .then(() =>
                DbCalls.getUserLeads()
            )
            .then(leads => { newState.leads = leads })
            .then(() => this.setState(newState))
    }

    deleteSale = (sale) => {
        const newState = {};
        DbCalls.deleteSale(sale)
            .then(() =>
                DbCalls.getUserSales()
            )
            .then(sales => { newState.sales = sales })
            .then(() => this.setState(newState))
    }

    fetchAll = async () => {
        this.setState({
            users: await DbCalls.getAllUsers(),
            products: await DbCalls.getUserProducts(),
            leads: await DbCalls.getUserLeads(),
            sales: await DbCalls.getUserSales(),
        })
        // console.log(this.state.users)
        // console.log(this.state.products)
        // console.log(this.state.leads)
        // console.log(this.state.sales)
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

                <Route exact path="/products" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ProductList
                            products={this.state.products}
                            addPurchase={this.addPurchase}
                            deleteProduct={this.deleteProduct}
                            deleteUserProduct={this.deleteUserProduct}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }
                } />

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

                <Route exact path="/sales" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <SalesList {...props}
                            
                        sales={this.state.sales}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }
                } />

                <Route path="/products/new" render={(props) => {
                    return <NewProductForm {...props}
                        addProducts={this.addProducts}
                        products={this.state.products}
                    />
                }} />

                <Route path="/leads/new" render={(props) => {
                    return <NewLeadForm {...props}
                        addLeads={this.addLeads}
                        leads={this.state.leads}
                    />
                }} />

                <Route exact path="/products/:productId(\d+)/details" render={(props) => {
                    return <ProductDetails {
                        ...props
                    }
                        deleteProduct={this.deleteProduct}
                        products={this.state.products}
                        deleteUserProduct={this.deleteUserProduct}
                        userProducts={this.state.userProducts}
                        
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

                    <Route exact path="/sales/:saleId(\d+)/details" render={(props) => {
                    return <SalesDetails {
                        ...props
                    }
                        deleteSale={this.deleteSale}
                        driveTickets={this.state.driveTickets} 
                        sales={this.state.sales}  
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

                <Route path="/leads/:leadId(\d+)/edit"
                    render={props => {
                        return <LeadEditForm {
                            ...props
                        }
                            leads={this.state.leads}
                            products={this.state.products}
                            putLead={this.putLead}
                        />
                    }} />

                <Route path="/sales/:saleId(\d+)/edit"
                    render={props => {
                        return <SalesEditForm {
                            ...props
                        }
                            sales={this.state.sales}
                            putSale={this.putSale}
                        />
                    }} />

                <Route exact path="/opportunities" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Opportunities {
                            ...props
                        }
                            leads={this.state.leads}
                            products={this.state.products}
                            sales={this.state.sales}
                            addSales={this.addSales}
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