import { combineReducers } from "redux";

// Initialstate for coingecko Reducer
const initialState = {
  globalCap: {data: {
    active_cryptocurrencies: 0,
    market_cap_percentage: {loading: 2, test: 1},
    total_market_cap: {loading: 2, test: 1},
    market_cap_change_percentage_24h_usd: 1.2
  }},
  trending: {},
  coinList: {},
};

/* data: {
  active_cryptocurrencies: 0,
  market_cap_percentage: {loading: 0, test: 1},
  total_market_cap: {loading: 0, test: 1},
  market_cap_change_percentage_24h_usd: 0
} */

// Create Reducer

const coingeckoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GLOBALFETCHED":
      return { ...state, globalCap: action.payload };
    case "TRENDED":
      return { ...state, trending: action.payload };
    case "LISTFETCHED":
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
