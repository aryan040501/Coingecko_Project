import axios from "../Axios";
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Coins from "../Components/Coins";
import Pagination from "../Components/Pagination";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [coinPP] = useState(12);
  const [q, setQ] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("/coins/list");
      setCoins(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  //get current coin
  const indexOfLastCoin = currPage * coinPP;
  const indexOfFirstCoin = indexOfLastCoin - coinPP;
  const currCoin = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrPage(pageNumber);

  function search(rows) {
    return rows.filter((row) => row.name.toLowerCase().indexOf(q) > -1);
  }

  console.log(Coins);
  return (
    <div>
      <Navbar />
      <input
        type="text"
        value={q}
        placeholder="Enter Coin Name"
        onChange={(e) => {
          setQ(e.target.value);
        }}
      />
      <Coins coins={search(currCoin)} loading={loading} />
      <Pagination
        coinPP={coinPP}
        totalCoin={coins.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Dashboard;
