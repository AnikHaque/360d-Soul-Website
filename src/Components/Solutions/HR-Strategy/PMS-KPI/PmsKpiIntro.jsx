const PmsKpiIntro = () => {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <div className="pl-12 ">
                <img
                  className="relative max-w-xs"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="">
              <h2 className="text-3xl font-normal leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Our PMIS & KPI
              </h2>
              <p className="text-base leading-relaxed text-gray-900 mt-9 text-justify">
                A performance management system is a structured process used by
                organizations to assess, monitor, and enhance employee
                performance, aligning individual contributions with
                organizational goals. Key Performance Indicators (KPIs) are
                specific, measurable metrics used within this system to evaluate
                the effectiveness and success of employees actions in achieving
                their targets and overall objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PmsKpiIntro;
