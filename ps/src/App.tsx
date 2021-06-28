import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './base-components/navigation';
import HomePage from "./packages/home/src/components/HomePage/HomePage";
import RentPage from "./packages/rent-page/src/components/RentPage";
import ChartPage from "./packages/cart/src/components/ChartPage";
import LoginPage from "./packages/authentication/src/components/LoginPage";
import RegisterPage from "./packages/authentication/src/components/RegisterPage";
import ProfilePage from "./packages/profile/src/components/ProfilePage";
import DetailProductPage from "./base-components/product/src/components/DetailProductPage/DetailProductPage";
import AdminPage from "./packages/admin/src/components/AdminPage";
import InventoryPage from "./packages/admin/src/components/InventoryPage";


function App() {
  return (
    <div className="App">
      	<Router>
          <Navigation />
        	<Switch>
          		<Route path="/" exact component={() => <HomePage />} />
              <Route path="/rent-page" exact component={() => <RentPage />} />
              <Route path="/chart-page" exact component={() => <ChartPage />} />
              <Route path="/login-page" exact component={() => <LoginPage />} />
              <Route path="/register-page" exact component={() => <RegisterPage />} />
              <Route path="/profile" exact component={() => <ProfilePage />} />
              <Route path="/detail-product-page/:id" exact component={() => <DetailProductPage/>} />
              <Route path="/admin-page" exact component={() => <AdminPage/>} />
              <Route path="/inventory" exact component={() => <InventoryPage/>} />
          </Switch>
      	</Router>
    	</div>
  );
}

export default App;

