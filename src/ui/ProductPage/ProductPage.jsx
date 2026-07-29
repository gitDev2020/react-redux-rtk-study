import React from 'react';
import Comment from "./Comment";
import globalStyles from './../../App.module.css';
import styles from './Product.module.css';
import PropTypes from 'prop-types';

const ProductPage = ({productPage, addCommentActionCreator}) => {

    let textareaElement = React.createRef();

    let {product, comments} = productPage;

    let commentsElements = comments.map(c =>
        <div key={c.id}>
            <Comment text={c.text}/>
            <hr/>
        </div>);

    let onAddCommentClick = () => {
        let comment = textareaElement.current.value;

        addCommentActionCreator(comment)



     textareaElement.current.value='';
    }


    return (
        <div>
            <div className={globalStyles.productCard}>
                <div>
                    <img className={`${globalStyles.btn} ${styles.btn}`}
                         src={product.imgUrl}/>
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <div>
                        {product.description}
                    </div>
                </div>
                <div>
                    <div>Обсуждений <span>10</span></div>
                    <div>Отзывов <span>13</span></div>
                </div>
            </div>
            <div>
                <div>
                    <h3>Отзывы:</h3>
                </div>
                <div>
                    {commentsElements}
                </div>
                <div>
                    <textarea ref={textareaElement}></textarea>
                </div>
                <div>
                    <button onClick={ onAddCommentClick }>Add comment</button>
                </div>
            </div>
        </div>)
}

ProductPage.propTypes = {
    productPage: PropTypes.shape({
        product: PropTypes.object.isRequired,
        comments: PropTypes.array.isRequired
    })
};


export default ProductPage;
