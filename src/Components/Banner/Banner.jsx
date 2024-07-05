import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Banner.css";

const Banner = () => {
  return (
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
      {/* Add your actual content here */}
      <div className="banner">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <img src="https://media.licdn.com/dms/image/C5612AQGiYSACmS7pxA/article-cover_image-shrink_600_2000/0/1520114610645?e=2147483647&v=beta&t=aO-Ma5CQPFDif5PH4arynKgjmqXb9Xh89pf4hK3OwEc"></img>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
              <div className="">
                <p className="mb-2 text-4xl text-blue-400 font-bold tracking-wide uppercase">
                  360d Soul Ltd
                </p>
                <h5 className="max-w-md mb-6 text-xl lg:text-xl font-medium leading-none sm:text-4xl uppercase">
                  a Soul for Organizational Solution & IT Platform
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.Disrupt inspire and
                  think tank, social entrepreneur but preliminary thinking think
                  tank compelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <img
                src="https://c1.wallpaperflare.com/preview/397/809/215/organization-organization-chart-building-business.jpg"
                className="max-h-72"
              ></img>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
              <div className="">
                <p className="mb-2 text-4xl text-blue-400 font-bold tracking-wide uppercase">
                  360d Soul Ltd
                </p>
                <h5 className="max-w-md mb-6 text-xl lg:text-xl font-medium leading-none sm:text-4xl uppercase">
                  a Soul for Organizational Solution & IT Platform
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.Disrupt inspire and
                  think tank, social entrepreneur but preliminary thinking think
                  tank compelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <img src="https://media.licdn.com/dms/image/C5612AQGiYSACmS7pxA/article-cover_image-shrink_600_2000/0/1520114610645?e=2147483647&v=beta&t=aO-Ma5CQPFDif5PH4arynKgjmqXb9Xh89pf4hK3OwEc"></img>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
              <div className="">
                <p className="mb-2 text-4xl text-blue-400 font-bold tracking-wide uppercase">
                  360d Soul Ltd
                </p>
                <h5 className="max-w-md mb-6 text-xl lg:text-xl font-medium leading-none sm:text-4xl uppercase">
                  a Soul for Organizational Solution & IT Platform
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.Disrupt inspire and
                  think tank, social entrepreneur but preliminary thinking think
                  tank compelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
            <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
              <img src="https://media.licdn.com/dms/image/C5612AQGiYSACmS7pxA/article-cover_image-shrink_600_2000/0/1520114610645?e=2147483647&v=beta&t=aO-Ma5CQPFDif5PH4arynKgjmqXb9Xh89pf4hK3OwEc"></img>
            </div>
            <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
              <div className="">
                <p className="mb-2 text-4xl text-blue-400 font-bold tracking-wide uppercase">
                  360d Soul Ltd
                </p>
                <h5 className="max-w-md mb-6 text-xl lg:text-xl font-medium leading-none sm:text-4xl uppercase">
                  a Soul for Organizational Solution & IT Platform
                </h5>
                <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.Disrupt inspire and
                  think tank, social entrepreneur but preliminary thinking think
                  tank compelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
