import './ItemDetailContent.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from "react"
import { Cart } from '../../Context/Cart'


const ItemDetailContent = ({ id, name, img, category, description, price, stock }) => { 

    const { addItemToCart, isInCart, getProductQuantity } = useContext(Cart)

    const handleOnAdd = (quantity) => {

        const productToAdd = {
            id,
            name,
            price
        }

        addItemToCart(productToAdd, quantity)
    }

    return ( 
        <article className="CardItem"> 
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    ${price} 
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetailContent