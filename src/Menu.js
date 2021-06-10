import React from "react";

function Menu({ menuItems }) {
  return (
    <div className="menu__container">
      {menuItems.map((item) => {
        const { title, price, img, desc, id } = item;
        return (
          <div key={id} className="single__menu">
            <img src={img} alt={title} className="photo" />
            <div className="item__info">
              <header>
                <h1>{title}</h1>
                <h1 className="price">${price}</h1>
              </header>
              <div className="dotted__underline"></div>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
