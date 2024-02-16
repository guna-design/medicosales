import React from 'react'
import Formdata from './Formdata'


function Form() {
    return (
    <>

           <div className=' pt-8 pl-80 text-2xl'>
           Sales Information
           </div>
            <div className=" pt-5 pl-80   columns-6">
                <div className=" flex flex-nowrap gap-28 text-wrap text-base">
                    <Formdata label="Customer" placeholder="Enter Customer Name" />
                    <Formdata label="Invoice ID" placeholder="Enter Invoice ID" />
                    <Formdata label="Start Date" placeholder="Start Date" />
                    <Formdata label="End Date" placeholder="End Date" />
                </div>
               
              
            
        </div>
       
    </>
    )
}

export default Form