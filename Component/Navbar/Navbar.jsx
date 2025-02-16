import React from 'react'
import logo from "../../assets/logo.png"

const NavbarMenu = [
    {
        id: 1,
        title: "New Release",
        link: "/",
        delay: "0.2",
    },
    {
        id: 2,
        title: "Men",
        link: "#",
        delay: "0.4",
    },
    {
        id: 3,
        title: "Women",
        link: "#",
        delay: "0.6",
    },
    {
        id: 4,
        title: "Kids",
        link: "#",
        delay: "0.8",
    },
    {
        id: 5,
        title: "Customize",
        link: "#",
        delay: "1",
    },
]

const Navbar = () => {
    return (
        <nav className='bg-primary bg-[#c11912] text-white'>
            <div className='container py-6 flex justify-between items-center'>
                {/* logo section  */}
                <div>
                    <img src={logo} alt="" className='w-[100px]' />
                </div>
                {/* menu section  */}
                <div>
                    <ul>
                        {NavbarMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.link} className=''>{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* Icons section  */}

                {/* Mobail Hamburger section  */}

            </div>
        </nav>
    )
}

export default Navbar