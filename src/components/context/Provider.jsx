import React, { useEffect, useState } from "react";
import axios from "axios";
import productsWine from "./Context";


const Provider = ({children}) => {
  const [ wines, setWines ] = useState('');
  
  const fetchWines = async () => {

    const response = await axios.get('https://wine-back-test.herokuapp.com/products?page=1&limit=10');
    setWines(response.data.items)
  };

  useEffect(() => {
    fetchWines();
  }, []);


  const data = {
    wines,
  };

  return (
    <productsWine.Provider value={data}>
      {children}
    </productsWine.Provider>
  )
};

export default Provider;