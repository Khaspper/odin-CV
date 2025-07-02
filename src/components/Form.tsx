import { useState } from "react";

interface FormProps {
  inputs: string[];
  goBack: () => void;
}

export default function Form({ inputs, goBack }: FormProps) {
  const [deleteForm, setDeleteForm] = useState<boolean>(false);

  function handleDelete() {
    setDeleteForm(!deleteForm);
    goBack();
  }

  return (
    <>
      <div className="container">
        {inputs.map((label, index) => {
          if (label !== "Date") {
            return (
              <div
                key={label}
                className={`field flex flex-col ${
                  index === 0 ? "mt-0" : "mt-3"
                }`}
              >
                <label htmlFor={label}>{label}</label>
                <input
                  id={label}
                  name={label}
                  type="text"
                  className="rounded-full py-3 px-4 bg-gray-200 text-black text-sm mt-1 container"
                />
              </div>
            );
          }
          return (
            <div
              key="Start Date"
              className={`field flex flex-col ${
                index === 0 ? "mt-0" : "mt-3"
              } flex flex-row container`}
            >
              <div>
                <label htmlFor="Start Date">Start Date</label>
                <input
                  id="Start Date"
                  name="Start Date"
                  type="date"
                  className="rounded-full py-3 px-2 bg-gray-200 text-black text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="End Date">End Date</label>
                <input
                  id="End Date"
                  name="End Date"
                  type="date"
                  className="rounded-full py-3 px-2 bg-gray-200 text-black text-sm mt-1"
                />
              </div>
            </div>
          );
        })}
        <div className="flex justify-between mt-5">
          <button
            className="p-2 border-2 rounded-full px-7 text-red-500"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="p-2 border-2 rounded-full px-7 text-blue-500"
            onClick={goBack}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
