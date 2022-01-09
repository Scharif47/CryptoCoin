import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinList } from "../actions";

function Coin() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // get the coinId from url e.g bitcoin
  const { coinId } = useParams();
  const [coinO, setCoinO] = useState({
    id: "loading",
    symbol: "loading",
    name: "",
    image: "loading",
    current_price: 0,
    market_cap: 0,
    market_cap_rank: 0,
    fully_diluted_valuation: 0,
    total_volume: 0,
    high_24h: 0,
    low_24h: 0,
    price_change_24h: 0,
    price_change_percentage_24h: 0,
    market_cap_change_24h: 0,
    market_cap_change_percentage_24h: 0,
    circulating_supply: 0,
    total_supply: 0,
    max_supply: 0,
    ath: 0,
    ath_change_percentage: 0,
    ath_date: "loading",
    atl: 0,
    atl_change_percentage: 0,
    atl_date: "loading",
    roi: null,
    last_updated: "loading",
  });

  let coinObj = {
    id: "loading",
    symbol: "loading",
    name: "loading",
    image: "loading",
    current_price: 0,
    market_cap: 0,
    market_cap_rank: 0,
    fully_diluted_valuation: 0,
    total_volume: 0,
    high_24h: 0,
    low_24h: 0,
    price_change_24h: 0,
    price_change_percentage_24h: 0,
    market_cap_change_24h: 0,
    market_cap_change_percentage_24h: 0,
    circulating_supply: 0,
    total_supply: 0,
    max_supply: 0,
    ath: 0,
    ath_change_percentage: 0,
    ath_date: "loading",
    atl: 0,
    atl_change_percentage: 0,
    atl_date: "loading",
    roi: null,
    last_updated: "loading",
  };

  useEffect(() => {
    dispatch(fetchCoinList());
  }, [dispatch]);

  console.log(state.coingecko);

  coinObj = state.coingecko.coinList.find((coin) => coin.id === coinId);

  /* setCoinO(state.coingecko.coinList.find((coin) => coin.id === coinId)) */

  console.log("coinObj:", coinObj);

  return (
    <section>
      <section className="w-10/12 md:w-9/12 lg:w-7/12 mx-auto pt-5 pb-24 flex flex-col items-center rounded-t-lg bg-gradient-to-b from-violet-200 to-gray-200">
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 inline-block"
            src={coinObj && coinObj.image}
            alt="coin logo"
          />
          <h1 className="text-2xl">
            {coinObj && coinObj.name} ({coinObj && coinObj.symbol.toUpperCase()}
            )
          </h1>
          <span
            className={`text-xl ${
              coinObj && coinObj.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {coinObj && coinObj.price_change_percentage_24h.toFixed(2)} %
          </span>
        </div>
        <div className="badge mt-1">
          Rank #{coinObj && coinObj.market_cap_rank}
        </div>
        <span className="text-4xl mt-2">
          $
          {coinObj &&
            parseFloat(coinObj.current_price.toFixed(2)).toLocaleString()}
        </span>
      </section>

      <section className="px-2">
        <section className="flex justify-between border-t-[1px] border-gray-500 mt-10">
          <span className="text-red-600">
            $
            {coinObj && parseFloat(coinObj.low_24h.toFixed(2)).toLocaleString()}
          </span>
          <span>24h PRICE RANGE</span>
          <span className="text-green-500">
            $
            {coinObj &&
              parseFloat(coinObj.high_24h.toFixed(2)).toLocaleString()}
          </span>
        </section>

        <section className="coin__details mt-5">
          <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
            <span>Market Cap</span>
            <span>
              $
              {coinObj &&
                parseFloat(coinObj.market_cap.toFixed(2)).toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
            <span>Total Supply</span>
            <span>
              {coinObj &&
                parseFloat(coinObj.total_supply.toFixed(2)).toLocaleString()}
            </span>
          </div>

          {coinObj && coinObj.max_supply && (
            <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
              <span>Max Supply</span>
              <span>
                {parseFloat(coinObj.max_supply.toFixed(2)).toLocaleString()}
              </span>
            </div>
          )}

          <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
            <span>Circulating Supply</span>
            <span>
              {coinObj &&
                parseFloat(
                  coinObj.circulating_supply.toFixed(2)
                ).toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
            <span>All Time High</span>
            <span>
              ${coinObj && parseFloat(coinObj.ath.toFixed(2)).toLocaleString()}
            </span>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Coin;
