import React from "react";
import Searchbar from "./Searchbar";
import Form from "./Form";
import Table from "./Table";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col  ">
      <Searchbar />
      <Form />
    
      </div>
        <Table />
    
     
    </>
  );
}

export default Dashboard;
