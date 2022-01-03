import React from "react";
import styled from "styled-components";

import Widget from "../components/Widget";
import Infobar from "../components/Infobar";
import Itemlist from "../components/Itemlist";
import Pagination from "../components/Pagination";
import cryptoWidget from "../images/crypto-widget.jpg";

const InfoWidget = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  width: 16rem;
  border-radius: 1rem;
  padding-right: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: column;
    padding-right: 0;
    width: 21rem;
    height: 13rem;
  }
`;

function Home() {
  return (
    <div>
      <section className="m-auto w-60 sm:w-80 md:w-[30rem] mb-10">
        <h1 className="mb-2">Welcome to CryptoCoin</h1>
        <h2>Check crypto prices, news and learn about cryptocurrency.</h2>
      </section>

      <section className="flex space-x-12 sm:space-x-16 mb-20 px-6   whitespace-nowrap overflow-x-scroll">
        <a href="/">
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={cryptoWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Learn BTC</p>
              <p>what is BTC?</p>
            </div>
          </InfoWidget>
        </a>

        <a href="/">
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={cryptoWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Learn BTC</p>
              <p>what is BTC?</p>
            </div>
          </InfoWidget>
        </a>

        <a href="/">
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={cryptoWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Learn BTC</p>
              <p>what is BTC?</p>
            </div>
          </InfoWidget>
        </a>

        <a href="/">
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={cryptoWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Learn BTC</p>
              <p>what is BTC?</p>
            </div>
          </InfoWidget>
        </a>

        <a href="/">
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={cryptoWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Learn BTC</p>
              <p>what is BTC?</p>
            </div>
          </InfoWidget>
        </a>
      </section>

      <section>
        <h1 className="text-center mb-10">Check out the latest trends.</h1>
        <div className="flex justify-around">
          <Widget />
          <Widget />
          <Widget />
        </div>
      </section>

      <main>
        <Infobar />
        <Itemlist />
        <Pagination />
      </main>
    </div>
  );
}

export default Home;
