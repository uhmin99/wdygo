import React, { useEffect } from "react";
import { pushMainRoute } from "./src/utils/RouteUtil";


const App = () => {

  useEffect(()=>{
    pushMainRoute()
  },[])

  return null;
};

export default App;