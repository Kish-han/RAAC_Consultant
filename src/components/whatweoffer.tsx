import React from "react";
import Infocard from "./infocard";

const Whatweoffer = () => {
  return (
    <div id="services" className="px-10 pb-4 pt-12 ">
      <div>
        <div className="flex items-center justify-center py-5 space-x-4">
          <img src="/rocket.png" className="w-9" />
          <h1 className="text-[32px] font-bold text-[#253880]">
            What We Offer
          </h1>
        </div>
        <p className="text-[24px] font-semibold text-center lg:w-[700px] mx-auto">
          RAAC provides extensive financial advisory services, focusing on Legal
          Compliance, and Tax Advisory expertise.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-x-8 items-center justify-center lg:px-28 gap-y-10">
        <Infocard
          num="01"
          icon="/acc.png"
          short="RAAC develops SOPs and manuals to establish an efficient workflow. We undertake complete designing..."
          title="Accounting"
          long="RAAC develops SOPs and manuals to establish an efficient workflow. We undertake complete designing, implementation, and review of accounting systems. Our expert advisory team ensures your organisation abides by the Indian Accounting Standards and the International Financial Reporting Standards (IFRS)"
        />
        <Infocard
          num="02"
          icon="/finance.png"
          short="Our firm is a one-stop solution for all your finance needs. We undertake valuations, design project reports for potential...."
          title="Finance"
          long="Our firm is a one-stop solution for all your finance needs. We undertake valuations, design project reports for potential investors and provide in-depth financial analysis to simplify your decision making process.We will identify suitable financing models through debt or equity instruments to help your business reach its full potential."
        />
        <Infocard
          num="03"
          icon="/outsource.png"
          short="We provide end-to-end solutions for businesses looking at outsourcing their accounting or payroll...."
          title="Outsourcing"
          long="We provide end-to-end solutions for businesses looking at outsourcing their accounting or payroll management. Once appointed, our dedicated team ensures that all the needs of your organisation are fulfilled and you have the liberty to focus on your core operations."
        />
        <Infocard
          num="04"
          icon="/legal.png"
          short="Our team of experts offers a wide range of services that educate and insulate our clients in all areas of legal..."
          title="Legal Compliance"
          long="Our team of experts offers a wide range of services that educate and insulate our clients in all areas of legal compliances. Property assessment and registrations, registrations of legal entities, contracts, agreements, representations and advisory services are are all in a day’s work for us!"
        />
        <Infocard
          num="05"
          icon="/tax.png"
          short="Our firm provides extensive tax advisory and tax planning services. We walk alongside our clients as they navigate...."
          title="Tax Advisory"
          long="Our firm provides extensive tax advisory and tax planning services. We walk alongside our clients as they navigate the extensive web of tax compliances such as GST, IT, TDS, PT etc. with support services ranging across registrations to periodic filings. FinCell has a well-established team of tax experts who take charge of any tax assessments or representation requirements of our clients."
        />
        <Infocard
          num="06"
          icon="/payroll.png"
          short="RAAC offers payroll consulting and outsourcing services to help manage your HR needs better With our experts on board,...."
          title="Payroll Compliance"
          long="RAAC offers payroll consulting and outsourcing services to help manage your HR needs better. With our experts on board, you can rest assured about all the payroll regulatory requirements and compliance needs. We specialise in designing customised solutions to bring in accuracy and efficiency into your company’s payroll processing. Our services are an affordable, hassle-free way to ensure quality payroll management."
        />
      </div>
    </div>
  );
};

export default Whatweoffer;
