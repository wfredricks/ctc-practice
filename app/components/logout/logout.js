import React from "react";
import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("./");
  };

  return (
    <button className="usa-button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
