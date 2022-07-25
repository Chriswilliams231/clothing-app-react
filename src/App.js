import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";


import Home from './routes/home/home.components';
import Navigation from './routes/navigation/navigation.components';
import Authentication from './routes/authentication/authentication.components';
import Shop from './routes/shop/shop.components';
import Checkout from './routes/checkout/checkout.components'
import { setCurrentUser } from './store/user/user.action'

import { GlobalStyle } from './global.styles';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);



  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          {/* the shop component will have nested routes within it */}
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );

}

export default App;
