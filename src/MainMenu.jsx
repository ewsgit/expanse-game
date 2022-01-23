import React from "react";
import styled from "styled-components";

const App = styled.div`
  @keyframes dropDown {
    0% {
      transform: translateY(-100vh);
    }
    80% {
      transform: translateY(0);
    }
    90% {
      transform: translateY(-3vh);
    }
    100% {
      transform: translateY(0);
    }
  }
  > * {
    animation: dropDown 1s linear;
  }
`;

export default class Component extends React.Component {
  render() {
    return (
      <App
        className={`flex flex-col w-screen h-screen items-center justify-center`}>
        <h1 className={`text-white text-8xl m-0`}>Expanse</h1>
        <button
          className={`mt-5 p-5 pl-10 pr-10 rounded-2xl active:bg-blue-500 bg-blue-400 transition-colors`}
          onClick={e => {
            window.location.href = "/game";
          }}>
          Play
        </button>
      </App>
    );
  }
}
