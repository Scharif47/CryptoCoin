// InitialState for Coingecko Reducer
export const globalCap = {
  data: {
    active_cryptocurrencies: 0,
    market_cap_percentage: { loading: 2, test: 1 },
    total_market_cap: { loading: 2, test: 1 },
    market_cap_change_percentage_24h_usd: 1.2,
  },
};

export const exchangeList = [
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
];

export const trending = {
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
};

export const gainList = [
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
];

export const coinList = [
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
];

export const chartData = {
  prices: [
    [1641340800000, 45938.02427172366],
    [1641427200000, 43647.147508068054],
    [1641513600000, 43216.45867693359],
    [1641600000000, 41527.197042644846],
    [1641686400000, 41756.66232397826],
    [1641772800000, 41862.3609856517],
    [1641859200000, 41869.85905559219],
    [1641931968000, 43022.946379697714],
  ],
  market_caps: [
    [1641340800000, 876242689666.1957],
    [1641427200000, 827723202715.1049],
    [1641513600000, 819522879407.0583],
    [1641600000000, 787735561341.1113],
    [1641686400000, 792892599975.9554],
    [1641772800000, 791648558214.5575],
    [1641859200000, 792407724467.5966],
    [1641931968000, 816881192360.4684],
  ],
  total_volumes: [
    [1641340800000, 24895990583.663242],
    [1641427200000, 31837641246.01787],
    [1641513600000, 26366602396.811768],
    [1641600000000, 79685254648.07628],
    [1641686400000, 23337017232.770664],
    [1641772800000, 18016718173.608612],
    [1641859200000, 27984634062.049942],
    [1641931968000, 23566485139.32537],
  ],
};