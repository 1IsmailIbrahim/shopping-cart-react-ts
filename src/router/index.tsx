import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import RootLayout from "../pages/Layout";
import ErrorHandler from "../components/errors/ErrorHandler";
import HomePage from "../pages";
import Cart from "../pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
