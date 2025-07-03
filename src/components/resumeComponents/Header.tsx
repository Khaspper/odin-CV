import type { PersonalInformation } from "../../App";

export default function Header({
  fullName,
  email,
  phoneNumber,
  address,
}: PersonalInformation) {
  return (
    <div className="border-2 container h-[200px]">
      <h1 className="">{fullName}</h1>
      <h1>{email}</h1>
      <h1>{phoneNumber}</h1>
      <h1>{address}</h1>
    </div>
  );
}
