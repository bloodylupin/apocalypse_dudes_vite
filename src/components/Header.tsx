import { Link } from "react-router-dom";
import ConnectButton from "./ConnectButton";

import { ApdLogotipo } from "../assets/ApdLogos";

export default function Header() {
  return (
    <div className="navbar bg-neutral z-30 relative">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost">
          <ApdLogotipo />
        </Link>
      </div>
      <div className="flex-none">
        <ConnectButton />
      </div>
    </div>
  );
}
