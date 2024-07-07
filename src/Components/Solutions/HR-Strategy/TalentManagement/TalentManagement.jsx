const TalentManagement = () => {
  return (
    <div>
      <h2 className="text-3xl font-normal leading-tight text-black sm:text-4xl lg:text-5xl text-center mb-10">
        Talent Management
      </h2>
      <div className="bg-[#ecf2fa]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row border-dotted border-blue-400 border-2 ">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <div>
                <h5 className="max-w-md mb-6 text-3xl font-medium leading-none sm:text-4xl">
                  Talent Development
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8 text-justify">
                  Talent development refers to the strategic process of
                  identifying, nurturing, and enhancing the skills and abilities
                  of employees to meet current and future organizational needs.
                  It includes various activities such as training, mentoring,
                  career planning, and succession planning to ensure continuous
                  growth and readiness for higher responsibilities.
                </p>
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-blue-400"
                >
                  Get started
                </button>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <div>
                <h5 className="max-w-md mb-6 text-3xl font-medium leading-none sm:text-4xl">
                  Talent Optimization
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8 text-justify">
                  Talent optimization is the strategic approach of aligning
                  employee talents and capabilities with organizational goals to
                  maximize performance and productivity. It involves assessing,
                  developing, and deploying the right talent in the right roles,
                  ensuring that individuals strengths are fully leveraged to
                  achieve business success.
                </p>
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-blue-400"
                >
                  Get started
                </button>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentManagement;
