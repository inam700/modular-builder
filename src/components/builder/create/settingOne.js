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
      { id: 1, name: "Name1", imgURL: card_1 },
      { id: 2, name: "Name2", imgURL: card_2 },
      { id: 3, name: "Name3", imgURL: card_3 },
      { id: 4, name: "Name4", imgURL: card_4 },
      { id: 5, name: "Name5", imgURL: card_2 },
      { id: 6, name: "Name6", imgURL: card_1 },
    ],
    checked: false,
  };
  render() {
    const { checked } = this.state;
    return (
      <SimpleBarReact style={{ maxHeight: 330 }}>
        <div className="cards">
          {this.state.cards.map((item) => (
            <div
              className="image-card"
              key={item.id}
              onClick={() => {
                localStorage.setItem("Name", item.name);
                this.setState({ checked: !checked });
              }}
            >
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
