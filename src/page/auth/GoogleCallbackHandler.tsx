import { AUTH_ROUTES } from "@/routes/common/routePaths";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleCallbackHandler = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    const workspaceId = searchParams.get("workspace");

    if (token && workspaceId) {
      localStorage.setItem("token", token);
      navigate(`/workspace/${workspaceId}`);
    } else {
      console.error("Google OAuth login failed");
      navigate(AUTH_ROUTES.SIGN_IN);
    }
  }, [navigate, searchParams]);

  return null;
};

export default GoogleCallbackHandler;
