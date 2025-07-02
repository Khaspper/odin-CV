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
        className={`flex justify-between shadow-lg hover:cursor-pointer drop-down ${
          showDropDown ? "flex-col" : ""
        } `}
        onClick={handleChange}
      >
        <div className="grow flex justify-between">
          <h2 className="hover:cursor-text grow-0">{title}</h2>
          <svg
            className={`w-6 h-6 text-black justify-self-end transition duration-300 ease-in-out ${
              showDropDown ? "-rotate-180" : "-rotate-360"
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
        {/* {showDropDown && (
          <div className="overflow-hidden transition-all duration-200 drop-down">
            Yo what's up gang!!!
          </div>
        )} */}
      </section>
    </>
  );
}
