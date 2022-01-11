import React from "react";

function CoinList({ coinData }) {
  return (
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
  );
}

export default CoinList;
