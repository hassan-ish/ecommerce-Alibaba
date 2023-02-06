import Home from "../Pages/Home";
import StoreList from "../Pages/StoreList";

export const PATHS = {
  HOME: "/",
  STORE: "store",
};
export const router = [
  { index: true, element: <Home /> },
  { path: PATHS.STORE, element: <StoreList /> },
];
