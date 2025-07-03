import { useState } from "react";
import DropDownItem from "./DropDownItem";

interface EducationInformation {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export default function DropDownEducation() {
  const [showAddInformation, setShowAddInformation] = useState<boolean>(false);
  const [educationList, setEducationList] = useState<EducationInformation[]>(
    []
  );
  const [newInformation, setNewInformation] = useState<EducationInformation>({
    id: crypto.randomUUID(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const field = name as keyof EducationInformation;

    setNewInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleReset() {
    setNewInformation({
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  }

  function handleOnSave() {
    const exists = educationList.some((item) => item.id === newInformation.id);
    let newEducationList;

    if (exists) {
      newEducationList = educationList.map((item) =>
        item.id === newInformation.id ? newInformation : item
      );
    } else {
      newEducationList = [...educationList, newInformation];
    }

    handleReset();
    setEducationList(newEducationList);
    handleShowInfo();
  }

  function handleOnDelete() {
    const idToDelete = newInformation.id;
    const newEducationList = educationList.filter(
      (item) => item.id !== idToDelete
    );
    handleReset();
    setEducationList([...newEducationList]);
    handleShowInfo();
  }

  function handleEditInformation(id: string) {
    const information = educationList.find((item) => item.id === id);
    setNewInformation(information!);
    setShowAddInformation(!showAddInformation);
  }

  function handleShowInfo() {
    setShowAddInformation(!showAddInformation);
  }

  return (
    <>
      {!showAddInformation ? (
        <div className="flex flex-col justify-center grow gap-2">
          {educationList.map((item) => (
            <DropDownItem
              key={item.id}
              id={item.id}
              title={item.school}
              edit={handleEditInformation}
            />
          ))}
          <button
            className="rounded-full border-4 p-2 cursor-pointer px-4 self-center pt-2"
            type="button"
            onClick={handleShowInfo}
          >
            &#43; Education
          </button>
        </div>
      ) : (
        <div className="flex flex-col container">
          <div className={`field flex flex-col mt-0 `}>
            <label htmlFor="school">School</label>
            <input
              id="school"
              name="school"
              type="text"
              onChange={handleChange}
              value={newInformation.school}
              className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
            />
          </div>
          <div className={`field flex flex-col mt-3`}>
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              name="degree"
              type="text"
              onChange={handleChange}
              value={newInformation.degree}
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
                onChange={handleChange}
                value={newInformation.startDate}
                className="rounded-md py-3 px-2 bg-gray-200 text-black text-sm mt-1"
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                onChange={handleChange}
                value={newInformation.endDate}
                className="rounded-md py-3 px-2 bg-gray-200 text-black text-sm mt-1"
              />
            </div>
          </div>
          <div className={`field flex flex-col mt-3`}>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              onChange={handleChange}
              value={newInformation.location}
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
