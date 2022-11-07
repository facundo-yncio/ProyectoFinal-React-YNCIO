import './CartWidget.css' 
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { useContext } from "react"
import { Cart } from '../../../Context/Cart'

const Cartwidget = () => {

    const {totalQuantity} = useContext(Cart)
    const navigate = useNavigate()

    return(

        <button className='boton' to='/cart' onClick={() => navigate('/cart')}> 
            <FaShoppingCart style={{fontSize:'150%'}} />
            {totalQuantity} 
        </button>
    )
} 

export default Cartwidget