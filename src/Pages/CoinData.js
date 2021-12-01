import React, { useState, useEffect } from "react";
import axios from "../Axios";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import FCoinData from "../Components/FCoinData";

function CoinData() {
  let { id } = useParams();
  console.log("id rec", id);

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchCoinData = async (id) => {
      console.log("loader 1...", loader);
      const res = await axios.get(`/coins/${id}`);
      setData(res.data);
      setLoader(false);
    };

    fetchCoinData(id);
  }, []);

  console.log(data);

  return (
    <div>
      <Navbar />
      <FCoinData data={data} loader={loader} />
    </div>
  );
}

export default CoinData;
