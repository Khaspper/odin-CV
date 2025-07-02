import { useState } from "react";

interface PersonalInformation {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export default function DropDownPersonal() {
  const [personalInformation, setPersonalInformation] =
    useState<PersonalInformation>({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const field = name as keyof PersonalInformation;

    setPersonalInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleOnSave() {
    const newPersonalInformation = { ...personalInformation };
    console.log(personalInformation);
    setPersonalInformation(newPersonalInformation);
  }

  return (
    <>
      <div className="flex flex-col container">
        <div className={`field flex flex-col mt-0 `}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={personalInformation.fullName}
            onChange={handleChange}
            className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
          />
        </div>
        <div className={`field flex flex-col mt-3`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={personalInformation.email}
            onChange={handleChange}
            className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
          />
        </div>
        <div className={`field flex flex-col mt-3`}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={personalInformation.phoneNumber}
            onChange={handleChange}
            className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
          />
        </div>
        <div className={`field flex flex-col mt-3`}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={personalInformation.address}
            onChange={handleChange}
            className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
          />
        </div>
        <button
          className="rounded-full border-2 p-2 cursor-pointer px-4 self-center pt-2 text-blue-500 mt-3 container"
          type="button"
          onClick={handleOnSave}
        >
          save
        </button>
      </div>
    </>
  );
}
//TODO: For future mark good job! Now all you have to do is implement a save feature for this one
