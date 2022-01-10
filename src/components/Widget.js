import React from "react";

function Widget({ trending, exchangeList, gainList, heading }) {
  return (
    <article className=" bg-gray-100 px-10 py-5 flex flex-col rounded-2xl mb-16 drop-shadow-lg">
      <h1 className="mb-2">{heading}</h1>
      <ul>
        {trending &&
          trending.slice(0, 4).map((trend) => (
            <li className="mb-1" key={trend.item.id}>
              <img
                className=" w-5 inline-block mr-2"
                src={trend.item.small}
                alt=""
              />
              {trend.item.name} {`#${trend.item.market_cap_rank}`}
            </li>
          ))}
        {exchangeList &&
          exchangeList.slice(0, 4).map((exchange) => (
            <li className="mb-1" key={exchange.id}>
              <img
                className=" w-5 inline-block mr-2"
                src={exchange.image}
                alt=""
              />
              {exchange.name} {`#${exchange.trust_score_rank}`}
            </li>
          ))}
        {gainList &&
          gainList
            .sort(
              (a, b) =>
                b.price_change_percentage_24h - a.price_change_percentage_24h
            )
            .slice(0, 4)
            .map((gainer) => (
              <li className="mb-1" key={gainer.id}>
                <img
                  className=" w-5 inline-block mr-2"
                  src={gainer.image}
                  alt=""
                />
                {gainer.name}{" "}
                <span className="text-green-600">{`${gainer.price_change_percentage_24h.toFixed(
                  2
                )}%`}</span>
              </li>
            ))}
      </ul>
    </article>
  );
}

export default Widget;
