import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  
  return (
    <>
      <header style={{display: 'flex', justifyContent: 'space-evenly'}}>      
        <NavLink to='/catalog' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Catalog</NavLink>
        <NavLink to='/' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
        <NavLink to='/profile' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Profile</NavLink>
      </header>
      <main>
      <Outlet/>
      </main>
    </>
  );
}

