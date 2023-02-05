import React, { useState } from "react";

import { TfiAngleLeft } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
function Pagignation() {
  const [page, setpage] = useState(1);

  function handleNext() {
    console.log('handle Next');
    setpage(page + 1);
    let check = document.querySelectorAll('.pagination_button')
    check.forEach((e) => {
      e.classList.remove('bg-[#36454F]')
    })
    check[page - 1].classList.add('bg-[#36454F]')
    
  }
  function handlePrev() {
    console.log('handle Next');
    setpage(page - 1);
    let check = document.querySelectorAll('.pagination_button')
    check.forEach((e) => {
      e.classList.remove('bg-[#36454F]')
    })
    check[page - 1].classList.add('bg-[#36454F]')
    
  }

  return (
    <div className="flex justify-center mb-14 mt-10">
      <nav aria-label="Page navigation">
        <ul className="inline-flex space-x-5">
          <li>
            <button
              className={`${
                page === 1 && "hidden"
              } flex items-center justify-center w-10 h-10 text-[#36454F] transition-colors duration-150 rounded-full focus:shadow-outline border-2 border-[#36454F]`}
              onClick={handlePrev}
            >
              <TfiAngleLeft />
            </button>
          </li>

          {[1, 2, 3, 4].map((item) => (
            <li key={item + "$"}>
              <button
                className={`pagination_button w-10 h-10 text-xl transition-colors duration-150 rounded-full focus:shadow-outline ${
                  item === 1
                    ? "bg-[#36454F] text-white"
                    : "border-2 border-[#36454F]"
                }`}
              >
                {item}
              </button>
            </li>
          ))}

          <li>
            <button className="flex items-center justify-center w-10 h-10 text-[#36454F] transition-colors duration-150 rounded-full focus:shadow-outline border-2 border-[#36454F]">
              <BsThreeDots />
            </button>
          </li>
          <li>
            <button className="flex items-center justify-center w-10 h-10 text-[#36454F] transition-colors duration-150 rounded-full focus:shadow-outline border-2 border-[#36454F]" onClick={handleNext}>
              <TfiAngleLeft className="rotate-180" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagignation;
