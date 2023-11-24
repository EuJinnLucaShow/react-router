import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/catalog'>Catalog</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </header>
      <main>
      <Outlet></Outlet>
      </main>
    </>
  );
}

