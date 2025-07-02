import { useState } from "react";

export default function DropDownExperience() {
  const [showAddInformation, setShowAddInformation] = useState<boolean>(false);
  // const [educationList, setEducationList] = useState<Array>([]);

  function handleShowInfo() {
    setShowAddInformation(!showAddInformation);
  }

  return (
    <>
      {!showAddInformation ? (
        <button
          className="rounded-full border-4 p-2 cursor-pointer px-4 self-center pt-2"
          type="button"
          onClick={handleShowInfo}
        >
          &#43; Education
        </button>
      ) : (
        <div className="flex flex-col container">
          <div className={` flex flex-col mt-0 `}>
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={` flex flex-col mt-3`}>
            <label htmlFor="positionTitle">Position Title</label>
            <input
              id="positionTitle"
              name="positionTitle"
              type="text"
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={`flex flex-row container`}>
            <div>
              <label htmlFor="Start Date">Start Date</label>
              <input
                id="Start Date"
                name="Start Date"
                type="date"
                className="rounded-md py-3 px-2 bg-gray-200 text-black text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="End Date">End Date</label>
              <input
                id="End Date"
                name="End Date"
                type="date"
                className="rounded-md py-3 px-2 bg-gray-200 text-black text-sm mt-1"
              />
            </div>
          </div>
          <div className={` flex flex-col mt-3`}>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={` flex flex-col mt-3`}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={`flex mt-3 justify-around gap-5`}>
            <button
              className="rounded-full border-2 p-2 cursor-pointer px-4 self-center pt-2 text-red-500 container"
              type="button"
            >
              Delete
            </button>

            <button
              className="rounded-full border-2 p-2 cursor-pointer px-4 self-center pt-2 text-blue-500 container"
              type="button"
            >
              save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
