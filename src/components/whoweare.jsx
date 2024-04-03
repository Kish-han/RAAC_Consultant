
const Whoweare = () => {
    return (
        <div id="about" className="px-10 pb-4 pt-12 bg-[#F8F9FF]">
            <div>
                <div className="flex items-center justify-center py-5 space-x-4">
                    <img src="/rocket.png" className="w-9" />
                    <h1 className="text-[32px] font-bold text-[#253880]">Who We Are</h1>
                </div>
                <p className="text-[24px] font-semibold text-center lg:w-[700px] mx-auto">RAAC is a comprehensive financial advisory services firm specialising in Book keeping, Statutory compliance and Tax advisory</p>
            </div>
            <div className="flex justify-around flex-col items-center lg:flex-row">
                <div className=" mt-20 w-[320px] lg:w-[250px] xl:w-[320px] h-[360px] bg-[#E1E7FE] pt-24 py-16 px-4 rounded-md relative">
                    <div className="absolute -top-16 right-[105px] lg:right-[70px] xl:right-28 w-28">
                        <img src="/location.png" />
                    </div>
                    <h4 className="text-[18px] lg:text-[16px] xl:text-[18px] text-center font-semibold">
                        Based out of Bengaluru, RAAC works with clients in different parts of the country. Whether you are an NPO or commercial business, we are here to work with you!
                    </h4>
                </div>
                <div className=" mt-20 w-[320px] lg:w-[250px] xl:w-[320px] h-[360px] bg-[#E1E7FE] pt-24 py-16 px-4 rounded-md relative">
                    <div className="absolute -top-16 right-[105px] lg:right-[70px] xl:right-28 w-28">
                        <img src="/bulb.png" />
                    </div>
                    <h4 className="text-[18px] lg:text-[16px] xl:text-[18px] text-center font-semibold">
                        We engage with you to design customised solutions. Our team of experts focuses on preemptive advisory services and building financial systems to ensure hassle-free management and scaling-up of your business.
                    </h4>
                </div>
                <div className=" mt-20 w-[320px] lg:w-[250px] xl:w-[320px] h-[360px] bg-[#E1E7FE] pt-24 py-16 px-4 rounded-md relative">
                    <div className="absolute -top-16 right-[105px] lg:right-[70px] xl:right-28 w-28">
                        <img src="/meet.png" />
                    </div>
                    <h4 className="text-[18px] lg:text-[16px] xl:text-[18px] text-center font-semibold">
                        We bring together some of the best minds in the industry to empower you towards your company’s seamless growth. Our diverse team of CAs, CPAs, CSs, and lawyers, come with vast experience in the field of financial compliance.
                    </h4>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-center mt-4">
            <a href="#contact">
                <button className="bg-[#253880] hover:bg-[#030F3E] text-white px-3 md:px-6 py-2 mt-4 rounded-md ">Get in touch</button>
            </a>
            </div>
        </div>
    )
}

export default Whoweare