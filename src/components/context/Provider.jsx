import React, { useEffect, useState } from "react";
import axios from "axios";
import productsWine from "./Context";


const Provider = ({children}) => {
  const [ wines, setWines ] = useState([]);
  const [ page , setPage ] = useState(1);
  const [infoWine, setInfoWine ] = useState({});

  const fetchWines = async (params = 1) => {
    const response = await axios.get(`https://wine-back-test.herokuapp.com/products?page=${params}&limit=10`);
    setPage(response.data.page)
    setWines(response.data.items)
  };


  useEffect(() => {
    fetchWines();
  }, []);


  const data = {
    wines,
    infoWine,
    setInfoWine,
    page,
    setPage,
  };

  return (
    <productsWine.Provider value={data}>
      {children}
    </productsWine.Provider>
  )
};

export default Provider;