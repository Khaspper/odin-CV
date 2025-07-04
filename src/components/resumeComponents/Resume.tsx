import type {
  PersonalInformation,
  EducationInformation,
  ExperienceInformation,
} from "../../App";
import Header from "./Header";
import Education from "./Education";
import Experience from "./Experience";

interface ResumeProps {
  personalInformation: PersonalInformation;
  educationInformation: EducationInformation[];
  experienceInformation: ExperienceInformation[];
}

export default function Resume({
  personalInformation,
  educationInformation,
  experienceInformation,
}: ResumeProps) {
  return (
    <div
      className="bg-white w-[8.5in] h-[11in] shadow-2xl"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Header {...personalInformation} />
      <Education educationInformationList={educationInformation} />
      <Experience experienceInformationList={experienceInformation} />
    </div>
  );
}
