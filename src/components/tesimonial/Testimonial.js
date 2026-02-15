import React from "react";
import { RiStarFill } from "react-icons/ri";
import Title from "../layouts/Title";
import { testimonialOne, quote } from "../../assets";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="mt-[15rem] flex justify-center items-center text-center">
        <Title title="" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
              <img
                className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                src={testimonialOne}
                alt="testimonialOne"
              />
              <div className="w-full flex flex-col justify-end">
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Noida - India
                </p>
                <h3 className="text-2xl font-bold">Sajal Khandelwal</h3>
                <p className="text-base tracking-wide text-gray-500">
                  Software Engineer
                </p>
              </div>
            </div>
            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
              <img className="w-20 lgl:w-32" src={quote} alt="quote" />
              <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                  <div>
                    <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      Xcelore pvt ltd.
                    </h3>
                    <p className="text-base text-gray-400 mt-3">
                      April 2024 - present
                    </p>
                  </div>
                  <div className="text-yellow-500 flex gap-1">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </div>
                </div>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  Sajal Khandelwal is a Full Stack Developer with 1.4 years of
                  experience, specializing in the MERN stack and Next.js. He
                  has built scalable and performant web applications, designed
                  and implemented RESTful APIs, and worked extensively with
                  MongoDB and MySQL databases. Sajal has contributed to
                  industry-grade systems handling millions of live data points
                  in real time, ensuring seamless performance and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
