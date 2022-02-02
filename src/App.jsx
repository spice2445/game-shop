import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import BasketPage from "./pages/BasketPage/BasketPage";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import { Provider } from "react-redux";
import { store } from './redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/game/:id" element={<GamePage/>}/>
          <Route path="/shop" element={<BasketPage/>}/>
          {/* <Route path="*" element={<GamePage/>}/> */}
        </Routes>
    </div>
    </Provider>
  );
}

export default App;
