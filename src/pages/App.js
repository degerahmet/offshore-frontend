import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/Home.css";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate, Link } from 'react-router-dom';


export default function App({ children }) {
  const address = useAddress();
  const navigate = useNavigate();

  if (address) {
    navigate('/new-user')
  }
  return (
    <main className="main">
      <div className="header">
        <div className="logo">
          <Link to="/"
            href={()=>navigate('/')}
            rel="noopener noreferrer"
          >
            Offshore
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a wallet or user..."
          />
        </div>
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
