import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const [isFront, setIsFront] = useState("true")

  const { hp, name, sprites} = pokemon;
  const {back, front} = sprites;


  function handleClick(e) {
    setIsFront(!isFront)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt ={name} src={isFront ? front : back} onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
