import './Product.css'
import { useState, useContext } from 'react'
import { ProductContext } from '../FakeStore/FakeStore'

export const Product = (props) => {

    const {image, price, rating, id, category} = props

    const {categorySelected} = useContext(ProductContext)

    return(
        <>
        <li className={`Products-li ${category == categorySelected ? `isActive` : `` || categorySelected == `all` ? `isActive` : ``}`}>
            <ProductItem image={image} rating={rating} price={price} id={id} category={category} />
        </li>
        </>
    )
}

const ProductItem = (props) => {

    const {setProductSelected} = useContext(ProductContext)

    const {image , rating , price, title, id, category} = props

    return(
            <div className={`Products-item`} onClick={() => setProductSelected(id)}>
                <picture className="Products-picture">
                    <img src={image} alt={title} className="Products-img" />
                </picture>
                <div className="Products-wrapper">
                    <div className="Rating-wrapper">
                        <span className="Products-span">{rating.rate}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Rating-svg" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>
                    <h2 className="Products-h2 Price">{price} €</h2>
                </div>
            </div>
    )
}