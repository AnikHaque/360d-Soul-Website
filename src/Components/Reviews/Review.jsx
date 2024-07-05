import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {
  return (
    <div className="bg-gray-900">
      <div className="mt-32 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=" services"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="">
            <section className="">
              <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white">
                  What our <span className="text-blue-500 ">clients</span> say
                </h1>

                <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  incidunt ex placeat modi magni quia error alias, adipisci rem
                  similique, at omnis eligendi optio eos harum.
                </p>

                <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="p-8 border rounded-lg dark:border-gray-700">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore quibusdam ducimus libero ad tempora doloribus
                      expedita laborum saepe voluptas perferendis delectus
                      assumenda rerum, culpa aperiam dolorum, obcaecati corrupti
                      aspernatur a.”.
                    </p>

                    <div className="flex items-center mt-8 -mx-2">
                      <img
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt=""
                      ></img>

                      <div className="mx-2">
                        <h1 className="font-semibold text-white dark:text-white">
                          Robert
                        </h1>
                        <span className="text-sm text-white">
                          CTO, Robert Consultency
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 border rounded-lg dark:border-gray-700">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore quibusdam ducimus libero ad tempora doloribus
                      expedita laborum saepe voluptas perferendis delectus
                      assumenda rerum, culpa aperiam dolorum, obcaecati corrupti
                      aspernatur a.”.
                    </p>

                    <div className="flex items-center mt-8 -mx-2">
                      <img
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt=""
                      ></img>
                      <div className="mx-2">
                        <h1 className="font-semibold text-white dark:text-white">
                          Jeny Doe
                        </h1>
                        <span className="text-sm text-white">
                          CEO, Jeny Consultency
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 border rounded-lg dark:border-gray-700">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore quibusdam ducimus libero ad tempora doloribus
                      expedita laborum saepe voluptas perferendis delectus
                      assumenda rerum, culpa aperiam dolorum, obcaecati corrupti
                      aspernatur a.”.
                    </p>

                    <div className="flex items-center mt-8 -mx-2">
                      <img
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt=""
                      ></img>

                      <div className="mx-2">
                        <h1 className="font-semibold text-white dark:text-white">
                          Ema Watson{" "}
                        </h1>
                        <span className="text-sm text-white">
                          Marketing Manager at Stech
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
