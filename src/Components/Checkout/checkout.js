import { Cart } from '../../Context/Cart'
import { useContext } from "react"
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../Services/Firebase/index'

const Checkout = () => {

    const { cartArray, totalAmount } = useContext(Cart)

    const handleSubmit = (e) => {

        e.preventDefault()
        const {name, phone, mail } = e.target.elements

        const order = {
            client: {
                name: name.value,
                phone: phone.value,
                mail: mail.value
            },
            items: cartArray,
            total: totalAmount
        }
        const orderCreated =  addDoc(collection(db, "orders"), {
        ...order
        })
    }
 
    return(
        <div>
            <h1>¡Último paso!</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre y apellido:  
                        <input type="text" id="name"/> 
                    </label>
                </div>
                <div>
                    <label>
                        Teléfono:  
                        <input type="text" id="phone"/> 
                    </label>
                </div>
                <div>
                    <label>
                        Mail:  
                        <input type="text" id="mail"/> 
                    </label>
                </div>
                <input type="submit" value="Completar pedido" />
            </form>
        </div>
    )
}

export default Checkout