import React from "react";

export default function ScrollToTop({ darkMode }) {
   return (
      <button
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         className={`fixed bottom-6 right-6 w-12 h-12 ${
            darkMode ? "bg-indigo-600/80" : "bg-indigo-600/70"
         } backdrop-blur-md text-white rounded-full shadow-lg border border-white/20 flex items-center justify-center hover:bg-indigo-700/80 transition-colors cursor-pointer !rounded-button`}
      >
         <i className='fas fa-arrow-up'></i>
      </button>
   );
}
