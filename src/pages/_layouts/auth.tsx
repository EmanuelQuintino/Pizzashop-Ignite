import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <header>
        <h1>AuthLayout</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
