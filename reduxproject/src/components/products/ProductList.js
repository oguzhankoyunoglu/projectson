import React, { Component } from 'react'
import { connect } from "react-redux"
import { Badge } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as productActions from "../../redux/actions/productActions"
import { Table } from 'reactstrap';
//  #id demek
class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }
    render() {
        return (
            <div>

                <h3>
                    <Badge color="warning">
                        Products
                    </Badge>
                    <Badge color="success">
                        {this.props.currentCategory.categoryName}
                    </Badge>
                        <Table>
                        <thead>
                            <tr>
                                <th>#</th>  
                                <th>Ürün Adı</th>
                                <th>Fiyat</th>
                                <th>Birim</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(product =>(
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.birim}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>

                </h3>
            </div>
        )

    }
}

function mapStateToProps(state) {   //reducer bağladık
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer

    }
}

function mapDispatchToProps(dispatch) {   //aksiyonu bağladık
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductList)



//data reduxtan geliyor