import "./App.css";
import { observer } from "mobx-react";
import { Route, Routes } from "react-router-dom";
import PizzaMenuPage from "pages/PizzaMenuPage";

const App = observer(() => {
  return (
    <Routes>
      <Route>
        <Route path="" element={<PizzaMenuPage />} />
      </Route>
    </Routes>
  );
});

export default App;
