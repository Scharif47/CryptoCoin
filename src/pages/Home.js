import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import YoutubeEmbed from "../components/YoutubeEmbed";
import styled from "styled-components";

import {
  fetchTrending,
  fetchGainList,
  fetchGlobalMarketCap,
  fetchExchangeList,
  fetchCoinList,
} from "../actions";
import Widget from "../components/Widget";
import SectionBar from "../components/SectionBar";
import Itemlist from "../components/Itemlist";
import Pagination from "../components/Pagination";
import cryptoWidget from "../images/crypto-widget.jpg";
import cryptoNewsWidget from "../images/cryptoNews.jpeg";
import nftWidget from "../images/nft.jpeg";
import metaverseWidget from "../images/metaverse.jpeg";

// Styled Components
const InfoWidget = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  overflow: hidden;
  width: 18rem;
  height: 7rem;
  border-radius: 1rem;
  padding-right: 0.5rem;
  margin-bottom: 2rem;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

  @media (min-width: 640px) {
    flex-direction: column;
    padding-right: 0;
    width: 21rem;
    height: 13rem;
    padding-bottom: 3px;
  }
`;

const InfoTab = styled.div`
  display: flex;
  padding: 0 1rem 1rem 1rem;
  border-bottom: 1px solid gray;

  @media (min-width: 440px) {
    justify-content: center;
    padding: 0 0 1rem 0;
  }
`;

function Home() {
  // Set up dispatch & state to send & receive
  // data to/from redux store
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  let { pageId } = useParams();

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchGlobalMarketCap());
    dispatch(fetchGainList());
    dispatch(fetchExchangeList());
    dispatch(fetchCoinList(pageId));
  }, [dispatch, pageId]);

  /* console.log(state.coingecko); */

  /* Initialize Coingecko variables */
  const globalCoins = state.coingecko.globalCap.data;
  const { gainList, coinList, trending, exchangeList } = state.coingecko;

  const activeCoins = globalCoins.active_cryptocurrencies;
  const mcPercentage = globalCoins.market_cap_percentage;
  const mcPercentageChangeUSD =
    globalCoins.market_cap_change_percentage_24h_usd;

  const mcCurrentPercentage = parseFloat(mcPercentageChangeUSD.toFixed(2));
  const mcIcon = parseFloat(mcPercentageChangeUSD.toFixed(2)) > 0 ? "⤴" : "⤵";
  const mcColor =
    parseFloat(mcPercentageChangeUSD.toFixed(2)) > 0
      ? "text-green-500"
      : "text-red-500";
  const dominantCoin = Object.keys(mcPercentage)
    .reduce((a, b) => (mcPercentage[a] > mcPercentage[b] ? a : b))
    .toUpperCase();

  return (
    <div>
      <InfoTab className="mb-5 space-x-5 md:space-x-12 whitespace-nowrap overflow-x-scroll">
        <p className="">
          {/* Render all active crypto coins */}
          Cryptocurrencies: {activeCoins}
        </p>
        <p>
          {/* Render the dominant coin with percentage */}
          Dominance: {dominantCoin}{" "}
          {Math.max(...Object.values(mcPercentage)).toFixed(2)}%
        </p>
        {/* Render 24h changed market cap with dynamic color */}
        <p className={`${mcColor}`}>
          24h MC: {mcCurrentPercentage}% {mcIcon}
        </p>
      </InfoTab>
      <section className="m-auto w-60 sm:w-80 md:w-[30rem] mb-10">
        <h1 className="mb-2">Welcome to CryptoCoin</h1>
        <h2>Check crypto prices, news and learn about cryptocurrency.</h2>
      </section>

      <section className="flex space-x-12 sm:space-x-16 mb-20 px-6 whitespace-nowrap overflow-x-scroll">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.forbes.com/advisor/investing/what-is-cryptocurrency/"
        >
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={cryptoWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Learn Crypto</p>
              <p>what is Cryptocurrency?</p>
            </div>
          </InfoWidget>
        </a>

        <a href="/">
          <InfoWidget>
            <YoutubeEmbed embedId="nHhAEkG1y2U" />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Web 3 Guide</p>
              <p>what is Web 3.0?</p>
            </div>
          </InfoWidget>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cryptonews.com/"
        >
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={cryptoNewsWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Crypto News</p>
              <p>Get the latest News</p>
            </div>
          </InfoWidget>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.investopedia.com/non-fungible-tokens-nft-5115211"
        >
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={nftWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Learn NFT</p>
              <p>what are NFT's?</p>
            </div>
          </InfoWidget>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wired.com/story/what-is-the-metaverse/"
        >
          <InfoWidget>
            <img
              className="w-32 sm:w-full sm:h-36 h-full rounded-lg sm:rounded-xl"
              alt="crypto coins"
              src={metaverseWidget}
            />
            <div className=" sm:ml-0 sm:w-48 sm:text-center">
              <p>Metaverse Guide</p>
              <p>what is Metaverse?</p>
            </div>
          </InfoWidget>
        </a>
      </section>

      <section className="widgets">
        <h1 className="text-center mb-6">Check out the latest trends.</h1>
        <div className="flex md:justify-center px-5 space-x-5 whitespace-nowrap overflow-x-scroll">
          <Widget heading={"Trending 🚀"} trending={trending.coins} />
          <Widget heading={"Exchanges ⚖️"} exchangeList={exchangeList} />
          <Widget heading={"Gainers 📈"} gainList={gainList} />
        </div>
      </section>

      <main>
        <SectionBar />

        <Itemlist coinList={coinList} />

        <Pagination pageId={pageId} />
      </main>
    </div>
  );
}

export default Home;
