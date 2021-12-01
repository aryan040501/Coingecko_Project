import React from "react";

function FCoinData({ data, loader }) {
  console.log("loader................", loader);
  if (loader) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Coin Symbol</th>
            <th className="col">Coin Name</th>
            <th className="col">Current Price</th>
            <th className="col">Price Change 24Hrs</th>
            <th className="col">CoinGecko Rank</th>
            <th className="col">Developer Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.market_data.current_price.inr}</td>
            <td>{data.market_data.price_change_24h}</td>
            <td>{data.coingecko_rank}</td>
            <td>{data.developer_score}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <center>
        <button
          onClick={() => {
            alert("Bought");
          }}
        >
          Buy
        </button>
        <button
          onClick={() => {
            alert("Sold");
          }}
        >
          Sell
        </button>
      </center>
    </div>
  );
}

export default FCoinData;
