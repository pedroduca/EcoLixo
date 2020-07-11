import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import "./style.css";

import { getToken } from "../../services/token";

function Home() {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();

    getToken() ? history.push("/user/create-point") : history.push("/signin");
  }

  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="HelpCovid" className="logo-img" />
        </header>

        <main>
          <h1>
            Ajude as pessoas <br /> na crise do coronavírus.
          </h1>
          <p>
            Desejamos reconectar comunidades através da solidariedade. O
            Covid-19 causou grandes mudanças na maneira como vivemos e como
            trabalhamos. Acreditamos que, ao nos conectarmos, podemos ajudar a
            sociedade a apoiar as pessoas que precisam de ajuda.
          </p>

          <Link to="/signin" onClick={handleClick}>
            <span>
              <FiLogIn />
            </span>

            <strong>Cadastrar um ponto de doação</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;
