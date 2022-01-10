import React from "react";
import { Link } from "react-router-dom";

function Itemlist({ coinList }) {


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
          <tbody key={coin.id}>
            <tr>
              <th>{coin.market_cap_rank}</th>
              <td className="hover:bg-gray-100">
                <Link to={`/coins/${coin.id}`}>
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
                </Link>
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td
                className={`${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {coin.price_change_percentage_24h && coin.price_change_percentage_24h.toFixed(2)}
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
