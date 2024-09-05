import React from "react";
import ReactDOM from "react-dom/client";
import "@mysten/dapp-kit/dist/index.css";
import "@radix-ui/themes/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import { HouseKeypairProvider } from "./containers/House/HouseKeypairContext.tsx";
import { HouseDataProvider } from "./containers/House/HouseDataContext.tsx";

const queryClient = new QueryClient();
const networks = {
  localnet: { url: getFullnodeUrl("localnet") },
  devnet: { url: getFullnodeUrl("devnet") },
  testnet: { url: getFullnodeUrl("testnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
  m2: new SuiClient ({ url: "https://devnet.baku.movementlabs.xyz:443" }),
}; 


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="yellow">
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networks} defaultNetwork="m2">
          <WalletProvider autoConnect>
            <ToastContainer />
            <HouseKeypairProvider>
              <HouseDataProvider>
                <App />
              </HouseDataProvider>
            </HouseKeypairProvider>
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
);
