  import React from "react";
  import { Route, Routes } from "react-router-dom";

  import Apps from "./Apps";
  import Funds from "./Funds";
  import Holdings from "./Holdings";

  import Orders from "./Orders";
  import Positions from "./Positions";
  import Summary from "./Summary";
  import WatchList from "./WatchList";
  import { GeneralContextProvider } from "./GeneralContext";
  import { useEffect } from "react";
  import NotFound from "../NotFound";
  import axios from"axios"
  const Dashboard = () => {
    useEffect(()=>{
      axios.post("https://zerodha-backend-pho2.onrender.com/auth/",
        {},
        {withCredentials:true},
      ).then((res)=>{
        if(!res.data.status){
            window.location.href =" /login";
        }
      }).catch((err)=>{
        console.log("Auth checked failed ",err);
        window.location.href = "/login";
      })
    },[]);

    return (
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />

            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    );
  };

  export default Dashboard;