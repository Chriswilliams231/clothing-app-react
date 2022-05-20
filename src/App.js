import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.components';
import Navigation from './routes/navigation/navigation.components';
import SignIn from './routes/sign-in/sign-in.components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );

}

export default App;