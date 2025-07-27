// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const GoogleCallbackHandler = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     const token = searchParams.get("token");
//     const workspace = searchParams.get("workspace");

//     if (token) {
//       // ✅ Save token to localStorage (or cookies if using httpOnly server setup)
//       localStorage.setItem("authToken", token);

//       // ✅ Redirect to workspace page
//       navigate(`/workspace/${workspace}`);
//     } else {
//       // ❌ If token not present, redirect to login
//       navigate("/login");
//     }
//   }, [navigate, searchParams]);

//   return <p>Logging you in...</p>;
// };

// export default GoogleCallbackHandler;

import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleCallbackHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const workspace = searchParams.get("workspace");

    if (token) {
      // ✅ Save token to localStorage (or cookies if using httpOnly server setup)
      localStorage.setItem("authToken", token);

      // ✅ Redirect to workspace page
      navigate(`/workspace/${workspace}`);
    } else {
      // ❌ If token not present, redirect to login
      navigate("/login");
    }
  }, [navigate, searchParams]);

  return <p>Logging you in...</p>;
};

export default GoogleCallbackHandler;
