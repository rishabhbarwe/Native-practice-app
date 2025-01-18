import Mainroute from "./Screens/Mainroute";
import React from 'react';
import { Provider } from 'react-redux';
import store from "./Components/Store/store";

function App(){
  return(
    <Provider store={store}>
      <Mainroute/>
    </Provider>
   
    );
};

export default App