import './navbar.css' 
import CartWidget from './Cartwidget/CartWidget'
import { NavLink } from 'react-router-dom'

const navbar = () => {

    const src = 'https://randomuser.me/api/portraits/lego/2.jpg'

    return(
        <div className='navbar'>
            <NavLink to='/'> <img src={src} alt='Avatar' className='logo' style={{height:'80px'}}/> </NavLink>
            <div className="Categories">
                <NavLink to={'/category/fisicos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Físicos</NavLink>
                <NavLink to={'/category/ebook'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>eBooks</NavLink>
                <NavLink to={'/category/otros'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Otros</NavLink>
            </div>
            <CartWidget />
        </div>
    )
}

export default navbar