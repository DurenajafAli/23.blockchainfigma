import React, { useState } from "react";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { singleData } from "../Action";
import Progress from "./Progress";


function ReviewRec({dynamicValue}) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const data = useSelector((state) => state.SingleUserReducer.singleUserData);

  const value = data && Object.keys(data).length * 5
  console.log(value)

  const [isType, setIsType] = useState("");
  const handleClick = (ele) => {
    setIsType(ele);
  };
  React.useEffect(() => {
    dispatch(singleData(user.id));
  }, []);
  const PopupData = () => {
    return <Popup type={isType} setIsType={setIsType} />;
  };

  
 
  return (
    <>
      <div className="bg-rectangle">
        <h1 className="font-extrabold text-white ml-[456px] text-[42px] leading-[76px] pt-[48px]">
          Review: Complete your Profile{""}
        </h1>
        <p className="font-normal text-[24px] leading-[32.74px] text-white w-[679px] text-center ml-[379px]">
          You are just few steps away from you professional CV. Complete your
          profile
        </p>
      </div>
      <div className="relative py-[62px]  bg-[#FFFFFF] border  mt-[-80px] rounded-[10px] pt-[50px]">
        <div className="flex justify-evenly">
          <div>
            <div className="bg-5 w-[150px] h-[150px] ml-[74px] mt-[50px] rounded-full"></div>
            <h1 className="font-semibold text-[18px] leading-[22.25px] mt-[31px] ml-[92px]">
              Wade Warren
            </h1>
            <p className="font-normal text-[16px] leading-[24px] mt-[14px] ml-[78px]">
              Font-end Developer
            </p>
            <img
              className="mt-[15px] ml-[40px]"
              src="/images/Social Icon.png"
              alt=""
            />
            <hr className="w-[220px] border mt-[25px] ml-[40px]" />
            <div>
              <div className="flex gap-20">
                <div className="flex gap-2 ml-[-16px]">
                  <img
                    className="mt-[14px] ml-[40px]"
                    src="/images/person_FILL0_wght400_GRAD0_opsz48 1.png"
                    alt=""
                  />
                  <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                    Basic Information
                  </h1>
                </div>
                <h2
                  onClick={() => handleClick("Basic")}
                  className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
                >
                  Edit
                </h2>
              </div>
              <div className="flex gap-[116px]">
                <div className="flex gap-2 ml-[-16px]">
                  <img
                    className="mt-[14px] ml-[40px]"
                    src="/images/mail_FILL0_wght400_GRAD0_opsz48 1.png"
                    alt=""
                  />
                  <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                    Credentials
                  </h1>
                </div>
                <h2
                  onClick={() => handleClick("Crendtials")}
                  className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
                >
                  Edit
                </h2>
              </div>
              <div className="flex gap-[116px]">
                <div className="flex gap-2 ml-[-23px]">
                  <img
                    className="mt-[14px] ml-[40px]"
                    src="/images/link_FILL0_wght400_GRAD0_opsz48 1.png"
                    alt=""
                  />
                  <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                    Public Link
                  </h1>
                </div>
                <h2
                  onClick={() => handleClick("PublicLink")}
                  className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
                >
                  Edit
                </h2>
              </div>
              <p className="px-[57px] pt-[3px]">http://website.com/profile/</p>
              <div className="flex gap-3 pt-2">
                <img
                  className="ml-[57px]"
                  src="/images/Group 237877.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px]">
                  Share on Facebook
                </h1>
              </div>
              <div className="flex gap-[116px]">
                <div className="flex gap-4 ml-[-23px]">
                  <img
                    className="mt-[14px] ml-[40px]"
                    src="/images/Vector.png"
                    alt=""
                  />
                  <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                    Education
                  </h1>
                </div>
                <h2
                  onClick={() => handleClick("Education")}
                  className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
                >
                  Add
                </h2>
              </div>
              <div className="flex gap-[127px]">
                <div className="flex gap-4 ml-[-23px]">
                  <img
                    className="mt-[14px] ml-[40px]"
                    src="/images/Vector (1).png"
                    alt=""
                  />
                  <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                    Industry
                  </h1>
                </div>
                <h2
                  onClick={() => handleClick("Industry")}
                  className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
                >
                  Add
                </h2>
              </div>
              <h1 className="font-normal text-[14px] leading-[24px] ml-[57px] mt-[2px]">
                Accounting/Taxation
              </h1>
              <div className="flex gap-[127px]">
                <div className="flex gap-4 ml-[-23px]">
                  <img
                    className="mt-[14px] ml-[40px]"
                    src="/images/trophy 1.png"
                    alt=""
                  />
                  <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                    Awards
                  </h1>
                </div>
                <h2
                  onClick={() => handleClick("Awards")}
                  className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
                >
                  Add
                </h2>
              </div>
            </div>
          </div>

          <div className=" border-2 mt-5">
            <h1 className="font-semibold text-[24px] leading-[29.66px]">
              Already Have a Resume?
            </h1>
            <button className="gradient w-[280px] h-[42px]  mt-[24px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white">
              Upload File
            </button>
            <div className="flex gap-[116px] mt-[51px]">
              <div className="flex gap-4 ml-[-23px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/description_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  Summary
                </h1>
              </div>
              <h2
                onClick={() => handleClick("Summary")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Edit
              </h2>
            </div>
            <div className="">
              {data?.Summary?.map((ele, index) => (
                <div key={index} className="">
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    {ele.Summary}
                  </h2>
                </div>
              ))}
            </div>
            <hr className="w-[22vw] mt-[12px] border" />
            <div className="flex gap-[90px] mt-[5px]">
              <div className="flex gap-4 ml-[-23px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/history_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  Work History
                </h1>
              </div>
              <h2
                onClick={() => handleClick("Workhistory")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Add
              </h2>
            </div>
            <div className="">
              {data?.Workhistory?.map((ele, index) => (
                <div key={index} className="flex flex-col">
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Job Title:</span> {ele.title}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Company:</span> {ele.Company}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Duration:</span> {ele.From} to
                    {ele.Present}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">ReferenceEmail:</span>
                    {ele.ReferenceEmail}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">ReferenceNumber:</span>
                    {ele.ReferenceNumber}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Country:</span>
                    {ele.Country}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">City:</span>
                    {ele.City}
                  </h2>
                </div>
              ))}
            </div>
            <hr className="w-[22vw] mt-[12px] border" />
            <div className="flex gap-[130px] mt-[5px]">
              <div className="flex gap-4 ml-[-23px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/folder_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  Project
                </h1>
              </div>
              <h2
                onClick={() => handleClick("Project")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Add
              </h2>
            </div>
            <div className="">
              {data?.Project?.map((ele, index) => (
                <div key={index} className="flex flex-col">
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">ProjectTitle:</span>{" "}
                    {ele.ProjectTitle}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Company:</span> {ele.Company}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Duration:</span> {ele.From} to
                    {ele.Present}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">ProjectUrl:</span>
                    {ele.ProjectUrl}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Tools:</span>
                    {ele.Tools}
                  </h2>
                </div>
              ))}
            </div>
            <hr className="w-[22vw] mt-[12px] border" />
            <div className="flex gap-[90px] mt-[5px]">
              <div className="flex gap-4 ml-[-23px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/stars_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  Certifications
                </h1>
              </div>
              <h2
                onClick={() => handleClick("Certification")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Add
              </h2>
            </div>
            <div className="">
              {data?.Certification?.map((ele, index) => (
                <div key={index} className="flex flex-col">
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">CertificationName:</span>{" "}
                    {ele.CertificationName}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">License:</span> {ele.License}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Certification Authority:</span>
                    {ele.CertificationAuthority}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">CertificationURL:</span>
                    {ele.CertificationURL}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">CompletionDate:</span>
                    {ele.CompletionDate}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Certificate:</span>
                    {ele.Certificate}
                  </h2>
                </div>
              ))}
            </div>
            <hr className="w-[22vw] mt-[12px] border" />
            <div className="flex gap-[147px] mt-[5px]">
              <div className="flex gap-4 ml-[-23px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/Vector (2).png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  Skills
                </h1>
              </div>
              <h2
                onClick={() => handleClick("Skills")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Add
              </h2>
            </div>
            <div className="mt-5 flex justify-around">
              {data?.Skills?.map((ele, index) => (
                <div
                  key={index}
                  className="mx-2 mb-3 flex items-center gap-3 flex-col"
                >
                  <h2 className="text-[12px] font-bold">{ele.Skill}</h2>
                  <p>{ele.percentage}</p>
                </div>
              ))}
            </div>

            <hr className="w-[22vw] mt-[12px] border" />
            <div className="flex gap-[57px] mt-[5px]">
              <div className="flex gap-4 ml-[-28px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/pin_drop_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  Preferred Job City
                </h1>
              </div>
              <h2
                onClick={() => handleClick("Preferjobcity")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Add
              </h2>
            </div>
            <div className="px-[55px] pt-1 text-[15px]">
              {data?.Preferjobcity?.map((ele, index) => (
                <div key={index} className="">
                  <h2 className="text-[12px] font-normal">
                    <span className="font-bold">City:</span>
                    {ele.Preferjobcity}
                  </h2>
                </div>
              ))}
            </div>
            <hr className="w-[22vw] mt-[12px] border" />
            <div className="flex gap-[57px] mt-[5px]">
              <div className="flex gap-4 ml-[-23px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/sports_soccer_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  Hobbies/Activites
                </h1>
              </div>
              <h2
                onClick={() => handleClick("Hobbies")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Add
              </h2>
            </div>
            <div className="px-[55px] pt-1">
              {data?.Hobbies?.map((ele, index) => (
                <div key={index} className="">
                  <h2 className="text-[12px] font-normal">{ele.Hobbies}</h2>
                </div>
              ))}
            </div>
            <hr className="w-[22vw] mt-[12px] border" />
            <div className="flex gap-[97px] mt-[5px]">
              <div className="flex gap-4 ml-[-23px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/language_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  Languages
                </h1>
              </div>
              <h2
                onClick={() => handleClick("Language")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Add
              </h2>
            </div>
            <hr className="w-[22vw] mt-[12px] border" />
            <div className="flex gap-[92px] mt-[5px]">
              <div className="flex gap-4 ml-[-23px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/hub_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-normal text-[14px] leading-[24px] mt-[14px]">
                  References
                </h1>
              </div>
              <h2
                onClick={() => handleClick("References")}
                className="font-normal text-[14px] leading-[24px] text-[#2961CD] mt-[14px]"
              >
                Add
              </h2>
            </div>
            <div className="">
              {data?.References?.map((ele, index) => (
                <div key={index} className="flex flex-col">
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Name:</span>
                    {ele.Name}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Company:</span> {ele.Company}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Email:</span>
                    {ele.email}
                  </h2>
                  <h2 className="text-[12px] font-normal mt-3 px-[20px]">
                    <span className="font-bold">Contactno:</span>
                    {ele.Contactno}
                  </h2>
                </div>
              ))}
            </div>
            <hr className="w-[22vw] mt-[12px] border" />
          </div>
          <div>
            <div className=" border-2 mt-5 rounded-[10px] py-[15px]">
              <div className="flex gap-2 px-[40px]">
                <img
                  className="mt-[14px] ml-[40px]"
                  src="/images/person_FILL0_wght400_GRAD0_opsz48 1.png"
                  alt=""
                />
                <h1 className="font-semibold text-[14px] leading-[24px] mt-[14px]">
                  Profile Strength
                </h1>
              </div>

              
              <Progress val={value} />
              {/* <img
                className="mt-[24px] ml-[77px]"
                src="/images/Group 237907.png"
                alt=""
              /> */}
              <button className="w-[275px] h-[42px] border border-[#9747FF] rounded-[10px] mt-10 ml-3 text-[#9747FF]">
                Download CV
              </button>
            </div>
            {PopupData(isType, setIsType)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewRec;
