import { ConnectWallet, useNetworkMismatch, useSwitchChain, ChainId, useAddress } from "@thirdweb-dev/react";
import "../styles/Home.css";
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from "react";
import SearchBar from "../components/Header/SearchBar";
import { jwtAtom } from "../jotai/atoms";
import { useAtom } from "jotai";
import { base64 } from "ethers/lib/utils";


export default function App({ children }) {
  const address = useAddress();
  const navigate = useNavigate();
  const isMismatched = useNetworkMismatch();
  const switchChain = useSwitchChain();

  const [ jwt, setJwt ] = useAtom(jwtAtom)

  // if (address) {
  //   navigate('/new-user')
  // }
  useEffect(() => {
    if (isMismatched){
      switchChain(ChainId.Mumbai);
    }
    if (address && !jwt) {
      const auth = {
        address: address,
        timestamp: Date.now()
      };
      const auth64 = base64.encode(JSON.stringify(auth));
    }
  },
  [isMismatched, switchChain])

  return (
    <main className="main">
      <div className="header">
        <div className="logo">
          <Link to="/"
            href={() => navigate('/')}
            rel="noopener noreferrer"
          >
            Offshore
          </Link>
        </div>
        <SearchBar path='/profile/'/>
        <div className="connect">
          {address ?
            <div className="user-card" onClick={() => navigate('/profile/' + address)}>
              <div className="user-card__avatar">
                <img src="https://avatars.githubusercontent.com/u/33568568?v=4" alt="avatar" />
              </div>
              <div className="user-card__info">
                <span className="user-card__username">0x...{address.slice(38)}</span>
              </div>
            </div>
            :
            <ConnectWallet
              className="wallet-card"
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
              theme="dark"
            />
          }
        </div>
      </div>
      {children}
    </main>
  );
}
