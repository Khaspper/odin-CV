import { useState } from "react";
import DropDownPersonal from "./DropDownPersonal";
import DropDownEducation from "./DropDownEducation";
import DropDownExperience from "./DropDownExperience";

interface DropDownProps {
  title: string;
}

export default function DropDownMenu({ title }: DropDownProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  function handleDropDown() {
    console.log(`${!showDropDown}`);
    setShowDropDown(!showDropDown);
  }

  return (
    <>
      <section
        className={`flex flex-col shadow-lg border border-gray-300 bg-white text-black-500 text-lg px-3 py-1 rounded transition-all ease-in-out duration-300 overflow-hidden max-w-[22rem] ${
          showDropDown ? "max-h-[2000px]" : "max-h-12"
        }`}
      >
        <div
          className="flex justify-between items-center hover:cursor-pointer"
          onClick={handleDropDown}
        >
          <h2 className="hover:cursor-text pt-1">{title}</h2>
          <svg
            className={`w-6 h-6 text-black transition-transform duration-300 ease-in-out ${
              showDropDown ? "rotate-180" : "rotate-0"
            } hover:cursor-pointer`}
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
          className={`p-3 mt-2 ${
            showDropDown ? "opacity-100 scale-y-100" : ""
          } origin-top flex flex-cols justify-center`}
        >
          {title === "Personal Details" ? (
            <DropDownPersonal />
          ) : title === "Education" ? (
            <DropDownEducation />
          ) : (
            <DropDownExperience />
          )}
          {/* {!showAddInformation ? (
            <button
              className="rounded-full border-4 p-2 cursor-pointer px-4 self-center pt-2"
              type="button"
              onClick={handleShowInfo}
            >
              &#43; {title}
            </button>
          ) : (
            <DropDownMenuItems />
          )} */}
        </div>
      </section>
    </>
  );
}
