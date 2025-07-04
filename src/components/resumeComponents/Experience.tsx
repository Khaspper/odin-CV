import type { ExperienceInformation } from "../../App";

interface ExperienceProps {
  experienceInformationList: ExperienceInformation[];
}

export default function Experience({
  experienceInformationList,
}: ExperienceProps) {
  if (experienceInformationList.length === 0) {
    return <div>Nothing Here</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center mt-10">
          <div className="h-10 w-2xl bg-sky-700 flex justify-center items-center text-3xl text-white">
            Education
          </div>
        </div>
        {experienceInformationList.map((item) => {
          return (
            <div className="border-2 flex items-center gap-10">
              <div className="flex flex-col gap-2">
                <div className="flex">
                  <p key={`${item.id}-startDate`}>{item.startDate}</p>
                  <p>-</p>
                  <p key={`${item.id}-endDate`}>{item.endDate}</p>
                </div>
                <p key={`${item.id}-location`}>{item.location}</p>
              </div>
              <div>
                <p key={`${item.id}-companyName`}>{item.companyName}</p>
                <p key={`${item.id}-positionTitle`}>{item.positionTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
