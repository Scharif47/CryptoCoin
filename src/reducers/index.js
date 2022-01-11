import { combineReducers } from "redux";
import {
  globalCap,
  exchangeList,
  trending,
  gainList,
  coinList,
  chartData
} from "../utils/stateData";
import { btc } from "../utils/btc";

// Initialstate for coingecko Reducer
const initialState = {
  globalCap: globalCap,
  exchangeList: exchangeList,
  trending: trending,
  gainList: gainList,
  coinList: coinList,
  coinData: btc,
  chartData: chartData,
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
    case "COINDATAFETCHED":
      return { ...state, coinData: action.payload };
    case "CHARTDATAFETCHED":
      return { ...state, chartData: action.payload };
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
