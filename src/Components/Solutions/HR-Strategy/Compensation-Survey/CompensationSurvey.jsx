const CompensationSurvey = () => {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-normal leading-tight text-black sm:text-4xl lg:text-5xl">
              Compensation Survey helps you to Survey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700 text-justify">
              A compensation survey is a tool used by organizations to gather
              and analyze data on salaries, benefits, and other compensation
              components across similar industries or job roles. This
              information helps employers benchmark their pay practices to
              ensure competitiveness, fairness, and alignment with market
              standards.
            </p>

            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-4 mt-10 text-base font-semibold bg-white rounded-md"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1 text-fuchsia-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                Explore Survey{" "}
              </span>
            </a>
          </div>

          <img
            className="w-full max-w-3xl mx-auto mt-8 rounded-lg shadow-xl sm:mt-20"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/features/6/dashboard-screenshot.png"
            alt=""
          />

          <div className="flex flex-col items-start justify-center max-w-lg px-10 mx-auto mt-8 space-y-8 lg:max-w-xl sm:px-0 sm:space-y-0 sm:flex-row sm:mt-16 sm:space-x-6 lg:space-x-12 sm:items-center">
            <div className="flex items-center flex-1">
              <svg
                className="flex-shrink-0 text-black/50 w-14 h-14"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <p className="ml-4 text-lg font-semibold leading-snug text-black">
                Create powerful websites fast
              </p>
            </div>

            <div className="flex items-center flex-1">
              <svg
                className="flex-shrink-0 text-black/50 w-14 h-14"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p className="ml-4 text-lg font-semibold leading-snug text-black">
                Easy to customize, ready to launch
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompensationSurvey;
