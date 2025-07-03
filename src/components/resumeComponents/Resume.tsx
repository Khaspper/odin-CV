import Header from "./Header";
import type { PersonalInformation } from "../../App";

interface ResumeProps {
  personalInformation: PersonalInformation;
}

export default function Resume({ personalInformation }: ResumeProps) {
  return (
    <div
      className="bg-white w-[8.5in] h-[11in] shadow-2xl"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Header {...personalInformation} />
    </div>
  );
}
