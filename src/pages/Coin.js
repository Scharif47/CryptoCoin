import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchChartData, fetchCoinData } from "../actions";
import CoinHero from "../components/CoinHero";
import CoinList from "../components/CoinList";
import LineChart from "../components/LineChart";

function Coin() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // get the coinId from url e.g bitcoin
  const { coinId } = useParams();

  useEffect(() => {
    dispatch(fetchCoinData(coinId));
    dispatch(fetchChartData(coinId, "usd", 7));
  }, [dispatch, coinId]);

  const { coinData, chartData } = state.coingecko;

  console.log(state.coingecko);

  return (
    <section>
      <CoinHero coinData={coinData} />
      <CoinList coinData={coinData} />
      <div className=" mt-20">
        <LineChart chartData={chartData} />
      </div>
    </section>
  );
}

export default Coin;
