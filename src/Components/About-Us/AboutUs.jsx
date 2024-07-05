const AboutUs = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="px-4 py-16  md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-medium leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              About 360d Soul Ltd
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              360D SOUL Ltd. is dedicated to igniting growth and innovation in
              businesses worldwide.
            </p>
          </div>
          <div className="grid  gap-8 lg:grid-cols-2 ">
            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-normal text-xl">Our Vision</h6>
                  <p className=" text-gray-900">
                    Our vision at 360D Soul Ltd. is to be the premier HRIS & OD
                    (Organizational Development) platform in Bangladesh, setting
                    the standard for excellence in our industry worldwide. We
                    aspire to empower organizations with cutting-edge solutions
                    that optimize their human resources and foster
                    organizational development, driving success and innovation
                    in the global marketplace
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-normal text-xl">Our Mission</h6>
                  <p className=" text-gray-900">
                    At 360D Soul Ltd., our mission is to provide user-friendly,
                    quality resourcing solutions that are trusted, dynamic, and
                    rooted in local expertise, while simultaneously fostering a
                    global footprint. We are committed to long-term
                    sustainability, ensuring that our innovative platforms and
                    services empower businesses to thrive in today's
                    ever-evolving landscape
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-normal text-xl">Our Values</h6>
                  <p className=" text-gray-900">
                    At 360D Soul Ltd., we are dedicated to being the solution
                    for all types of businesses, offering cost-effective
                    services that help both established enterprises and budding
                    startups alike. Our commitment to ethical and social
                    business practices ensures that our solutions not only drive
                    profitability but also contribute positively to society,
                    empowering potential companies to grow sustainably while
                    making a meaningful impact on the world
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
