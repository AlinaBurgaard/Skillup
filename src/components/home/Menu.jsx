// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
    const addToCartHandler = (itemNum) => {
        console.log(itemNum);
    }

    return (
        <>
                <MenuCard
                    itemNum={1}
                    burgerSrc={burger1}
                    price={200}
                    title="Cheese Burger"
                    handler={addToCartHandler}
                    delay={0.1}
                />
            <MenuCard
                itemNum={2}
                burgerSrc={burger2}
                price={200}
                title="Cheese Burger"
                handler={addToCartHandler}
                delay={0.1}
            />
            <MenuCard
                itemNum={3}
                burgerSrc={burger3}
                price={200}
                title="Cheese Burger"
                handler={addToCartHandler}
                delay={0.1}
            />
        </>
    )
}

export default Menu;