import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css"

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
     

    axios.get("https://zerodha-backend-pho2.onrender.com/newOrder").then((res) => {
      // console.log(res.data);
      setOrders(res.data);
    });
  },[]);
  return (
    <div className="order-table">
      <div className="orders">
        {/* <p>You haven't placed any orders today</p> */}

        <table>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {orders.map((stock,index)=>{
            // console.log(stock);
            return (
              <tr key={index}> 
              <td >{stock.name} </td>
              <td>{stock.qty} </td>
              <td>{stock.price} </td>
              <td>{stock.mode} </td>
              </tr>
            )

          })}
        </table>

        {/* <Link to={"/"} className="btn">
          Get started
        </Link> */}
      </div>
    </div>
  );
};

export default Orders;
