import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import axios from "axios";
import { useEffect, useState } from "react";
import ViewProduct0 from "./ViewProduct0";
import ViewProduct1 from "./ViewProduct1";
import ViewProduct2 from "./ViewProduct2";
import AdminPage from "./AdminPage";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login";
import Signup from "./Signup";
import Swal from 'sweetalert2';
import Cart from "./Cart";
import Ordersuccess from "./Ordersuccess";
import { env } from "./Config";

function App() {

  useEffect(() => {
    loadData()
  }, [])


  //Alert function;
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    color: '#161616',
    background: "#f8f9fa",
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false)



  const [data0, setData0] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  let loadData = async () => {

    setLoading(true)

    let products0 = await axios.get(`${env.api}/products`, {
      headers: {
        Authorization: window.localStorage.getItem("app-token"),
      },
    });
    setData0(products0.data);

    let products1 = await axios.get(`${env.api}/products1`, {
      headers: {
        Authorization: window.localStorage.getItem("app-token"),
      },
    });
    setData1(products1.data);

    let products2 = await axios.get(`${env.api}/products2`, {
      headers: {
        Authorization: window.localStorage.getItem("app-token"),
      },
    });
    setData2(products2.data);

    setLoading(false)
  };

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (res) => {
    setCount(count + 1);
    Toast.fire({ icon: 'success', title: 'Item added to the bag' })
    setCart([...cart, res]);
    setTotal(total + res.price);
  };

  let removeCart = (res1) => {
    setCount(count - 1);
    Toast.fire({ icon: 'error', title: 'Item removed from the bag' })
    let index = cart.findIndex((obj) => {
      return obj._id === res1._id;
    });
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - res1.price);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="dashboard" element={<Dashboard
                count={count}
                data0={data0}
                data1={data1}
                data2={data2}
                cart={cart}
                addToCart={addToCart}
                loading={loading}
                loadData={loadData}
              />
              }
            />

            <Route
              path="cart"
              element={
                <Cart
                  count={count}
                  setCount={setCount}
                  cart={cart}
                  total={total}
                  setTotal={setTotal}
                  removeCart={removeCart}
                  addToCart={addToCart}
                />
              }
            />

            <Route
              path="product/:id"
              element={
                <ViewProduct0 count={count} addToCart={addToCart} cart={cart} />
              }
            />
            <Route
              path="product1/:id"
              element={
                <ViewProduct1 count={count} addToCart={addToCart} cart={cart} />
              }
            />
            <Route
              path="product2/:id"
              element={
                <ViewProduct2 count={count} addToCart={addToCart} cart={cart} />
              }
            />

            <Route
              path="adminportal"
              element={
                <AdminPage />
              }
            />
            <Route
              path="ordersuccess"
              element={
                <Ordersuccess />
              }
            />

          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
