import React, { useState } from 'react'
import { userContact } from '../Action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ConRectangle() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"))
    // console.log(user);

    const initialState = {
        email: '',
        Homecontactno: '',
        Mobileno: '',
        Country: '',
        Addressline1: '',
        City: '',
        Addressline2: '',
        Postalcode:'' 
    }
    const [basicContact, setBasicContact] = useState(initialState)
    const handleContact = (e) => {
        setBasicContact({...basicContact,[e.target.name]:e.target.value})
    }
    const handleContactClick = () => {
        dispatch(userContact({ BasicContactData: basicContact }, user.id))
    setCurrentStep((prev) => prev + 1);
        navigate('/ExperienceInfo')
        // console.log(basicContact,'test my basic contact');
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
            Step 2: Contact Information
          </h1>
          <p className="font-normal text-[24px] leading-[32.74px] text-white w-[679px] text-center ml-[379px]">
            How can we get in touch with you about the job of your dreams
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
                Email*
              </label>
              <input
                onChange={handleContact}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="email"
                name="email"
                placeholder="Enter the email"
              />
            </div>

            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Home Contact No*
              </label>
              <input
                onChange={handleContact}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Homecontactno"
                placeholder="Enter Home Contact"
              />
            </div>

            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Mobile No*
              </label>
              <input
                onChange={handleContact}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Mobileno"
                placeholder=""
              />
            </div>

            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Country*
              </label>
              <input
                onChange={handleContact}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Country"
                placeholder="Country Name"
              />
            </div>
            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Address line 1*
              </label>
              <input
                onChange={handleContact}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Addressline1"
                placeholder="Enter Address line 1"
              />
            </div>
            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                City*
              </label>
              <input
                onChange={handleContact}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="City"
                placeholder="City Name"
              />
            </div>
            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Address line 2*
              </label>
              <input
                onChange={handleContact}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Addressline2"
                placeholder="Address line 2"
              />
            </div>
            <div>
              <label
                className="font-normal text-[16px] leading-[21.82px] ml-[163px]"
                htmlFor=""
              >
                Zip Postal Code*
              </label>
              <input
                onChange={handleContact}
                className="w-[280px] h-[42px] border-2 rounded-[10px] ml-[163px] mt-1 px-[20px]"
                type="text"
                name="Postalcode"
                placeholder="Zip Postal Code"
              />
            </div>
            <div>
              <button className="w-[280px] h-[42px] ml-[155px] mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={handleContactClick}
                className="gradient w-[280px] h-[42px] ml-[163px] mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default ConRectangle
