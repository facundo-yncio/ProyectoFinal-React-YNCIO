import './ItemDetail.css'
import { useState, useEffect } from 'react'
import ItemDetailContent from '../ItemDetailContent/ItemDetailContent'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Firebase/index'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetail = () => {
    const [product, setProduct] = useState() 
    const [loading, setLoading] = useState(true)

    const { productId } = useParams() 

    useEffect(() => {

        const prodId = doc(db, 'products', productId)
        getDoc(prodId).then(response => {
            const productData = response.data()
            const completeProd = {id:productId , ...productData}
            setProduct(completeProd)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetailContent  {...product} />
        </div>
    )
}

export default ItemDetail