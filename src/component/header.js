import React, { Component } from "react";

import { scaleDown as Menu } from "react-burger-menu";
import MenuLarge from "./menuLarge";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      value: "",
      menuOpen: false
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      isLogin: !this.state.isLogin
    });
    event.preventDefault();
  }

  handleMenuStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleMenuStateChange(state)}
        >
          {this.state.value ? (
            <div>
              <img
                src="https://pbs.twimg.com/profile_images/775062377918296065/th22vQVF_400x400.jpg"
                className="rounded-circle img-ava2"
                alt="Cinque Terre"
              />
              <a>&nbsp;&nbsp; {this.state.value}</a>
              <br />
              <br />
            </div>
          ) : (
            <div />
          )}
          <a onClick={() => this.closeMenu()}>Главная</a>
          <a onClick={() => this.closeMenu()}>Личный кабинет</a>
          <a onClick={() => this.closeMenu()}>Заявки</a>
          <a onClick={() => this.closeMenu()}>Избранное</a>
          <br />
          <b>
            <p>УСЛУГИ</p>
          </b>
          <li onClick={() => this.closeMenu()}>Маникюр</li>
          <li onClick={() => this.closeMenu()}>Педикюр</li>
          <li onClick={() => this.closeMenu()}>Макияж</li>
          <li onClick={() => this.closeMenu()}>Коррекция бровей</li>
          <li onClick={() => this.closeMenu()}>Наращивание ресниц</li>
          <li onClick={() => this.closeMenu()}>Прически</li>
          <li onClick={() => this.closeMenu()}>Эпиляция</li>
          <li onClick={() => this.closeMenu()}>Косметология</li>
          <br />
          {this.state.value ? (
            <p>Выйти</p>
          ) : (
            <p
              onClick={() => this.closeMenu()}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Войти
            </p>
          )}
        </Menu>
        {/* Navigation */}
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="font-weight-bold box__logo">
                <a onClick={() => this.toggleMenu()}>
                  <img
                    src="https://image.flaticon.com/icons/svg/128/128453.svg"
                    className="burger"
                    alt="Alt text"
                  />
                </a>
                beauty <span className="colorbox">box</span>{" "}
              </div>
            </div>
            {this.state.isLogin ? (
              <div className="col-3 box__login d-none d-lg-block">
                {this.state.value}

                <img
                  src="https://pbs.twimg.com/profile_images/775062377918296065/th22vQVF_400x400.jpg"
                  className="rounded-circle img-ava"
                  alt="Cinque Terre"
                />
              </div>
            ) : (
              <div className="col-3 box__login d-none d-lg-block">
                <a
                  href="/"
                  className="link-unstyled"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Войти или зарегистрироваться
                </a>
              </div>
            )}
          </div>
        </div>

        <MenuLarge />
        
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Форма для входа
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>
                    <div className="input-group1">
                      <input
                        id="login-username"
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="username or email"
                        value={this.state.value}
                        onChange={this.handleValueChange}
                      />
                    </div>
                    <br />
                    <div className="input-group1">
                      <input
                        id="login-password"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="password"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary but-login"
                    data-dismiss="modal"
                    onClick={this.handleSubmit}
                  >
                    Войти
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
