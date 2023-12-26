import React from "react";
import {IoFastFoodOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import {motion} from "framer-motion";
import DropdownMenu from './DropdownMenu';

//create react component
const Header = () => {
    return (
        <nav>
            <motion.div initial={{x: "-100%"}} whileInView={{x: 0}}>
                <Link to="/"> <IoFastFoodOutline/></Link>
            </motion.div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">
                    <FiShoppingCart/>
                </Link>
                <DropdownMenu/>
            </div>
        </nav>
    );
};

export default Header;
