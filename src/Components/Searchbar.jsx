import React from "react";


function Searchbar() {
  return (
    <>
      {/* <div class=" ">
        <div class="">
          <div class="">
            <i class="fas fa-search text-gray-500"></i>
          </div>
          <input
            class="w-full h-10 pl-16 sm:w-64 max-w-xs py-1 text-base placeholder-gray-600 border  focus:shadow-outline"
            type="search"
            placeholder="Search"
          />
        </div>
        <div class="pl-96 ">
        
      </div>
      
      </div> */}
    
     
      <div className='flex flex-wrap column-2 pt-5  gap-x-96  pl-96'>
      <input
            class="w-96 h-10     text-base placeholder-gray-600 border  focus:shadow-outline"
            type="search"
            placeholder="Search"
          />
         
        <span  class="relative  flex h-3 w-3">
       
          <i class=" fa-regular  bg-white w-10 h-8 rounded-sm shadow-lg fa-bell text-gray-500 text-lg"></i>
       
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
</div>
      
     
     
    </>
  );
}

export default Searchbar;
