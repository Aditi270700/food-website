import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
const Home = () => {
  let Navigate = useNavigate();
  function goToSignup() {
    Navigate("/signup");
  }
  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="head">
          <h2>Order your favourite food here</h2>
          <p>
            choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. our
            mission is to satisty your craving and elevate
          </p>
          <button onClick={goToSignup}>Book Menu</button>
        </div>
      </div>
      {/* menu */}
      <div className="menu">
        <h1>Explore our menu</h1>
        <p>
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. our
          mission is to satisty your craving and elevate
        </p>
      </div>
      <div className="menulist">
        <div className="menuimg">
          <img src="photo1.jpg" width="100px" height="100px" />
        </div>
        <div className="menuimg">
          <img src="photo2.jpg" width="100px" height="100px" />
        </div>
        <div className="menuimg">
          <img src="photo9.png" width="100px" height="100px" />
        </div>
        <div className="menuimg">
          <img src="photo3.webp" width="100px" height="100px" />
        </div>
        <div className="menuimg">
          <img src="photo5.jpg" width="100px" height="100px" />
        </div>
        <div className="menuimg">
          <img src="photo6.png" width="100px" height="100px" />
        </div>
        <div className="menuimg">
          <img src="photo7.png" width="100px" height="100px" />
        </div>
        <div className="menuimg">
          <img src="photo8.png" width="100px" height="100px" />
        </div>
      </div>

      {/* card */}
      <div className="our">
        <h1>Our Food</h1>
      </div>
      <div className="cardsec">
        <div className="card">
          <img src="cake.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Cake</h2>
            <h3>$20</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <img src="icecream.png" width="300px" height="350px" />
          <div className="cake">
            <h2>Icecream</h2>
            <h3>$20</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <img src="pizza.avif" width="300px" height="350px" />
          <div className="cake" onClick={goToSignup}>
            <h2>Pizza</h2>
            <h3>$50</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <img src="biryani.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Biryani</h2>
            <h3>$20</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>
      </div>

      <div className="cardsec">
        <div className="card">
          <img src="spring.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Spring Roll</h2>
            <h3>$20</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <img src="sandwich.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Sandwich</h2>
            <h3>$20</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <img src="rabdi.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Rabdi</h2>
            <h3>$15</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <div className="cake">
            <img src="french.jpg" width="300px" height="350px" />
            <h2>French Fries</h2>
            <h3>$15</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>
      </div>

      <div className="cardsec">
        <div className="card">
          <img src="momos.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Pasta</h2>
            <h3>$30</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <img src="pasta.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Pasta</h2>
            <h3>$20</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <img src="manchurian.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Manchurian</h2>
            <h3>$30</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>

        <div className="card">
          <img src="noodles.jpg" width="300px" height="350px" />
          <div className="cake">
            <h2>Noodles</h2>
            <h3>$30</h3>
            <button className="cak" onClick={goToSignup}>book</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
