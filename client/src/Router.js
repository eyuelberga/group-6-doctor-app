import React from 'react';
import Navbar from './Navbar';
import { useEffect, useState } from "react";


const Router = () => {
    // May need
  const [jsonData, setJsonData] = useState(null)
    
  return (
    <div>
      <Navbar/>
    </div>
  );
};

export default Router;