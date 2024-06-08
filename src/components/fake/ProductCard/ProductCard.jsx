import './ProductCard.css'
import { ProductContext } from '../FakeStore/FakeStore'
import {useContext} from 'react'

export const ProductCard = (props) => {

    const {productSelected, setProductSelected} = useContext(ProductContext)

    const {image , description , title, rating, price, id} = props

    return(
        <>
        <div className={`Product ${productSelected == id ? `isActive` : ``}`}>
            <div className="Product-card">
                <svg onClick={() => setProductSelected(0)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Product-close" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                <div className="Product-description">
                    <h2 className="Product-h2">{title}</h2>
                    <p className="Product-description">{description}</p>
                    <div className="Price-wrapper">
                        <div className="Rating-wrapper">
                            <span className="Product-span">{rating.rate}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Rating-svg" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <h3 className="Product-h3 Price"><span className="Price-span">Price:</span> {price} €</h3>
                    </div>
                </div>
                <picture className="Product-picture">
                    <img src={image} alt={title} className="Product-img" />
                </picture>
            </div>
        </div>
        </>
    )
}