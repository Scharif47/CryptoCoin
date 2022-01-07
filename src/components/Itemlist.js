import React from "react";

function Itemlist({ coinList }) {
  console.log(coinList);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th className="lowercase">24h %</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>

        {coinList.map((coin, i) => (
          <tbody>
            <tr>
              <th>{i + 1}</th>
              <td>
                {" "}
                <img
                  className=" w-5 inline-block mr-2"
                  src={coin.image}
                  alt=""
                />
                {coin.name}{" "}
                <span className="text-gray-400">
                  {coin.symbol.toUpperCase()}
                </span>
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td
                className={`${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Itemlist;