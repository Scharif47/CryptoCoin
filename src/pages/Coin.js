import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinData } from "../actions";

function Coin() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // get the coinId from url e.g bitcoin
  const { coinId } = useParams();

  useEffect(() => {
    dispatch(fetchCoinData(coinId));
  }, [dispatch, coinId]);

  const { coinData } = state.coingecko;

  return (
    <section>
      <section className="w-10/12 md:w-9/12 lg:w-7/12 mx-auto pt-5 pb-24 flex flex-col items-center rounded-t-lg bg-gradient-to-b from-violet-200 to-gray-200 drop-shadow-md">
        <div className="flex items-center px-2 space-x-2 sm:space-x-4">
          <img
            className="h-10 w-10 inline-block"
            src={coinData.image.small}
            alt="coin logo"
          />
          <h1 className="text-lg">
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </h1>
          <span
            className={`text-xl sm:text-xl md:text:2xl ${
              coinData.market_data.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {coinData.market_data.price_change_percentage_24h.toFixed(2)} %
          </span>
        </div>
        <div className="badge my-2">
          Rank #{coinData.market_data.market_cap_rank}
        </div>
        <span className="text-4xl">
          $
          {parseFloat(
            coinData.market_data.current_price.usd.toFixed(2)
          ).toLocaleString()}
        </span>
      </section>

      <section className="px-2">
        <section className="flex justify-between border-t-[1px] border-gray-500 mt-10">
          <span className="text-red-600">
            $
            {parseFloat(
              coinData.market_data.low_24h.usd.toFixed(2)
            ).toLocaleString()}
          </span>
          <span>24h PRICE RANGE</span>
          <span className="text-green-500">
            $
            {parseFloat(
              coinData.market_data.high_24h.usd.toFixed(2)
            ).toLocaleString()}
          </span>
        </section>

        <section className="coin__details mt-5">
          <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
            <span>Market Cap</span>
            <span>
              $
              {parseFloat(
                coinData.market_data.market_cap.usd.toFixed(2)
              ).toLocaleString()}
            </span>
          </div>

          {coinData.market_data.total_supply && (
            <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
              <span>Total Supply</span>
              {
                <span>
                  {parseFloat(
                    coinData.market_data.total_supply.toFixed(2)
                  ).toLocaleString()}
                </span>
              }
            </div>
          )}

          {coinData.market_data.max_supply && (
            <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
              <span>Max Supply</span>
              <span>
                {parseFloat(
                  coinData.market_data.max_supply.toFixed(2)
                ).toLocaleString()}
              </span>
            </div>
          )}

          <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
            <span>Circulating Supply</span>
            <span>
              {parseFloat(
                coinData.market_data.circulating_supply.toFixed(2)
              ).toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b-[1px] border-gray-300">
            <span>All Time High</span>
            <span>
              $
              {parseFloat(
                coinData.market_data.ath.usd.toFixed(2)
              ).toLocaleString()}
            </span>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Coin;
