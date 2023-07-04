import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ItemDetail from "./pages/item";
import { fetchItems } from "./redux/actionCreate";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
      <h2 style={{marginLeft:"20px"}}>Social Media App</h2>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/item/:id" element={<ItemDetail/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
