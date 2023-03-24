import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
import { Home } from "./pages/home";
import { Item } from "./pages/item";
import { User } from "./pages/user";
import { Detail } from "./pages/detail";
import { NoMatch } from "./pages/noMatch";

const Layout = () => {
  return (
    <div>
      <Link to="/">首页</Link>
      <Link to="/user">用户</Link>
      <Link to="/item">物品</Link>
      <Outlet />
    </div>
  );
};
export const Header = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/item" element={<Item />}>
            <Route path=":id" element={<Detail/>}/>
          </Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="XXX" element={<Navigate to="/"/>}/>
          <Route path="*" element={<NoMatch/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};
