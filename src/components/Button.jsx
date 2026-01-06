import React from "react";

export default function Button({ title }) {
   return (
      <button className='bg-primary text-white  px-6 py-3 rounded-md font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer'>
         {title}
      </button>
   );
}
