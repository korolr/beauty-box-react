import React from "react";

const MenuLarge = () => (
  <div>
    <hr style={{ marginTop: "-0.2em" }} className="d-none d-lg-block" />
    <div className="container ">
      <div className="row">
        <ul className="list-inline mx-auto justify-content-center d-none d-lg-block">
          <li className="list-inline-item menu__large">
            <a href="/" className="link-unstyled">
              МАНИКЮР
            </a>
          </li>
          <li className="list-inline-item menu__large">
            <a href="/" className="link-unstyled">
              ПЕДИКЮР
            </a>
          </li>
          <li className="list-inline-item menu__large">
            <a href="/" className="link-unstyled">
              МАКИЯЖ
            </a>
          </li>
          <li className="list-inline-item menu__large">
            <a href="/" className="link-unstyled">
              КОРРЕКЦИЯ БРОВЕЙ
            </a>
          </li>
          <li className="list-inline-item menu__large">
            <a href="/" className="link-unstyled">
              НАРАЩИВАНИЕ РЕСНИЦ
            </a>
          </li>
          <li className="list-inline-item menu__large">
            <a href="/" className="link-unstyled">
              ПРИЧЕСКИ
            </a>
          </li>
          <li className="list-inline-item menu__large">
            <a href="/" className="link-unstyled">
              ЭПИЛЯЦИЯ
            </a>
          </li>
          <li className="list-inline-item menu__large">
            <a href="/" className="link-unstyled">
              КОСМЕТОЛОГИЯ
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default MenuLarge;
