import React from "react";

const ResumeViewer = ({ openResume }) => {
  function dowloadCv() {
    let link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    link.click();
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-dark-400 z-[1500] flex flex-row items-center justify-center">
      <div
        id="box"
        className="w-[100%] h-[99%] mx-auto bg-dark-100 overflow-hidden rounded-md md:w-[70%]"
      >
        <div
          id="head"
          className="w-full h-auto p-3 bg-dark-200 flex items-start justify-start"
        >
          <h2>My Resume / CV</h2>
          <button
            className="px-3 py-1 flex flex-row items-center justify-center bg-green-300 ml-4 text-[12px] text-dark-300 font-bold rounded-[5px] scale-[.90] transition-all hover:scale-[.95]  "
            onClick={dowloadCv}
          >
            Download
          </button>
          <button
            className="px-3 py-1 flex flex-row items-center justify-center bg-red-500 ml-4 text-[12px] text-dark-300 font-bold rounded-[5px] scale-[.90] transition-all hover:scale-[.95] "
            onClick={openResume}
          >
            Close
          </button>
        </div>
        <iframe
          src={"/CV/resume.pdf"}
          frameborder="0"
          className="w-full h-full overflow-scroll bg-white-200 mt-0"
        ></iframe>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ResumeViewer;
