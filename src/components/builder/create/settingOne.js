import React, { Component } from "react";
import card_1 from "../../../assets/img/card-image-1.png";
import card_2 from "../../../assets/img/card-image-2.png";
import card_3 from "../../../assets/img/card-image-3.png";
import card_4 from "../../../assets/img/card-image-4.png";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

class SettingOne extends Component {
  state = {
    cards: [
      { id: 1, name: "Name", imgURL: card_1 },
      { id: 2, name: "Name", imgURL: card_2 },
      { id: 3, name: "Name", imgURL: card_3 },
      { id: 4, name: "Name", imgURL: card_4 },
      { id: 5, name: "Name", imgURL: card_2 },
      { id: 6, name: "Name", imgURL: card_1 },
    ],
  };
  render() {
    return (
      <SimpleBarReact style={{ maxHeight: 330 }}>
        <div className="cards">
          {this.state.cards.map((item) => (
            <div className="image-card" key={item.id}>
              <img src={item.imgURL} alt="single-card" />
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
      </SimpleBarReact>
    );
  }
}
export default SettingOne;
