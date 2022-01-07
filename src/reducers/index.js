import { combineReducers } from "redux";

// Initialstate for coingecko Reducer
const initialState = {
  globalCap: {
    data: {
      active_cryptocurrencies: 0,
      market_cap_percentage: { loading: 2, test: 1 },
      total_market_cap: { loading: 2, test: 1 },
      market_cap_change_percentage_24h_usd: 1.2,
    },
  },
  exchangeList: [
    {
      id: "loading",
      name: "loading",
      year_established: 0,
      country: "loading",
      description: "",
      url: "https://www.binance.com/",
      image: "loading",
      has_trading_incentive: false,
      trust_score: 0,
      trust_score_rank: 0,
      trade_volume_24h_btc: 0,
      trade_volume_24h_btc_normalized: 0,
    },
  ],
  trending: {
    coins: [
      {
        item: {
          id: "loading",
          coin_id: 0,
          name: "loading",
          symbol: "loading",
          market_cap_rank: 0,
          thumb: "loading",
          small: "loading",
          large: "loading",
          slug: "loading",
          price_btc: 0,
          score: 0,
        },
      },
    ],
  },
  gainList: [
    {
      id: "loading",
      symbol: "loading",
      name: "loading",
      image: "loading",
      current_price: 0,
      market_cap: 0,
      market_cap_rank: 0,
      fully_diluted_valuation: 0,
      total_volume: 0,
      high_24h: 0,
      low_24h: 0,
      price_change_24h: 0,
      price_change_percentage_24h: 0,
      market_cap_change_24h: 0,
      market_cap_change_percentage_24h: 0,
      circulating_supply: 0,
      total_supply: 0,
      max_supply: 0,
      ath: 0,
      ath_change_percentage: 0,
      ath_date: "loading",
      atl: 0,
      atl_change_percentage: 0,
      atl_date: "loading",
      roi: null,
      last_updated: "loading",
    },
  ],
  coinList: [
    {
      id: "loading",
      symbol: "loading",
      name: "loading",
      image: "loading",
      current_price: 0,
      market_cap: 0,
      market_cap_rank: 0,
      fully_diluted_valuation: 0,
      total_volume: 0,
      high_24h: 0,
      low_24h: 0,
      price_change_24h: 0,
      price_change_percentage_24h: 0,
      market_cap_change_24h: 0,
      market_cap_change_percentage_24h: 0,
      circulating_supply: 0,
      total_supply: 0,
      max_supply: 0,
      ath: 0,
      ath_change_percentage: 0,
      ath_date: "loading",
      atl: 0,
      atl_change_percentage: 0,
      atl_date: "loading",
      roi: null,
      last_updated: "loading",
    },
  ],
};

// Create Reducer
const coingeckoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GLOBALFETCHED":
      return { ...state, globalCap: action.payload };
    case "EXCHANGESFETCHED":
      return { ...state, exchangeList: action.payload };
    case "TRENDED":
      return { ...state, trending: action.payload };
    case "GAINERSFETCHED":
      return { ...state, gainList: action.payload };
    case "COINSFETCHED":
      return { ...state, coinList: action.payload };
    default:
      return state;
  }
};

const listReducer = () => {
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Crimson</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default combineReducers({
  coingecko: coingeckoReducer,
  list: listReducer,
});
