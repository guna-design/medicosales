import React from "react";


function Sidebar() {
  return (
    <>
     
   

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-xl "
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-6 overflow-y-auto    bg-gray-50 dark:bg-gray-800 ">
          <div className="flex justify-center ">
            <span className="mx-2 text-2xl  font-semibold text-blue-950   ">
            Medico Sales
            </span>
          </div>
          <ul class="  py-10 text-lg font-medium">
         
            <li>
            <a
            className="flex items-center px-6 py-2 mt-4  text-white visited:text-blue-800 ... "
            href="/"
          >
            <i className="fa-brands fa-windows  sm:left-32 md:left-72 pl-8 "></i>
            <span className="mx-3">Dashboard</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-gray-900 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-flask pl-8 "></i>
            <span className="mx-3">Lab test</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-calendar pl-8"></i>
            <span className="mx-3">Appointment</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-bag-shopping pl-8"></i>
            <span className="pl-2 w-auto "> Medicine Order</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-envelope pl-8 "></i>
            <span className="mx-3"> Message</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-wallet pl-8 "></i>
            <span className="mx-3">Payment</span>
          </a>
          <a
            className="flex items-center px-6 py-2 mt-4 text-grey-300 opacity-50"
            href="/"
          >
            <i className="fa-solid fa-gear pl-8 "></i>
            <span className="mx-3">Setting</span>
          </a>
          <a
            className="flex items-center px-6 py-3.5 mt-36 text-grey-300 opacity-50"
            href="/"
          >
            <i class="fa-solid fa-circle-question pl-8"></i>
            <span className="mx-3">Help</span>
          </a>
            </li>
          </ul>
        </div>
      </aside>





    </>
  );
}

export default Sidebar;
