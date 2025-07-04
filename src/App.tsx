import Resume from "./components/resumeComponents/Resume";
import { useState } from "react";
import ResumeInputs from "./components/ResumeInputs";

export interface EducationInformation {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface ExperienceInformation {
  id: string;
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface PersonalInformation {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

function App() {
  const [personalInformation, setPersonalInformation] =
    useState<PersonalInformation>({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });

  const [experienceList, setExperienceList] = useState<ExperienceInformation[]>(
    []
  );
  const [educationList, setEducationList] = useState<EducationInformation[]>(
    []
  );
  return (
    <>
      <div className="flex justify-center gap-24">
        <ResumeInputs
          personalInformation={personalInformation}
          setPersonalInformation={setPersonalInformation}
          experienceList={experienceList}
          setExperienceList={setExperienceList}
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <Resume
          personalInformation={personalInformation}
          educationInformation={educationList}
          experienceInformation={experienceList}
        />
      </div>
    </>
  );
}

export default App;
