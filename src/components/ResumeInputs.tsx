import DropDownMenu from "./dropDowns/DropDownMenu";
import type {
  PersonalInformation,
  ExperienceInformation,
  EducationInformation,
} from "../App";

interface ResumeInputsProps {
  personalInformation: PersonalInformation;
  experienceList: ExperienceInformation[];
  educationList: EducationInformation[];
  setPersonalInformation: React.Dispatch<
    React.SetStateAction<PersonalInformation>
  >;
  setExperienceList: React.Dispatch<
    React.SetStateAction<ExperienceInformation[]>
  >;
  setEducationList: React.Dispatch<
    React.SetStateAction<EducationInformation[]>
  >;
}

export default function ResumeInputs({
  personalInformation,
  setPersonalInformation,
  experienceList,
  setExperienceList,
  educationList,
  setEducationList,
}: ResumeInputsProps) {
  return (
    <>
      <div className="flex flex-col top-0 mt-5">
        <DropDownMenu
          title="Personal Details"
          information={personalInformation}
          setInformation={
            setPersonalInformation as React.Dispatch<
              React.SetStateAction<
                | PersonalInformation
                | ExperienceInformation[]
                | EducationInformation[]
              >
            >
          }
        />
        <DropDownMenu
          title="Education"
          information={educationList}
          setInformation={
            setEducationList as React.Dispatch<
              React.SetStateAction<
                | PersonalInformation
                | ExperienceInformation[]
                | EducationInformation[]
              >
            >
          }
        />

        <DropDownMenu
          title="Experience"
          information={experienceList}
          setInformation={
            setExperienceList as React.Dispatch<
              React.SetStateAction<
                | PersonalInformation
                | ExperienceInformation[]
                | EducationInformation[]
              >
            >
          }
        />
      </div>
    </>
  );
}
