import { Header } from "@/components/header";
import { API } from "@/lib/axios";
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptorId = API.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          const code = error.response?.data.code;

          console.log({ status, code });

          if (status == 401 && code == "UNAUTHORIZED") {
            navigate("/sign-in", { replace: true });
          } else {
            throw error;
          }
        }
      },
    );

    return () => {
      API.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
