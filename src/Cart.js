import React from 'react';

const Cart = () => {
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart')) || []);

  // You can store the cart in localStorage or state
  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h1 className="text-center my-5" style={{ color: "#ffcc00" }}>Cart</h1>
      <div className="container mt-5">
        <div className="row">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((product, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card" style={{ width: '100%' }}>
                  <div className="image1">
                    <img src={product.image} className="card-img-top" alt="Card Image" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      250 ml
                      <br />
                      <span className="off">₹{product.price + 20}</span> |{' '}
                      <span className="off1">₹{product.price}</span>
                    </p>
                    {/* <button className="btn" onClick={() => removeFromCart(product)}>
                      Remove from Cart
                    </button> */}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
