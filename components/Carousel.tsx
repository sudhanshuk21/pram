/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

// Images

const data = [
  {
    name: "Drone bootcamp ",
    description: "Studies the drone mechanics and various software involved in controlling a drone.",
    //href:`https://dev-ui.vercel.app/`,
    img: "https://lh4.googleusercontent.com/8GFnBJCJe6oBZppOHCpJnRs3BhHikeIO9nCvStZK59y831Gl9MgP3l7sAlljylLOJZw=w2400",
  },
  {
    name: "Drone Fabrication(self project)",
    description: "Made a drone at home and programmed it using mission planner,using APM 2.8 as its flight controller.Later attached GPS module on it and flew it on different flying modes .",
   // href:`https://dev-ui.vercel.app/`,

    img: "/Group2.jpg",
  },
  {
    name: "Balsa Plane and RC trainer plane",
    description: " Led a group of ten students as they worked on an RC glider project; as part of this project, we also built four trainer planes.",
    //href:`https://a-lab.vercel.app/`,

    img: "https://lh3.googleusercontent.com/bQxAeV-o60FI-6IXtEKxTR22oiYBJM_2D6WXPJ2530JLbwCZDGhWmilTjnhmNtyTLdU=w600",
  },
  //{
   // name: "Expert Dental",
   // href:`https://www.expertdental.co.in/`,
    //description: "Expert Dental in Patna offers a host of treatments and cures for a wide range of dental ailments faced by the patients. Few of the dental procedures they offer range from inducing fillings and repairs in the tooth and many other dental services.",
    //img: "/Group4.jpg",
 // },
];
// const featuredData = [{}]
let count = 0;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    // count = (count + 1) % featuredImages.length;
    count = (count + 1) % data.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    // const productsLength = featuredImages.length;
    const productsLength = data.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  return (
    <section className="p-4 lg:p-8 " id="work">
      <div className="container mx-auto space-y-3">
        <div className="flex flex-row items-center">
          <div className="section-line bg-[#FC4370] w-16 h-1 mr-6" style={{width:'4rem',}}></div>
          <p
            className="section-category text-greyText text-base font-medium"
            style={{opacity: 1, transform:'translate(0px, 0px)',}}
          >
            Work
          </p>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <div className="flex items-center justify-center max-w-[36rem] ">
            <img className=" rounded-xl" src={data[currentIndex].img} alt="" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
            <div className=" flex items-center px-3 my-[4rem] sm:ml-[-2rem]">
              <button
                onClick={handleOnPrevClick}
                aria-label="previous"
                className="mx-3 default-focus bg-[#393D5F] hover:bg-lighterGrey focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </button>
              <span>
                0{count + 1}/0{data.length}
              </span>
              <button
                onClick={handleOnNextClick}
                aria-label="next"
                className="mx-3 default-focus bg-[#393D5F] hover:bg-lighterGrey focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
            <h1 className="text-6xl font-bold">{data[currentIndex].name}</h1>
            <p className="my-6 dark:text-gray-400 text-lg">
              {data[currentIndex].description}
            </p>
             
          </div>
        </div>
      </div>
    </section>
  );
}
