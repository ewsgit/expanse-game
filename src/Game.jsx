import React from "react";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null,
      tiles: {
        dirt: require("./assets/Expanse@2x.png"),
      },
      level: null,
    };
  }
  componentDidMount() {
    var level = require("./levels/1.json");
    this.setState({
      level: level,
    });
  }
  render() {
    return (
      <div className={`aspect-video overflow-hidden bg-red-300 absolute top-[50%] left-[50%] [transform:_translate(-50%,-50%)] w-screen max-h-screen`}>
        {this.state.level !== null
          ? this.state.level.map((tile, ind) => {
            console.log((window.innerHeight / 100) * tile.y * 5);
              return (
                <img
                  key={ind}
                  src={this.state.tiles.dirt}
                  className={`aspect-square w-tilescale`}
                  style={{
                    top: `${(window.innerHeight / 20) * tile.y}px`,
                    left: `${(window.innerWidth / 20) * tile.x}px`,
                    position: "absolute",
                  }}
                  alt="tile"
                />
              );
            })
          : null}
      </div>
    );
  }
}
