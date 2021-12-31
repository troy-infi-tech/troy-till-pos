import "./App.css";
import { observer } from "mobx-react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "pages/ProductsPage";

const App = observer(() => {
  return (
    <Routes>
      <Route>
        <Route path="" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
});

export default App;
