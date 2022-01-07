import coingecko from "../apis/coingecko";

// Action Creator
// Fetch list of trending coins
export const fetchTrending = () => {
  return async (dispatch) => {
    const res = await coingecko.get("/search/trending");
    const trending = await res.data;
    dispatch({ type: "TRENDED", payload: trending });
  };
};

// Fetch list of 100 coins with pagination for Gainer
export const fetchGainList = () => {
  return async (dispatch) => {
    const res = await coingecko.get(
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );
    const gainList = await res.data;
    dispatch({ type: "GAINERSFETCHED", payload: gainList });
  };
};

// Fetch list of 100 coins with pagination for Gainer
export const fetchCoinList = () => {
  return async (dispatch) => {
    const res = await coingecko.get(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${1}`
    );
    const coinList = await res.data;
    dispatch({ type: "COINSFETCHED", payload: coinList });
  };
};

// Fetch global cryptocurrency data
export const fetchGlobalMarketCap = () => {
  return async (dispatch) => {
    const res = await coingecko.get("/global");
    const globalCap = await res.data;
    dispatch({ type: "GLOBALFETCHED", payload: globalCap });
  };
};

// Fetch list of 20 cryto exchanges
export const fetchExchangeList = () => {
  return async (dispatch) => {
    const res = await coingecko.get("/exchanges?per_page=20&page=1");
    const exchangeList = await res.data;
    dispatch({ type: "EXCHANGESFETCHED", payload: exchangeList });
  };
};
