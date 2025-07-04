import type { PersonalInformation } from "../../App";

export default function Header({
  fullName,
  email,
  phoneNumber,
  address,
}: PersonalInformation) {
  return (
    <div className="container h-[200px] bg-sky-900 flex flex-col justify-around items-center text-white">
      <h1 className="grow text-5xl justify-center flex items-center">
        {fullName}
      </h1>
      <div className="grow flex items-center gap-20">
        <h1>{email}</h1>
        <h1>{phoneNumber}</h1>
        <h1>{address}</h1>
      </div>
    </div>
  );
}
