import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

function AccordionTable({ contentObj, heading }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex justify-between font-bold items-center cursor-pointer"
        onClick={toggleCollapse}
      >
        <h2 className="border-l-4 border-orange-500 px-2 text-xl font-Montserrat">
          {heading}
        </h2>
        <FaChevronDown
          className={`text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <ul
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {contentObj.map((item, i) => (
          <li
            key={i}
            className={`flex justify-between py-2 px-4 border-b border-gray-300 transform transition-all duration-500 ${
              isOpen
                ? '-translate-x-0 opacity-100 shake-animation'
                : '-translate-x-full opacity-0'
            } delay-${i * 500}`}
          >
            <span className="font-poppins">{item}</span>
            <FaChevronRight />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccordionTable;