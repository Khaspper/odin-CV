import DropDownMenu from "./dropDowns/DropDownMenu";

export default function ResumeInputs() {
  return (
    <>
      <div className="flex flex-col">
        <DropDownMenu title="Personal Details" />
        <DropDownMenu title="Education" />
        <DropDownMenu title="Experience" />
      </div>
    </>
  );
}
