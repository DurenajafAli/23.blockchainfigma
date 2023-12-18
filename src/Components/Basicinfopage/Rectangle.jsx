import React, { useState } from "react";
import { userBasic } from "../Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Rectangle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user, "chk my user");
  const initialState = {
    Firstname: "",
    Lastname: "",
    Date: "",
    Degreelevel: "",
  };
  const [basicProfile, setBasicProfile] = useState(initialState);
  const handleBasicInfo = (e) => {
    setBasicProfile({ ...basicProfile, [e.target.name]: e.target.value });
  };
 const handleBasicClick = () => {
   dispatch(userBasic({ BasicProfileData: basicProfile }, user.id));
   currentStep === steps.length
     ? setComplete(true)
     : setCurrentStep((prev) => prev + 1);
   navigate("/ContactInfo");
 };

  const steps = [
    "Basic Information",
    "Contact Information",
    "Experience",
    "Complete your Profile",
  ];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete,setComplete]=useState(false)

  return (
    <>
      <div className="bg-rectangle">
        <h1 className="font-extrabold text-white ml-[456px] text-[42px] leading-[76px] pt-[48px]">
          Step 1: Basic Information
        </h1>
        <p className="font-normal text-[24px] leading-[32.74px] text-white w-[679px] text-center ml-[379px]">
          Let’s get to know you, please fill out some basic information about
          yourself.
        </p>
      </div>
      <div className="w-[1000px] py-[62px]  bg-[#FFFFFF] border  ml-[172px] mt-[-80px] rounded-[10px] pt-[50px]">
        <div className="flex justify-evenly">
          {steps?.map((step, i) => {
            return (
              <div
                className={`flex flex-col items-center ${
                  currentStep === i + 1 ? "active" : ""
                } ${(i+1<currentStep || complete) && "complete"}`}
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
              First Name*
            </label>
            <input
              onChange={handleBasicInfo}
              className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
              type="text"
              name="Firstname"
              placeholder="Enter First Name"
            />
          </div>

          <div>
            <label
              className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
              htmlFor=""
            >
              Last Name*
            </label>
            <input
              onChange={handleBasicInfo}
              className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
              type="text"
              name="Lastname"
              placeholder="Enter Last Name"
            />
          </div>

          <div>
            <label
              className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
              htmlFor=""
            >
              Date of Birth*
            </label>
            <input
              onChange={handleBasicInfo}
              className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
              type="date"
              name="Date"
              placeholder=""
            />
          </div>

          <div>
            <label
              className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
              htmlFor=""
            >
              Degree Level*
            </label>
            <input
              onChange={handleBasicInfo}
              className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
              type="text"
              name="Degreelevel"
              placeholder="Matriculation/O-Level"
            />
          </div>
        </div>
        <h1 className="font-normal text-[16px] leading-[21.82px] mt-[28px] ml-[163px]">
          Gender
        </h1>
        <div>
          <input
            className="ml-[163px] mt-[25px]"
            type="radio"
            name="fav_language"
          />
          <label className="ml-[5px]" htmlFor="">
            Female
          </label>
          <input
            className="ml-[25px] mt-[20px]"
            type="radio"
            name="fav_language"
          />
          <label className="ml-[5px]" htmlFor="">
            Male
          </label>
        </div>
        <button
          onClick={handleBasicClick}
          className="gradient  w-[323px] h-[42px] ml-[385px] mt-[100px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Rectangle;
