const CompensationSurveyIntro = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            ></a>
            <h5 className="mb-4 text-4xl font-normal leading-none">
              Our Compensation Survey
            </h5>
            <p className="mb-6 text-gray-900">
              A compensation survey is a tool used by organizations to gather
              and analyze data on salaries, benefits, and other compensation
              components across similar industries or job roles. This
              information helps employers benchmark their pay practices to
              ensure competitiveness, fairness, and alignment with market
              standards.
            </p>
            <p className="mb-6 text-gray-900">
              A compensation survey is a tool used by organizations to gather
              and analyze data on salaries, benefits, and other compensation
              components across similar industries or job roles. This
              information helps employers benchmark their pay practices to
              ensure competitiveness, fairness, and alignment with market
              standards.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationSurveyIntro;
