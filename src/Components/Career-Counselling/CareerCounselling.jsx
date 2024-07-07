const CareerCounselling = () => {
  return (
    <div>
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-5xl px-4  sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-md"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                  alt=""
                />

                <img
                  className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-normal leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with Counselling.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 text-justify mt-6">
                Career counseling involves providing guidance and support to
                individuals seeking assistance with career-related decisions,
                planning, and development. It aims to help individuals explore
                career options, identify their strengths and interests, set
                career goals, and develop strategies to achieve them through
                assessments, coaching, and resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerCounselling;
