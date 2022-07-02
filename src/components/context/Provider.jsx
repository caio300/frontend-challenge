import React, { useEffect, useState } from "react";
import axios from "axios";
import productsWine from "./Context";


const Provider = ({children}) => {
  const [ wines, setWines ] = useState([]);
  const [ filterPrice, setFilterPrice ] = useState(false);
  const [ page , setPage ] = useState(1);
  const [ totalItems, setTotalItems ] = useState('');
  const [ searchInput, setSearchInput ] = useState(false);
  const [ backPage, setBackPage ] = useState(false);
  const [ shoppingCart, setShoppingCart ] = useState(0);
  const [ cart, setCart ] = useState([]);
  

  const fetchWines = async (params = 1) => {
    const response = await axios.get(`https://wine-back-test.herokuapp.com/products?page=${params}&limit=9`);
    setPage(response.data.page)
    setWines(response.data.items)
    setTotalItems(response.data.totalItems);
  };

  const fetchAllProduct = async () => {
    const response = await axios.get('https://wine-back-test.herokuapp.com/products');
    const items = response.data.items;
    return items;
  };

  useEffect(() => {
    fetchWines();
  }, [backPage]);


  const data = {
    wines,
    setWines,
    page,
    setPage,
    totalItems,
    fetchWines,
    filterPrice,
    setFilterPrice,
    searchInput,
    setSearchInput,
    fetchAllProduct,
    backPage,
    setBackPage,
    shoppingCart,
    setShoppingCart,
    cart,
    setCart
  };

  return (
    <productsWine.Provider value={data}>
      {children}
    </productsWine.Provider>
  )
};

export default Provider;