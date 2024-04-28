import { Outlet } from "react-router-dom";

export function Users() {
  // This component will render for the "/users" route
  return <div>Users
    <Outlet />
  </div>
}