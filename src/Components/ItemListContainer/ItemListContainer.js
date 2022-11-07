import './itemListContainer.css' 
import ItemCard from '../ItemCard/ItemCard';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../Services/Firebase/index'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState(true) 

    const { categoryId } = useParams() 

    useEffect(() => { 
        setLoading(true) 

        const collectionId = categoryId 
        ? query(collection(db, 'products'), where('category','==',categoryId))    
        : collection(db, 'products') 
        
        getDocs(collectionId).then(response => {
            const productsFromDb = response.docs.map(doc => { 
                const data = doc.data() 
                return {id: doc.id, ...data}
            })
            setProducts(productsFromDb)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false) 
        }) 
    }, [categoryId])

    if(loading) { 
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='listas'>
            {products.map(prod => <ItemCard key={prod.id} {...prod}/>)}
        </div>
    )
    
}

export default ItemListContainer