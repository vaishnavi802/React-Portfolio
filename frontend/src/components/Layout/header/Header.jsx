import React, {useRef, useEffect} from 'react'
import { Container } from 'reactstrap'
import 'remixicon/fonts/remixicon.css'
import './header.css'

const navlinks = [
    {
        display:'Home',
        url :'#home'
    },
    {
        display:'About',
        url :'#about'
    },
    {
        display:'Projects',
        url :'#services'
    },
    {
        display:'Experience',
        url :'#experience'
    },
    {
        display:'Contact',
        url :'#contact'
    },
]

const Header = () => {

    const headRef = useRef(null)
    const menuRef= useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headRef.current.classList.add('header_shrink')
            }else{
                headRef.current.classList.remove('header_shrink')
            }
        })

        return ()=> {
            window.removeEventListener('scroll',null)
        }

    }, [])

const menuToggle = () => menuRef.current.classList.toggle('menu_active')

const handleClick = e => {
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
        left : 0,
        top : location - 70
    })

}
   


  return  (
  <header className="header" ref={headRef} onClick={menuToggle}>
    <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo"><h5>Vaishnavi</h5></div>
        
            <div className="nav_menu" ref={menuRef}>
            <ul className="nav_list">
                {
                    navlinks.map((item, index) => <li className="nav_item" key={index}>
                    <a href ={item.url} onClick={handleClick}>{item.display}</a>
                </li>)

                }
            </ul>
        </div>

        <div className="nav_right d-flex align-items-center gap-4">
            <button className="btn">Let's Explore</button>
            <span className="mobile_menu"><i class="ri-menu-5-line" onClick={menuToggle}></i></span>
        </div>
        </div>

        
    </Container>
    </header>
    );
}

export default Header