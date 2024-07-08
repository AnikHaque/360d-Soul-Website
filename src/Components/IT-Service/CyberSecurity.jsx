const CyberSecurity = () => {
  return (
    <div>
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
              <h2 className="text-3xl font-normal leading-tight text-black sm:text-4xl lg:text-5xl mb-5">
                Grow business with Cyber Security.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 text-justify">
                Protect your business from evolving cyber threats with our
                cutting-edge cyber security solutions. We provide robust
                security measures to safeguard your data and systems. Our
                comprehensive services include continuous threat monitoring to
                detect and respond to threats in real-time, ensuring your
                systems are always protected.
              </p>
            </div>

            <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                <img
                  className="ml-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                  alt=""
                />

                <img
                  className="absolute -top-4 -left-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                  alt=""
                />

                <div className="absolute -bottom-10 -left-16">
                  <div className="bg-yellow-300">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-black lg:text-5xl">
                        {" "}
                        53%{" "}
                      </span>
                      <span className="block mt-2 text-base leading-tight text-black">
                        {" "}
                        High Conversions
                        <br />
                        Everything{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
