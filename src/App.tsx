import { Routes, Route, useLocation, NavLink } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import Mint from "./routes/Mint";
import Royalties from "./routes/Royalties";
import Collection from "./routes/Collection";
import Header from "./components/Header";

import {
  Home as HomeIcon,
  Flame as MintIcon,
  CircleDollarSign as RoyaltiesIcon,
  Image as CollectionIcon,
} from "lucide-react";
import Web3Provider from "./web3/Web3Provider";
import { CollectionProvider } from "./web3/CollectionProvider";
import CookieBar from "./components/CookieBar";
// import Admin from "./routes/Admin";

export const pageVariants = {
  hidden: {
    filter: "blur(50px)",
    rotateX: 180,
    // scale: 2,
  },
  visible: {
    filter: "blur(0px)",
    rotateX: 0,
    // scale: 1,
    transition: {
      staggerChildren: 0.25,
      // when: "beforeChildren",
    },
  },
};

export const elementVariants = {
  hidden: {
    filter: "blur(50px)",
    rotateX: 360,
    y: 64,
    // scale: 2,
  },
  visible: {
    filter: "blur(0px)",
    rotateX: 0,
    y: 0,
    // scale: 1,
  },
};

function App() {
  const routes = [
    {
      path: "/",
      icon: <HomeIcon />,
      element: <Home />,
    },
    {
      path: "/mint",
      icon: <MintIcon />,
      element: <Mint />,
    },
    {
      path: "/royalties",
      icon: <RoyaltiesIcon />,
      element: <Royalties />,
    },
    {
      path: "/collection",
      icon: <CollectionIcon />,
      element: <Collection />,
    },
    // ADMIN ROUTE remove or manage
    // { path: "/admin", icon: "admin", element: <Admin /> },
  ];
  const location = useLocation();
  return (
    <Web3Provider>
      <CollectionProvider>
        <Header />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {routes.map((r) => (
              <Route path={r.path} element={r.element} key={r.path} />
            ))}
          </Routes>
        </AnimatePresence>
        <div className="btm-nav bg-neutral">
          {routes.map((r) => (
            <NavLink key={r.path} to={r.path}>
              {r.icon}
            </NavLink>
          ))}
        </div>
        <CookieBar />
      </CollectionProvider>
    </Web3Provider>
  );
}

export default App;
