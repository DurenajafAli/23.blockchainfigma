import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleData } from "../Action";
import { allUsers } from "../Action";
import { useState } from "react";

function Popup({ type, setIsType }) {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user,'test my user');

  const data = useSelector((state) => state.SingleUserReducer.singleUserData);
  console.log(data, 'test my data');

  React.useEffect(() => {
    dispatch(singleData(user.id));
  }, []);

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
const handleSave = () => {
    if (type === "Skills") {
      const previousSkill = data?.Skills || [];
      dispatch(allUsers(user.id, { [type]: [...previousSkill, formData] }))
    } else if (
      type === "Summary"
    ) {
      const SummaryData = data?.Summary || [];
      dispatch(allUsers(user.id, { [type]: [SummaryData,formData] }));
    } else if (type === "Workhistory") {
      const WorkhistoryData = data?.Workhistory || [];
      dispatch(allUsers(user.id, { [type]: [WorkhistoryData, formData] }));
    } else if (type === "Project") {
      const ProjectData = data?.Project || [];
      dispatch(allUsers(user.id, { [type]: [ProjectData, formData] }));
    } else if (type === "Certification") {
      const CertificationData = data?.Certification || [];
      dispatch(allUsers(user.id, { [type]: [CertificationData, formData] }));
    } else if (type === "Preferjobcity") {
      const PreferjobcityData = data?.Preferjobcity || [];
      dispatch(allUsers(user.id, { [type]: [PreferjobcityData, formData] }));
    } else if (type === "Hobbies") {
      const HobbiesData = data?.Hobbies || [];
      dispatch(allUsers(user.id, { [type]: [...HobbiesData, formData] }));
    } 
     else if (type === "References") {
      const ReferencesData = data?.References || [];
      dispatch(allUsers(user.id, { [type]: [ReferencesData, formData] }));
    }
    
    else {
      dispatch(allUsers(user.id, { [type]: formData }));
    }
  
  };
  // console.log(formData, "test my formData");
  return (
    <>
      {type === "PublicLink" && (
        <div className="relative ml-[-600px]">
          <div className="absolute py-[50px] px-[20px]  bg-[#FFFFFF] border  ml-[172px] mt-[-80px] rounded-[10px] pt-[50px]">
            <div className="flex gap-6 justify-center items-center">
              <img src="/images/Vector (3).png" alt="" />
              <h1>Public Profile Links</h1>
            </div>
            <p className="px-[79px] w-[456px] mt-[45px] font-normal text-[16px] leading-[19.2px] text-center">
              Enhance your career by creating a custom URL for your profile.
            </p>
            <div className="mt-10 px-[30px] flex flex-col">
              <label
                className=" font-normal text-[16px] leading-[19.2px]"
                htmlFor=""
              >
                Username
              </label>
              <input
                className="w-auto h-[42px] border rounded-[8px]"
                type="text"
              />
            </div>
            <h2 className="px-[30px] font-normal text-[#676767] text-[16px]  leading-[19.2px] mt-[10px] w-[331px]">
              <span className="text-[#373737]">Public URL Links:</span>
              {""}
              http://website.com/profile/ http://website.com/profile/
            </h2>
            <div className="flex justify-center">
              <button className="gradient w-[280px] h-[42px]  mt-[42px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      )}

      {type === "Education" && (
        <>
          <div className="relative ml-[-600px]">
            <div className="absolute w-auto px-[60px] py-[30px]  bg-[#FFFFFF] border mt-[-180px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img src="/images/Vector.png" alt="" />
                <h1>Public Profile Links</h1>
              </div>
              <div className="grid grid-cols-2 gap-y-5 mt-20 gap-10">
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px] "
                    htmlFor=""
                  >
                    Degree Title*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="Degreetitle"
                    name="Degreetitle"
                    placeholder="Title"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Degree Level*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                    type="text"
                    name="Degreelevel"
                    placeholder="Enter the degree"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Majors*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Majors"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Year Completion*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Yearcompletion"
                    placeholder="Month/year"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Institute*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Institute"
                    placeholder="Enter Address line 1"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Location*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                    type="text"
                    name="Location"
                    placeholder="Location"
                  />
                </div>
                <div>
                  <h1 className="font-normal text-[16px] leading-[21.82px] mt-[28px]">
                    Resulty Type
                  </h1>
                  <div>
                    <input
                      className=" mt-[25px]"
                      type="radio"
                      name="fav_language"
                    />
                    <label className="ml-[5px]" htmlFor="">
                      CGPA
                    </label>
                    <input
                      className="ml-[25px] mt-[20px]"
                      type="radio"
                      name="fav_language"
                    />
                    <label className="ml-[5px]" htmlFor="">
                      Percentage
                    </label>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    CGPA/Percentage*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="CGPA/Percentage"
                    placeholder=""
                  />
                </div>
                <div>
                  <button className="w-[280px] h-[42px] mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div>
                  <button className="gradient w-[280px] h-[42px]  mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {type === "Industry" && (
        <div className="relative ml-[-600px]">
          <div className="absolute py-[50px] px-[20px]  bg-[#FFFFFF] border  ml-[172px] mt-[-80px] rounded-[10px] pt-[50px]">
            <div className="flex gap-6 justify-center items-center">
              <img src="/images/Vector (1).png" alt="" />
              <h1>Industry Experience</h1>
            </div>
            <div className="mt-10 px-[30px] flex flex-col">
              <label
                className=" font-normal text-[16px] leading-[19.2px]"
                htmlFor=""
              >
                Industry
              </label>
              <input
                className="w-auto h-[42px] mt-3 border rounded-[8px]"
                type="text"
              />
            </div>
            <h2 className="px-[30px] font-normal text-[#676767] text-[16px]    leading-[19.2px] mt-[10px]">
              Accounting/Taxtion
            </h2>
            <div className="flex gap-[35px]">
              <div>
                <button className="w-[280px] h-[42px] mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                  Cancel
                </button>
              </div>
              <div>
                <button className="gradient w-[280px] h-[42px]  mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "Awards" && (
        <>
          <div className="relative ml-[-600px]">
            <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-180px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img src="/images/trophy 1.png" alt="" />
                <h1>Awards</h1>
              </div>
              <div className="grid grid-cols-2 gap-y-5 mt-12 gap-10">
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px] "
                    htmlFor=""
                  >
                    Title*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="title"
                    name="title"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Authority*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                    type="text"
                    name="Authority"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Date*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Date"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Award URL*
                  </label>
                  <input
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Award URL"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <button className="w-[280px] h-[42px] mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div>
                  <button className="gradient w-[280px] h-[42px] mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {type === "Summary" && (
        <>
          <div className="relative ml-[-700px]">
            <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img
                  src="/images/description_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1>Summary</h1>
              </div>
              <div className="w-[834px] h-[455px] border mt-[50px]">
                <div className="w-full  border flex gap-[12px] pt-[16px] py-[7px] px-[25px] bg-[#E9E8F2] ">
                  <img src="/images/Group 237918.png" alt="" />
                </div>
                <input
                  name="Summary"
                  value={formData.Summary}
                  onChange={handleChange}
                  className="border"
                  type="text"
                  placeholder=""
                />
              </div>
              <h1 className="font-normal text-[12px] leading-[16.37px] mt-[10px]">
                *Phone numbers and email addresses are not allowed in this
                field.Any contact information will be omitted.
              </h1>
              <div className="flex gap-5">
                <div>
                  <button className="w-[280px] h-[42px] mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleSave}
                    className="gradient w-[280px] h-[42px] mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === "Workhistory" && (
        <div className="relative ml-[-700px]">
          <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
            <div className="flex gap-6 justify-center items-center">
              <img
                src="/images/history_FILL0_wght400_GRAD0_opsz48 1.png"
                alt=""
              />
              <h1>Work History</h1>
            </div>
            <div className="grid grid-cols-2 gap-y-5 mt-20 gap-10">
              <div className="flex flex-col">
                <label
                  className="font-normal text-[16px] leading-[21.82px] "
                  htmlFor=""
                >
                  Job Title*
                </label>
                <input
                  onChange={handleChange}
                  className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                  type="text"
                  value={formData.title}
                  name="title"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="font-normal text-[16px] leading-[21.82px]"
                  htmlFor=""
                >
                  Company*
                </label>
                <input
                  onChange={handleChange}
                  className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                  type="text"
                  value={formData.Company}
                  name="Company"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="font-normal text-[16px] leading-[21.82px]"
                  htmlFor=""
                >
                  Duration*
                </label>
                <div className="flex gap-[17px]">
                  <input
                    onChange={handleChange}
                    className="w-[153px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    value={formData.From}
                    name="From"
                    placeholder="From"
                  />
                  <input
                    onChange={handleChange}
                    className="w-[153px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    value={formData.Present}
                    name="Present"
                    placeholder="Present"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  className="font-normal text-[16px] leading-[21.82px]"
                  htmlFor=""
                >
                  Reference Email*
                </label>
                <input
                  onChange={handleChange}
                  className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                  type="text"
                  value={formData.ReferenceEmail}
                  name="ReferenceEmail"
                  placeholder="Mail address"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-normal text-[16px] leading-[21.82px]"
                  htmlFor=""
                >
                  Reference Number*
                </label>
                <input
                  onChange={handleChange}
                  className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                  type="text"
                  value={formData.ReferenceNumber}
                  name="ReferenceNumber"
                  placeholder="Cell number"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-normal text-[16px] leading-[21.82px]"
                  htmlFor=""
                >
                  Country*
                </label>
                <input
                  onChange={handleChange}
                  className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                  type="text"
                  value={formData.Country}
                  name="Country"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  className="font-normal text-[16px] leading-[21.82px]"
                  htmlFor=""
                >
                  City*
                </label>
                <input
                  onChange={handleChange}
                  className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                  type="text"
                  value={formData.City}
                  name="City"
                  placeholder=""
                />
              </div>
            </div>
            <div className="w-[834px] h-[455px] border mt-[50px]">
              <div className="w-full  border flex gap-[12px] pt-[16px] py-[7px] px-[25px] bg-[#E9E8F2] ">
                <img src="/images/Group 237918.png" alt="" />
              </div>
            </div>
            <h1 className="font-normal text-[12px] leading-[16.37px] mt-[10px]">
              *Phone numbers and email addresses are not allowed in this
              field.Any contact information will be omitted.
            </h1>
            <div className="flex gap-5 px-[146px]">
              <div>
                <button className="w-[280px] h-[42px] mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                  Cancel
                </button>
              </div>
              <div>
                <button
                  onClick={handleSave}
                  className="gradient w-[280px] h-[42px] mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "Project" && (
        <>
          <div className="relative ml-[-700px]">
            <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img
                  src="/images/folder_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1>Projects</h1>
              </div>
              <div className="grid grid-cols-2 gap-y-5 mt-20 gap-10">
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px] "
                    htmlFor=""
                  >
                    Project Title*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="ProjectTitle"
                    placeholder="Project Title"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Company*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                    type="text"
                    name="Company"
                    placeholder="Name"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Duration*
                  </label>
                  <div className="flex gap-[17px]">
                    <input
                      onChange={handleChange}
                      className="w-[153px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                      type="text"
                      name="From"
                      placeholder="From"
                    />
                    <input
                      onChange={handleChange}
                      className="w-[153px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                      type="text"
                      name="Present"
                      placeholder="Present"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Project Url*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="ProjectUrl"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Client/Customer Name*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Client/Customer Name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Client/Customer URL*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                    type="text"
                    name="Client/CustomerURL"
                    placeholder="Email or Web link"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Tools*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Tools"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="w-[834px] h-[455px] border mt-[50px]">
                <div className="w-full border flex gap-[12px] pt-[16px] py-[7px] px-[25px] bg-[#E9E8F2]">
                  <img src="/images/Group 237918.png" alt="" />
                </div>
              </div>
              <h1 className="font-normal text-[12px] leading-[16.37px] mt-[10px]">
                *Phone numbers and email addresses are not allowed in this
                field. Any contact information will be omitted.
              </h1>
              <div className="flex gap-5 px-[146px]">
                <div>
                  <button className="w-[280px] h-[42px] mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleSave}
                    className="gradient w-[280px] h-[42px] mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === "Certification" && (
        <>
          <div className="relative ml-[-700px]">
            <div className="absolute w-auto  py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img
                  src="/images/stars_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1>Certifications</h1>
              </div>
              <div className="grid grid-cols-2 gap-y-5 mt-20">
                <div className="flex flex-col px-[60px]">
                  <label
                    className="font-normal text-[16px] leading-[21.82px] "
                    htmlFor=""
                  >
                    Certification Name**
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="CertificationName*"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col px-[60px]">
                  <label
                    className="font-normal text-[16px] leading-[21.82px] "
                    htmlFor=""
                  >
                    License Number/Enrollment Number*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="License"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col px-[60px]">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Certification Authority*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Certification Authority"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col px-[60px]">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Certification URL*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="CertificationURL"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col px-[60px]">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Completion Date*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                    type="date"
                    name="CompletionDate"
                    placeholder="Date/Month/Year"
                  />
                </div>
                <div className="flex flex-col px-[60px]">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    This Certificate does not expire*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Certificate"
                    placeholder=""
                  />
                </div>
                <div className="ml-[60px]">
                  <button className="w-[280px] h-[42px]  mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div className="ml-[60px]">
                  <button
                    onClick={handleSave}
                    className="gradient w-[280px] h-[42px]  mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === "Skills" && (
        <>
          <div className="relative ml-[-700px] ">
            <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img src="/images/Vector (2).png" alt="" />
                <h1>Skills</h1>
              </div>
              <div className="flex gap-[60px] mt-[60px]">
                <div>
                  <div className="flex gap-5">
                    <input
                      onChange={handleChange}
                      className="px-[20px] w-44 h-8 border rounded-[10px]"
                      type="text"
                      name="Skill"
                      value={formData.Skills}
                      placeholder="Skill"
                    />
                    <input
                      className="px-[20px] w-44 h-8 border rounded-[10px]"
                      type="text"
                      name="percentage"
                      value={formData.percentage}
                      onChange={handleChange}
                      placeholder="Percentage"
                    />
                  </div>

                  <p className="font-normal text-[12px] leading-[16.37px] mt-2">
                    *Special are not allowed.Add each skill one by one
                  </p>
                </div>
                <div>
                  <h1 className="font-normal text-[14px] leading-[16.8px] text-[#2961CD]">
                    Hide Suggested Skills
                  </h1>
                </div>
              </div>
              <p className="font-normal text-[24px] leading-[24px] pt-[40px]">
                Suggested Skills
              </p>
              <div className="flex justify-between pt-[32px]">
                <ul className="flex flex-col gap-3">
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Coaching
                  </li>
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Counseling
                  </li>
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Passivations
                  </li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Coaching
                  </li>
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Counseling
                  </li>
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Passivations
                  </li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Coaching
                  </li>
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Counseling
                  </li>
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Passivations
                  </li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Coaching
                  </li>
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Counseling
                  </li>
                  <li className="leading-[21.82px] text-[16px] font-normal">
                    Passivations
                  </li>
                </ul>
              </div>
              <p className="font-normal text-[12px] leading-[16.37px] pt-[40px]">
                *Click on ,mark as primary.Come UP Will provide you best jobs
                based on primary skills.
              </p>
              <div className="w-[791px] h-[121px] border mt-1 rounded-[10px] mx-auto p-1">
                <div className="w-[132px] h-[26px] rounded-[17px] border bg-[#E9E8F2] mt-3">
                  <h1 className="font-normal text-[14px] leading-[24px] text-center">
                    Counselling
                  </h1>
                </div>
              </div>
              <div className="flex ">
                <div className="ml-[80px]">
                  <button className="w-[280px] h-[42px]  mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div className="ml-[60px]">
                  <button
                    onClick={handleSave}
                    className="gradient w-[280px] h-[42px]  mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === "Preferjobcity" && (
        <>
          <div className="relative ml-[-700px] ">
            <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img
                  src="/images/pin_drop_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1>Preferred Job City</h1>
              </div>
              <div className="pt-[40px]">
                <label
                  className="font-normal text-[16px] leading-[19.2px]"
                  htmlFor=""
                >
                  Enter your Preferred Job Location
                </label>
                <input
                  onChange={handleChange}
                  className="w-[681px] h-[42px] border px-[16px] rounded-[10px]"
                  type="text"
                  name="Preferjobcity"
                  placeholder="City"
                />
              </div>
              <div className="flex ">
                <div className="ml-[80px]">
                  <button className="w-[280px] h-[42px]  mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div className="ml-[60px]">
                  <button
                    onClick={handleSave}
                    className="gradient w-[280px] h-[42px]  mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === "Hobbies" && (
        <>
          <div className="relative ml-[-700px] ">
            <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img
                  src="/images/sports_soccer_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1>Hobbies/Extra Activities</h1>
              </div>
              <div className="pt-[40px]">
                <label
                  className="font-normal text-[16px] leading-[19.2px]"
                  htmlFor=""
                >
                  Enter your Hobbies or Extra Activities Below
                </label>
                <input
                  onChange={handleChange}
                  className="w-[681px] h-[42px] border px-[16px] rounded-[10px]"
                  type="text"
                  name="Hobbies"
                  placeholder="Type Here..."
                />
              </div>
              <div className="flex ">
                <div className="ml-[80px]">
                  <button className="w-[280px] h-[42px]  mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div className="ml-[60px]">
                  <button
                    onClick={handleSave}
                    className="gradient w-[280px] h-[42px]  mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === "Language" && (
        <>
          <div className="relative ml-[-700px] ">
            <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img
                  src="/images/language_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1>Languages</h1>
              </div>
              <div className="pt-[40px]">
                <label
                  className="font-normal text-[16px] leading-[19.2px]"
                  htmlFor=""
                >
                  Enter your Languages Below
                </label>
                <input
                  onChange={handleChange}
                  className="w-[681px] h-[42px] border px-[16px] rounded-[10px]"
                  type="text"
                  name="Language"
                  value={formData.Language}
                  placeholder="Type Here..."
                />
              </div>
              <div className="flex ">
                <div className="ml-[80px]">
                  <button className="w-[280px] h-[42px]  mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div className="ml-[60px]">
                  <button
                    onClick={handleSave}
                    className="gradient w-[280px] h-[42px]  mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === "References" && (
        <>
          <div className="relative ml-[-700px] ">
            <div className="absolute w-auto px-[60px] py-[30px] bg-[#FFFFFF] border mt-[-280px] rounded-[10px] pt-[50px]">
              <div className="flex gap-6 justify-center items-center">
                <img
                  src="/images/hub_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1>Refrences</h1>
              </div>
              <div className="grid grid-cols-2 gap-y-5 mt-12 gap-10">
                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px] "
                    htmlFor=""
                  >
                    Name*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="Name"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Company*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px] mt-1 px-[20px]"
                    type="text"
                    name="Company"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Email*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="text"
                    name="email"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-normal text-[16px] leading-[21.82px]"
                    htmlFor=""
                  >
                    Contact No*
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-[280px] h-[42px] border-2 rounded-[10px]  mt-1 px-[20px]"
                    type="number"
                    name="Contactno"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <button className="w-[280px] h-[42px] mt-[70px] border-2 rounded-[10px] font-bold text-[14px] leading-[24px] text-black">
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleSave}
                    className="gradient w-[280px] h-[42px] mt-[70px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Popup;
