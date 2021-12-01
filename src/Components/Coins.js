import React from "react";
import "reactjs-popup/dist/index.css";
// import CoinData from "../Pages/CoinData";
import { useHistory } from "react-router-dom";

function Coins({ coins, loading }) {
  console.log("loading........", loading);
  let history = useHistory();

  const routeChange = (id) => {
    let path = `/coin/${id}`;
    history.push(path);
  };

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col">Coin Symbol</th>
          <th className="col">Coin Name</th>
          <th className="col">Info</th>
        </tr>
      </thead>
      {coins.map((coin) => (
        <>
          <tbody>
            <tr>
              <td key={coin.id} className="col">
                {coin.symbol}
              </td>
              <td className="col">{coin.name}</td>
              <button
                onClick={() => {
                  routeChange(coin.id);
                }}
              >
                More Info
              </button>
            </tr>
          </tbody>
        </>
      ))}
    </table>
  );
}

export default Coins;
