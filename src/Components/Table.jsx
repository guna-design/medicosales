import React from "react";

import TableValues from "./Tablevalues";
import TableData from "./Tabledata";

function Table() {
  return (
    <>
     

      <div class=" pl-72 m-10 overflow-x-scroll">
        <table class=" text-sm   text-gray-500 dark:text-gray-400">
          <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-8 py-3."></th>
              <th scope="col" class="">
                InvoiceID
              </th>

              <th scope="col" class="px-10 py-3.5">
                Date
              </th>
              <th scope="col" class="px-10 py-3.5">
                Customer
              </th>
              <th scope="col" class="px-10 py-3.5">
                Payable Amount
              </th>
              <th scope="col" class="px-10 py-3.5">
                Paid Amount
              </th>
              <th scope="col" class="px-10 py-3.5">
                Due
              </th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((e, i) => {
              return <TableValues data={e} key={i} />;
            })}
          </tbody>
        </table>
      </div>




    </>
  );
}

export default Table;
