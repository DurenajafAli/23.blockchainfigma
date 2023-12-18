import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function ComRecProfile() {
    const navigate = useNavigate()
    const handleComplete = () => {
        navigate('/ReviewPage')
    }
    const steps = [
      "Basic Information",
      "Contact Information",
      "Experience",
      "Complete your Profile",
    ];
    const [currentStep, setCurrentStep] = useState(1);
    return (
      <>
        <div className="bg-rectangle">
          <h1 className="font-extrabold text-white ml-[456px] text-[42px] leading-[76px] pt-[48px]">
            Step 4: Complete your Profile{" "}
          </h1>
          <p className="font-normal text-[24px] leading-[32.74px] text-white w-[679px] text-center ml-[379px]">
            You are just few steps away from you professional CV. How would you
            like to start?
          </p>
        </div>
        <div className="w-[1000px] py-[62px]  bg-[#FFFFFF] border  ml-[172px] mt-[-80px] rounded-[10px] pt-[50px]">
          <div className="flex justify-evenly">
            {steps?.map((step, i) => {
              return (
                <div
                  className={`flex flex-col items-center ${
                    currentStep === i + 1 ? "active" : ""
                  }`}
                  key={i}
                >
                  <div
                    className={`w-10 h-10 rounded-full border flex justify-center items-center ${
                      currentStep === i + 1 ? "bg-[#494484] text-white" : ""
                    }`}
                  >
                    {i + 1}
                  </div>
                  <h1 className="mt-[30px]">{step}</h1>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-52">
            <div>
              <h1 className="font-normal text-[16px] leading-[21.82px]  mt-[182px]">
                I already have a CV/Resume
              </h1>
              <button className="gradient w-[280px] h-[42px]  mt-[24px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white">
                Upload File
              </button>
            </div>
            <div>
              <h2 className="font-normal text-[16px] leading-[21.82px] mt-[182px]">
                Create profile from scratch
              </h2>
              <button
                onClick={handleComplete}
                className="gradient w-[280px] h-[42px] mt-[24px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
              >
                Continue
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="w-[280px] h-[42px] mt-[90px] border rounded-[10px] font-semibold text-[14px] leading-[24px text-black">
              Previous
            </button>
          </div>
        </div>
      </>
    );
}

export default ComRecProfile
