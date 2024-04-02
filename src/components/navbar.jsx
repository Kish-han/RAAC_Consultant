import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className="fixed right-0 left-0 top-0  flex items-center justify-between pl-4 lg:px-10 h-12 z-40 bg-[#F6F8FF] shadow-md">
            {/* Logo */}
            <h1>RAAC</h1>
            {/* mobileNavbar */}
            <div className="navlinks relative ">
                <div className="lg:hidden text-[30px] mr-4 cursor-pointer">
                    {toggle ? <IoMdClose onClick={() => { setToggle(false) }} /> : <IoMdMenu onClick={() => { setToggle(true) }} />}
                    {/* Links */}
                </div>
                <ul
                    className={`flex flex-col lg:flex-row absolute lg:relative bg-[#F6F8FF] rounded-bl-lg ${toggle
                        ? "right-0 lg:right-0  mt-4 w-[180px] "
                        : "right-[-200px] lg:right-0"
                        } top-5 lg:top-0  h-[300px] lg:h-full items-center font-[500]  shadow-lg lg:shadow-none z-[50] transition-all duration-300 ease-in-out justify-around space-x-0 lg:space-x-12`}
                >
                    <li>
                        <a href="#" onClick={() => { setToggle(false) }}>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => { setToggle(false) }}>About Us</a>
                    </li>
                    <li>
                        <a href="#services" onClick={() => { setToggle(false) }}>Services</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => { setToggle(false) }}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar