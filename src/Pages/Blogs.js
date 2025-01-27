import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import p1 from './image/apple.png'
import p2 from './image/ABC.png'
import p3 from './image/Asparagus.png'
import p4 from './image/avocado.png'
import p5 from  './image/banana.png'
import p6 from './image/beetroot.png'
import p7 from './image/bell pepper.png'
import p8 from './image/carrot.png'
import p9 from './image/cucumber.png'
import p10 from './image/dargon fruit.png'
import p11 from './image/fig.png'
import p12 from './image/grapes.png'
import p13 from './image/guava.png'
import p14 from './image/kiwi.png'
import p15 from './image/lemon.png'
import p16 from './image/mango.png'
import p17 from './image/mushmelon.png'
import p18 from './image/orange.png'
import p19 from './image/papaya.png'
import p20 from './image/peach.png'
import p21 from './image/pineapple.png'
import p22 from './image/pomogranet.png'
import p23 from './image/pumkin.png'
import p26 from './image/straberry.png'
import p27 from './image/tomato.png'
import p28 from './image/watermelon.png'
import p24 from './image/peer.png'
import p25 from './image/sapota.png'
import  { useState } from 'react';
import './Blogs.css'

const products = [
  { id: 1, name: 'Apple', price: 100, image: p1 },
  { id: 2, name: 'Avocado', price: 120, image: p4 },
  { id: 3, name: 'Banana', price: 50, image: p5 },
  { id: 4, name: 'Dragon Fruit', price: 135, image: p10 },
  { id: 5, name: 'Fig', price: 150, image: p11 },
  // Add more products here...
];
const Blogs = () => {
  return (
    <div>
      {/* Heading */}
      <h1 className="text-center my-5" style={{color:" #ffcc00"}}>Products</h1>

      {/* Card Grid */}
      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p1} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Apple</h5>
                <p className="card-text">  250 ml
          <p><span className="off">₹120</span> |<span className="off1" >₹100</span> &nbsp;<span className="off2">12%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4">
  <div className="card" style={{ width: '100%',}}>
    <div className="image1" >
      <img src={p4} className="card-img-top" alt="Card Image" style={{borderRadius: "10px"}} />
    </div>
    <div className="card-body">
      <h5 className="card-title">Avocado</h5>
      <p className="card-text">
        250 ml
        <br />
        <span className="off">₹150</span> | <span className="off1">₹120</span> &nbsp;
        <span className="off2">20% off</span>
      </p>
      <a href="#" className="btn">Order Now</a>
    </div>
  </div>
</div>


          {/* Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p5} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Banana</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹60</span> |<span className="off1" >₹50</span> &nbsp;<span  className="off2">10%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p10} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Dargon Fruit</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹160</span> |<span className="off1" >₹135</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
            {/* Card 1 */}
            <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p11} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Fig</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹180</span> |<span className="off1"  >₹150</span> &nbsp;<span className="off2">20%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p12} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Grapes</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹80</span> |<span className="off1" >₹65</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p13} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Guava</h5>
                <p className="card-text">  250 ml
          <p><span className="off" >₹90</span> |<span className="off1"  >₹75</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p14} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">kiwi</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹170</span> |<span className="off1" >₹155</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

           {/* Card 1 */}
           <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p15} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Lemon</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹50</span> |<span className="off1" >₹45</span> &nbsp;<span className="off2">10%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p16} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Mango</h5>
                <p className="card-text">  250 ml
          <p><span className="off" >₹100</span> |<span className="off1" >₹85</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p17} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Muskmelon</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹90</span> |<span className="off1"  >₹80</span> &nbsp;<span className="off2">12%offer</span></p> 
        </p>
                <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p18} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Orange</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹70</span> |<span className="off1" >₹60</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
            {/* Card 1 */}
            <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p19} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">papaya</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹80</span> |<span className="off1" >₹70</span> &nbsp;<span className="off2">12%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <div className="image1" >
              <img src={p20} className="card-img-top" alt="Card Image" />
            </div>
              <div className="card-body">
                <h5 className="card-title">peach</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹120</span> |<span className="off1"  >₹100</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <div className="image1" >
              <img src={p24} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">peer</h5>
                <p className="card-text">  250 ml
          <p><span className="off" >₹90</span> |<span className="off1" >₹75</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p25} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Sapota</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹50</span> |<span className="off1" >₹45</span> &nbsp;<span className="off2">10%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

            {/* Card 1 */}
            <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p26} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Strawberry</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹200</span> |<span className="off1"  >₹170</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p28} className="card-img-top" alt="Card Image" />

              </div>
              <div className="card-body">
                <h5 className="card-title">Watermelon</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹50</span> |<span className="off1" >₹45</span> &nbsp;<span className="off2">10%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          
          {/* Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p21} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Pineapple</h5>
                <p className="card-text">  250 ml
          <p><span className="off" >₹150</span> |<span className="off1" >₹130</span> &nbsp;<span className="off2">13%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <div className="image1" >
              <img src={p22} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Pomogranet</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹180</span> |<span className="off1" >₹160</span> &nbsp;<span className="off2">12%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>


          {/* Additional cards can follow the same pattern */}
        </div>
      </div>


<h1 style={{color:" #ffcc00"}}>VEGETABLES</h1>
      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p2} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">ABC</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹130</span> |<span className="off1" >₹100</span> &nbsp;<span className="off2">20%offer</span></p> 
        </p> 
        <a href="#" className="btn">Order Now</a> 
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p3} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Asparagus</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹80</span> |<span className="off1" >₹50</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p6} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Beetroot</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹60</span> |<span className="off1" >₹50</span> &nbsp;<span className="off2">12%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p7} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Bell pepper</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹90</span> |<span className="off1" >₹75</span> &nbsp;<span className="off2">15%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p8} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Carrot</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹70</span> |<span className="off1" >₹60</span> &nbsp;<span className="off2">10%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p9} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Cucumber</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹50</span> |<span className="off1" >₹45</span> &nbsp;<span className="off2">10%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p23} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Pumpkin</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹80</span> |<span className="off1" >₹60</span> &nbsp;<span className="off2">10%offer</span></p> 
        </p>
        <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: '100%' }}>
            <div className="image1" >
              <img src={p27} className="card-img-top" alt="Card Image" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Tomato</h5>
                <p className="card-text">  250 ml
          <p><span  className="off">₹60</span> |<span className="off1" >₹50</span> &nbsp;<span className="off2">12%offer</span></p> 
        </p>
                <a href="#" className="btn">Order Now</a>
              </div>
            </div>
          </div>
         
          </div>
          </div>
          
  
   {/* {
      
        let cartString = localStorage.getItem("cart") || "";

    
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error("Product not found");
            return;
        }

  
        const regex = new RegExp(`${productId}:(\\d+)`);
        const match = cartString.match(regex);

        if (match) {
          
            const currentQuantity = parseInt(match[1]);
            cartString = cartString.replace(regex, `${productId}:${currentQuantity + 1}`);
        } else {
    
            cartString += `${productId}:1;`;
        }

    
        localStorage.setItem("cart", cartString);
        alert("Product added to cart");

    function goToCartPage() {
        window.location.href = "cart1.html";
    } */}

    </div>
  );
};

export default Blogs;
 