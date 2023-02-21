import React, { Component } from "react";
import "./App.css";
import alface from "./img/alface.png";
import laranja from "./img/laranja.png";
import cereja from "./img/cereja.png";
import cenoura from "./img/cenoura.png";
import manga from "./img/manga.png";
import limao from "./img/limao.png";
import beterraba from "./img/beterraba.png";
import tomate from "./img/tomate.png";
import ShoppingCart from "./img/ShoppingCart.png";
import minusCircle from "./img/MinusCircle.png";
import plusCircle from "./img/PlusCircle.png";

class App extends Component {
  state = {
    frutas: [
      { imagem: `${alface}`, nome: "Alface" },
      { imagem: `${laranja}`, nome: "Laranja" },
      { imagem: `${cereja}`, nome: "Cereja" },
      { imagem: `${cenoura}`, nome: "Cenoura" },
      { imagem: `${manga}`, nome: "Manga" },
      { imagem: `${limao}`, nome: "Limão" },
      { imagem: `${beterraba}`, nome: "Beterraba" },
      { imagem: `${tomate}`, nome: "Tomate" },
    ],
  };

  render() {
    return (
      <div className="principal">
        <header>
          <h1>HORTIFRUTI</h1>
          <h2>VnW</h2>
        </header>

        <main>
          <section className="frutas-container">
            <h2>Nossos produtos</h2>
            <div className="state-frutas">
              {this.state.frutas.map((item) => (
                <div className="frutas-geral">
                  <div>
                    <img
                      className="frutasImg"
                      src={item.imagem}
                      alt={item.nome}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="carrinho-container">
            <div className="back-carrinho">
              <div className="carrinho">
                <img
                  className="cart-icon"
                  src={ShoppingCart}
                  alt="Shopping cart"
                />
                <p>Arraste o seu produto aqui para colocar no carrinho</p>
              </div>
              <div className="menu-carrinho">
                <img
                  className="plus-circle"
                  src={plusCircle}
                  alt="Plus circle"
                />
                <img
                  className="minus-circle"
                  src={minusCircle}
                  alt="Minus circle"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
