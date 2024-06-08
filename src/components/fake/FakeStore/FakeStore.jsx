import { useEffect, useState, useContext, createContext } from 'react'
import './FakeStore.css'
import {Product} from '../Product/Product'
import {ProductCard} from '../ProductCard/ProductCard'
import { ApiContext } from '../../../App'

export const ProductContext = createContext()

export const FakeStore = () => {

    const {page} = useContext(ApiContext)

    const { VITE_PRODUCTS } = import.meta.env

    const [products , setProducts] = useState()
    const [productSelected , setProductSelected] = useState(0)
    const [categorySelected , setCategorySelected] = useState(`all`)

    let dataRequest = async () => {
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }
        
        await fetch(VITE_PRODUCTS , options)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
        .catch(err => console.log(err))
        .finally(() => controller.abort())
    }

    useEffect(() => {
        dataRequest()
    }, []) 

    return(
        <>
        <main className={`Main ${page === 2 ? `isActive` : ``}`}>
            <ProductContext.Provider value={{productSelected , setProductSelected, categorySelected, setCategorySelected}}>
            <h2 className="Products-h2">Products listed below:</h2>
            <div className="Category-wrapper">
                <span className="Category-span">Filter by:</span>
                <button className="Category-btn" onClick={() => setCategorySelected(`all`)}>All</button>
                <button className="Category-btn" onClick={() => setCategorySelected(`men's clothing`)}>Men's</button>
                <button className="Category-btn" onClick={() => setCategorySelected(`women's clothing`)}>Women's</button>
                <button className="Category-btn" onClick={() => setCategorySelected(`jewelery`)}>Jewelery</button>
                <button className="Category-btn" onClick={() => setCategorySelected(`electronics`)}>Electronics</button>
            </div>
            <ul className="Products-grid">
                {!products && <li className="Products-li Products-li--fail">No products to show</li>}
                {products && products.map(eachProduct => 
                    <Product key={eachProduct.id} {...eachProduct} />
                )} 
            </ul>
                {products && products.map(eachProduct => 
                    <ProductCard key={eachProduct.id} {...eachProduct} />
                )}
            </ProductContext.Provider>
        </main>
        </>
    )
}