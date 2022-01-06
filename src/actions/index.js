import coingecko from "../apis/coingecko";


// Action Creator
export const fetchTrending = () => {
  return async (dispatch) => {
    const res = await coingecko.get("/search/trending");
    const trending = await res.data;
    dispatch({ type: "TRENDED", payload: trending });
  };
};

export const fetchCoinList = () => {
  return async (dispatch) => {
    const res = await coingecko.get("/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1");
    const coinList = await res.data;
    dispatch({ type: "LISTFETCHED", payload: coinList });
  };
};

export const fetchGlobalMarketCap = () => {
  return async (dispatch) => {
    const res = await coingecko.get("/global");
    const globalCap = await res.data;
    dispatch({ type: "GLOBALFETCHED", payload: globalCap });
  };
}