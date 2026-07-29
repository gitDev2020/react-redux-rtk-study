import {addCommentActionCreator} from "../../redux/productPageReducer";
import { connect } from 'react-redux';
import ProductPage from "./ProductPage";



const mapStateToProps = (state) =>({
    productPage: state.productPage
});




const ProductPageContainer = connect(mapStateToProps,{addCommentActionCreator})(ProductPage); 

export default ProductPageContainer;


