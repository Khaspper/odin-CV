export default function PersonalDetails() {
  return (
    <>
      <section className="flex justify-between items-center shadow-lg hover:cursor-pointer">
        <h2 className="hover:cursor-text">Personal Details</h2>
        <svg
          className="w-6 h-6 text-black justify-self-end"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </section>
    </>
  );
}
