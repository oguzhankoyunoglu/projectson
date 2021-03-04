import React, { Component } from 'react'
import { connect } from "react-redux"
import { ListGroupItem } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as categoryAction from "../../redux/actions/categoryAction"
import { ListGroup } from "reactstrap"
import { Badge } from 'reactstrap'
import * as productActions from "../../redux/actions/productActions"

//{this.props.categories.length}   satır 15 
class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories();
    }

    selectCategory= category =>{
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id)   ///
    }

    render() {
        return (
            <div>
                <h3>
                    <Badge color="warning">
                    Categories
                    </Badge>
                    
                </h3>
                <ListGroup>
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem active={category.id === this.props.currentCategory.id} onClick={() => this.selectCategory(category) } key={category.id}>
                                {category.categoryName}

                            </ListGroupItem>
                        ))}
                </ListGroup>
                
            </div>
        )
    }
}
//o storedaki tüm mekanizma
function mapStateToProps(state) {   //reducer bağladık
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {   //aksiyonu bağladık
    return {
        actions: {
            getCategories: bindActionCreators(categoryAction.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryAction.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)