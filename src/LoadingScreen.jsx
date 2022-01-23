import React from "react";
import ewsgit from "./assets/name.svg";
import styled from "styled-components";

const App = styled.div`
  @keyframes fade {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  > img:nth-child(1) {
    animation: fade 2s ease-in-out forwards;
  }
  @keyframes fallDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
  > div {
    animation: fallDown 2s 2s ease-in-out forwards;
  }
`;

export default class Component extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.href = "/mainmenu";
    }, 4000);
  }
  render() {
    return (
      <App className={`h-screen w-screen`}>
        <img
          src={ewsgit}
          alt="logo"
          className={`w-[30vw] opacity-0 aspect-[1160/512] transition-opacity absolute top-[50%] left-[50%] [transform:_translate(-50%,-50%);]`}
        />
        <h1
          className={`opacity-0 text-white text-8xl absolute top-[50%] left-[50%] [transform:_translate(-50%,-50%);]`}>
          Expanse
        </h1>
        <div
          className={`absolute w-screen h-screen top-0 left-0 bg-black z-[-1]`}></div>
      </App>
    );
  }
}
