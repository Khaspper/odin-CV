import { useState } from "react";

interface DropDownProps {
  title: string;
}

export default function DropDownMenu({ title }: DropDownProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  function handleChange() {
    console.log(`${!showDropDown}`);
    setShowDropDown(!showDropDown);
  }

  // function handleAnimation() {}

  return (
    <>
      <section
        className={`flex flex-col shadow-lg hover:cursor-pointer border border-gray-300 bg-white text-gray-500 text-lg px-3 py-1 rounded transition-all duration-200 overflow-hidden ${
          showDropDown ? "h-32" : "h-12"
        }`}
        onClick={handleChange}
      >
        <div className="flex justify-between items-center">
          <h2 className="hover:cursor-text">{title}</h2>
          <svg
            className={`w-6 h-6 text-black transition-transform duration-300 ease-in-out ${
              showDropDown ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </div>
        <div
          className={`rounded-lg p-3 mt-2 shadow-md transition-all duration-200 ${
            showDropDown
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          } origin-top`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <p>Yo what's up gang!!!</p>
        </div>
      </section>
    </>
  );
}
