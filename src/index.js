import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { ethers } from "ethers";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewUser from "./pages/NewUser";

import { Provider } from 'jotai';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = process.env.ACTIVE_CHAIN || "mumbai";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={<Home />} />,
  },
  {
    path: "/profile",
    element: <App children={<Profile />} />,
    children: [
      {
        path: "/profile/:walletAddress",
        element: <div>Profile</div>,
      },
    ],
  },
  {
    path: "/new-user",
    element: <App children={<NewUser />} />,
  },
  {
    path: "*",
    element: <div>404</div>,
  }
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider>
      <ThirdwebProvider
        activeChain={activeChain}
        signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}
      >
        <RouterProvider router={router} />
      </ThirdwebProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
