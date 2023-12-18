import React, { useState } from 'react'
import { userExperience } from '../Action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ExpRec() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("user"))

    const initialState = {
        Jobcity: '',
        Expectdesignation: '',
        Experience:''
    }
    const [basicExperience, setBasicExperience] = useState(initialState)
    const handleExperience = (e) => {
        setBasicExperience({...basicExperience,[e.target.name]:e.target.value})
    }
    const handleExperienceClick = () => {
        dispatch(userExperience({ basicExperienceData: basicExperience }, user.id))
        navigate('/CompleteProfile')
    setCurrentStep((prev) => prev + 1);
        // console.log(basicExperience,'test');
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
            Step 3: Experience
          </h1>
          <p className="font-normal text-[24px] leading-[32.74px] text-white w-[679px] text-center ml-[379px]">
            Let’s get you noticed!Work ecperience will increase your chances of
            landing that next job
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
          <div className="grid grid-cols-2 gap-y-5 mt-20">
            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Job City*
              </label>
              <input
                onChange={handleExperience}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Jobcity"
                placeholder=""
              />
            </div>

            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Expected Designation*
              </label>
              <input
                onChange={handleExperience}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Expectdesignation"
                placeholder=""
              />
            </div>

            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Experience*
              </label>
              <input
                onChange={handleExperience}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Experience"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex gap-48">
            <div>
              <button className="w-[280px] h-[42px] ml-[155px] mt-[268px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={handleExperienceClick}
                className="gradient w-[280px] h-[42px] ml-[60px] mt-[268px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default ExpRec
