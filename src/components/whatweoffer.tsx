import React from "react";

const Whatweoffer = () => {
  return (
    <div className="px-10 pb-4 lg:h-[94vh] bg-[#F8F9FF]">
      <div>
        <div className="flex items-center justify-center py-5 space-x-4">
          <img src="/rocket.png" className="w-9" />
          <h1 className="text-[32px] font-bold text-[#253880]">Who We Are</h1>
        </div>
        <p className="text-[24px] font-semibold text-center lg:w-[700px] mx-auto">
          RACC is a comprehensive financial advisory services firm specialising
          in Statutory Audits, Internal Audits, Legal Compliance, and Tax
          Advisory.
        </p>
      </div>
    </div>
  );
};

export default Whatweoffer;
