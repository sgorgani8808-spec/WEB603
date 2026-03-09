import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ title, totalItems }) => (
  <nav className="app-nav">
    <h1 className="app-title">{title}</h1>
    <div className="cart-text">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{totalItems} items</span>
    </div>
  </nav>
);

const ProductRow = ({ product }) => (
  <div className="product-row">
    <h2 className="product-name">{product.desc}</h2>
    <div className="product-detail">
      <img src={product.image} alt={product.desc} className="product-image" />
      <div className="qty-box">{product.value}</div>
      <span className="qty-text">quantity</span>
    </div>
  </div>
);

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductRow product={product} key={product.id} />
    ))}
  </div>
);

class App extends Component {
  state = {
    siteName: "Shop to React",
    products: [
      { id: 1, image: "/products/cologne.jpg", desc: "Unisex Cologne", value: 0 },
      { id: 2, image: "/products/iwatch.jpg", desc: "Apple iWatch", value: 0 },
      { id: 3, image: "/products/mug.jpg", desc: "Unique Mug", value: 0 },
      { id: 4, image: "/products/wallet.jpg", desc: "Mens Wallet", value: 0 }
    ]
  };

  render() {
    const { siteName, products } = this.state;
    const totalItems = products.map((item) => item.value).reduce((sum, qty) => sum + qty, 0);

    return (
      <div className="app-shell">
        <Container className="app-wrap">
          <NavBar title={siteName} totalItems={totalItems} />
          <ProductList products={products} />
        </Container>
      </div>
    );
  }
}

export default App;