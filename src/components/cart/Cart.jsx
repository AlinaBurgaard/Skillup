import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
// import burger3 here

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  // Add state for the quantity of each item using useState hook
  // The state object should look something like this: {1: 0, 2: 0, 3: 0}
  const [items, setItems] = React.useState({ 1: 0, 2: 0, 3: 0 });

  const increment = (item) => {
    const newItems = { ...items };
    newItems[item] += 1;
    setItems(newItems);
  };

  const decrement = (item) => {
    // Add the function for decrementing the order by 1, it cannot go below 0
    const newItems = { ...items };
    if (newItems[item] > 0) {
      newItems[item] -= 1;
      setItems(newItems);
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={items[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}

        // Add the function for decrementing the order by 1 
       
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={items[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        // Add the function for decrementing the order by 2
       
        />

        {/* Fill up the code for Cheese Burger similarly */}

        <CartItem
            title={"Cheeseburger with French Fries"}
            img={burger3}
            value={items[3]}
            increment={() => increment(3)}
            decrement={() => decrement(3)}
        />
       

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
