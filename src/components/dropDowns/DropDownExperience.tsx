import { useState } from "react";
import DropDownItem from "./DropDownItem";

interface ExperienceInformation {
  id: string;
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export default function DropDownExperience() {
  const [showAddInformation, setShowAddInformation] = useState<boolean>(false);
  const [experienceList, setExperienceList] = useState<ExperienceInformation[]>(
    []
  );
  const [newInformation, setNewInformation] = useState<ExperienceInformation>({
    id: crypto.randomUUID(),
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  function handleShowInfo() {
    setShowAddInformation(!showAddInformation);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const field = name as keyof ExperienceInformation;

    setNewInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleReset() {
    setNewInformation({
      id: crypto.randomUUID(),
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  }

  function handleEditInformation(id: string) {
    const information = experienceList.find((item) => item.id === id);
    setNewInformation(information!);
    setShowAddInformation(!showAddInformation);
  }

  function handleOnSave() {
    const exists = experienceList.some(
      (item: ExperienceInformation) => item.id === newInformation.id
    );
    let newExperienceList;
    if (exists) {
      newExperienceList = experienceList.map((item: ExperienceInformation) =>
        item.id === newInformation.id ? newInformation : item
      );
    } else {
      newExperienceList = [...experienceList, newInformation];
    }
    handleReset();
    setExperienceList(newExperienceList);
    handleShowInfo();
  }

  function handleOnDelete() {
    const idToDelete = newInformation.id;
    const newExperienceList = experienceList.filter(
      (item: ExperienceInformation) => item.id !== idToDelete
    );
    handleReset();
    setExperienceList(newExperienceList);
    setShowAddInformation(!showAddInformation);
  }

  return (
    <>
      {!showAddInformation ? (
        <div className="flex flex-col justify-center grow gap-2">
          {experienceList.map((item) => (
            <DropDownItem
              key={item.id}
              id={item.id}
              title={item.companyName}
              edit={handleEditInformation}
            />
          ))}
          <button
            className="rounded-full border-4 p-2 cursor-pointer px-4 self-center pt-2"
            type="button"
            onClick={handleShowInfo}
          >
            &#43; Experience
          </button>
        </div>
      ) : (
        <div className="flex flex-col container">
          <div className={` flex flex-col mt-0 `}>
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={newInformation.companyName}
              onChange={handleChange}
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={` flex flex-col mt-3`}>
            <label htmlFor="positionTitle">Position Title</label>
            <input
              id="positionTitle"
              name="positionTitle"
              type="text"
              value={newInformation.positionTitle}
              onChange={handleChange}
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={`flex flex-row container`}>
            <div>
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={newInformation.startDate}
                onChange={handleChange}
                className="rounded-md py-3 px-2 bg-gray-200 text-black text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={newInformation.endDate}
                onChange={handleChange}
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
              value={newInformation.location}
              onChange={handleChange}
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={` flex flex-col mt-3`}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newInformation.description}
              onChange={handleChange}
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={`flex mt-3 justify-around gap-5`}>
            <button
              className="rounded-full border-2 p-2 cursor-pointer px-4 self-center pt-2 text-red-500 container"
              type="button"
              onClick={handleOnDelete}
            >
              Delete
            </button>

            <button
              className="rounded-full border-2 p-2 cursor-pointer px-4 self-center pt-2 text-blue-500 container"
              type="button"
              onClick={handleOnSave}
            >
              save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
