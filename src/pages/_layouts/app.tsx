import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <header>
        <h1>AppLayout</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
