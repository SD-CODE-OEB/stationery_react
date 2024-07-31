import { useState, createContext } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [logged, setLogged] = useState(false);
  const [orders, setOrders] = useState([]);
  const [cartItem, setCartItem] = useState({});

  const vars = {
    user,
    setUser,
    users,
    setUsers,
    orders,
    setOrders,
    cartItem,
    setCartItem,
    logged,
    setLogged,
  };
  return (
    <AppContext.Provider value={vars}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
