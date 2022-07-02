import React, { useEffect, useState } from "react";
import axios from "axios";
import productsWine from "./Context";


const Provider = ({children}) => {
  const [ wines, setWines ] = useState([]);
  const [ page , setPage ] = useState(1);
  const [ totalItems, setTotalItems ] = useState('');
  

  const fetchWines = async (params = 1) => {
    const response = await axios.get(`https://wine-back-test.herokuapp.com/products?page=${params}&limit=9`);
    setPage(response.data.page)
    setWines(response.data.items)
    setTotalItems(response.data.totalItems);
  };


  useEffect(() => {
    fetchWines();
  }, []);

  const data = {
    wines,
    setWines,
    page,
    setPage,
    totalItems,
    fetchWines,
  };

  return (
    <productsWine.Provider value={data}>
      {children}
    </productsWine.Provider>
  )
};

export default Provider;