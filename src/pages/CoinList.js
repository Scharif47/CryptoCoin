import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinList } from "../actions";
import Itemlist from "../components/Itemlist";

function CoinList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { pageId } = useParams();

  const { coinList } = state.coingecko;

  useEffect(() => {
    dispatch(fetchCoinList(pageId));
  }, [dispatch, pageId]);

  return (
    <section>
      <Itemlist coinList={coinList} />
    </section>
  );
}

export default CoinList;
