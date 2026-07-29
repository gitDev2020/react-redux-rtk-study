import React from 'react';
import Comment from "./Comment";
import globalStyles from './../../App.module.css';
import styles from './Product.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../redux/productPageReducer';

const ProductPage = ({productPage, addCommentActionCreator}) => {

    const distath = useDispatch()

    const {product, comments} = useSelector((state) => state.productPage);

    let textareaElement = React.createRef();

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
                         src={product.imgUrl} alt={product.title}/>
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

export default ProductPage;
