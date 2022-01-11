import React from "react";

function CoinHero({ coinData }) {
  return (
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
  );
}

export default CoinHero;
