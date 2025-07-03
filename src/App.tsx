import ResumeInputs from "./components/ResumeInputs";
import Resume from "./components/resumeComponents/Resume";

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-24">
        <ResumeInputs />
        <Resume />
      </div>
    </>
  );
}

export default App;
