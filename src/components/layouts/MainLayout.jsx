// MainLayout.js
import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense } from "react";

import Sidebar from "src/components/layouts/Sidebar";
import Header from "src/components/layouts/Header";
// import LongLoader from 'src/components/global/LongLoader';


// import ScreenLoader from 'src/components/global/ScreenLoader';
import { ClosableToast } from 'src/components/global/Toast';



const MainLayout = () => {
  const [progress, setProgress] = React.useState(30)
  const [loading, setLoading] = React.useState(false)

  

  React.useEffect(()=>{
    document.onreadystatechange = (ev)=>{
      if (document.readyState == "complete") {
        setProgress(100)
      }
    }
  },[])
  
  return (
    <>
    <div className="app" style={{scrollBehavior:"smooth", overflow: "hidden"}}>
      <div className="w-screen h-full bg-gray-300">        
        {/* shown for large data operation */}
        {/* {loading && <LongLoader />} */}
        <Sidebar />
        <div className="w-full relative h-full float-right">
          <Header />
          {/* screen loader not configured currently */}
          {/* <Suspense  fallback={<ScreenLoader />}>
                    <Outlet context={{loader: [loading, setLoading], progress: [progress, setProgress]}}  />
          </Suspense> */}
        </div>
      </div>
    </div>
      {/* <ScrollRestoration /> */}
    </>
  );
};

export default MainLayout;
