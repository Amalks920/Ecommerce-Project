
import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const AdminNavbar = () => {

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    // <div className='w-screen flex justify-around ms-[320px] pt-[2%] h-[150px] p-5  fixed bg-white shadow-2xl'>
    //    <h1 className='text-3xl font-bold'>ADMIN</h1>
    //    <button className='bg-slate-800 h-16 w-[8%] text-white text-xl font-bold'>Logout</button>
    // </div>
//     <div className="w-screen flex justify-around left-[320px] top-[2%] h-[150px] p-5 fixed bg-white shadow-2xl">
//   <h1 className="text-3xl font-bold">ADMIN</h1>
//   <button className="bg-slate-800 h-16 w-[8%] text-white text-xl font-bold">Logout</button>
// </div>
<Navbar className="mx-auto w-full h-[100px] flex ms-[15%]  py-2 ">
<div className="border  container mx-auto flex items-center justify-between text-blue-gray-900">
  <Typography
    as="a"
    href="#"
    className="mr-4 cursor-pointer py-1.5 font-medium"
  >
   Admin
  </Typography>
  <div className="hidden lg:block">{navList}</div>
  <Button variant="gradient" size="sm" className="hidden lg:inline-block">
    <span>Logout</span>
  </Button>
  <IconButton
    variant="text"
    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    ripple={false}
    onClick={() => setOpenNav(!openNav)}
  >
    {openNav ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </IconButton>
</div>
<MobileNav open={openNav}>
  <div className="container mx-auto">
    {navList}
    <Button variant="gradient" size="sm" fullWidth className="mb-2">
      <span>Buy Now</span>
    </Button>
  </div>
</MobileNav>
</Navbar>

  )
}

export default AdminNavbar
