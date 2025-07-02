export default function DropDownPersonal() {
  return (
    <>
      <div className="flex flex-col container">
        <div className={`field flex flex-col mt-0 `}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
          />
        </div>
        <div className={`field flex flex-col mt-3`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
          />
        </div>
        <div className={`field flex flex-col mt-3`}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
          />
        </div>
        <div className={`field flex flex-col mt-3`}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            className="rounded-md py-3 px-4 bg-gray-200 text-black text-sm mt-1 "
          />
        </div>
      </div>
    </>
  );
}
