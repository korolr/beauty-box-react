import React from "react";

const Content = () => (
    <div className="container">
        <div className="row">
          <div className="col-xl-8 col-12 landing-col landing">
            <h1>Найди своего мастера</h1>
            <h2>Мастера красоты ждут тебя в городах России и СНГ</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Балаково"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Найти
                </button>
              </div>
            </div>
            <div className="popular">
              <b>ПОПУЛЯРНЫЕ ЗАПРОСЫ:</b> &nbsp; ГЕЛЬ ЛАК &nbsp; &nbsp; ВЕЧЕРНИЙ
              МАКИЯЖ &nbsp; &nbsp; ДИЗАЙН НОГТЕЙ
            </div>
          </div>
          <div className="col-xl-4 col-12 landing-two">
            <h1>Вы мастер или студия красоты ?</h1>
            <h2>
              Зарегистрируйте аккаунт прямо сейчас и начните принимать заявки
            </h2>
            <button className="btn">СОЗДАТЬ АККАУНТ</button>
          </div>
        </div>
      </div>
);

export default Content;
