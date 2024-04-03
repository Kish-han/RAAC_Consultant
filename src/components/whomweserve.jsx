
const WhomWeServe = () => {
    return (
        <div id="services" className="lg:px-10 pb-4 py-12 bg-[#F8F9FF]">
            <div className="flex flex-col lg:flex-row justify-center items-center w-[88vw] xl:w-[75vw] mx-auto bg-white rounded-md space-x-4">
                <div className="w-full lg:w-1/2 h-full">
                    <img src="/banner.jpg" className="w-[95%] h-[550px] object-cover rounded-xl" />
                </div>
                <div className="w-full lg:w-1/2 py-4 px-5" >
                    {/* text */}
                    <div className=" flex items-center py-5 space-x-4">
                        <img src="/rocket.png" className="w-9" />
                        <h1 className="text-[32px] font-bold text-[#253880]">
                            Why Choose Us
                        </h1>
                    </div>
                    <p className="text-[22px] text-[#253880]">
                        RAAC is built on strong foundations of integrity and accountability.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-x-4 mt-4">
                        <p>
                            Our team is committed to your cause and works towards your organisation’s welfare. We utilise our well-established network in various industries for the benefit of our clients. We are not just your finance or tax advisory but are also invested in your development and growth.
                        </p>
                        <p>
                            RAAC adopts a personalised approach for each of its clients, and our expertise is in designing customised solutions that are best suited to your need. We are amicable and approachable, available round the clock for all your queries and concerns. With us, prompt response and timely delivery is a promise.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-3">
                        <p className="text-[22px] text-[#253880] text-center font-semibold mt-3">Get in touch with our team of experts!</p>
                        <a href="#contact">
                            <button className="bg-[#253880] hover:bg-[#030F3E] text-white px-3 md:px-6 py-2 mt-4 rounded-md ">Get in touch</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhomWeServe