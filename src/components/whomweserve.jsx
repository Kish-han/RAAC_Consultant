import Servecard from "./servecard"

const WhomWeServe = () => {
    return (
        <div id="services" className="lg:px-10 pb-4 pt-12 bg-[#F8F9FF]">
            <div>
                <div className="flex items-center justify-center py-5 space-x-4">
                    <img src="/rocket.png" className="w-9" />
                    <h1 className="text-[32px] font-bold text-[#253880]">
                        Whom We Serve
                    </h1>
                </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-8 items-center justify-center lg:px-28 gap-y-10">
                <Servecard
                    icon='nonprofit.png'
                    title="Non Profit Organisations"
                    short='The NPO sector is close to our heart and we offer a wide range of services to help organisations realise their goals and work ....'
                    long='The NPO sector is close to our heart and we offer a wide range of services to help organisations realise their goals and work towards their mission. We specialise in statutory audits, internal audits, and systems audit. We also do independent audits on behalf of donors and funding agencies.' />
                <Servecard
                    icon='business.png'
                    title="Businesses"
                    short='Whether you’re starting a business or running one for ages, good financial and tax advice is always welcome. At RAAC we offer businesses a  ....'
                    long='Whether you’re starting a business or running one for ages, good financial and tax advice is always welcome. At RAAC we offer businesses a wide range of preemptive advisory services. We do audits, assessments and due diligence; we manage all accounting needs and keep the books in order; we ensure regulatory compliance; and offer tax planning and management among several other services.' />
                <Servecard
                    icon='nonprofit.png'
                    title="Individuals"
                    short='If you are an individual working towards your goals but struggling with all the compliance needs of being an entrepreneur, look no further. ...'
                    long='If you are an individual working towards your goals but struggling with all the compliance needs of being an entrepreneur, look no further. We’ll be your companion, coach, and biggest cheerleader in this journey.  Having us on board means you get the best minds in the industry to keep your books and papers in check. You also gain access to our advisory services that help you manage your accounts and plan your taxes the best way you can.' />
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-[88vw] xl:w-[75vw] mx-auto bg-white rounded-md mt-12 space-x-4">
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
                        <button className="bg-[#253880] hover:bg-[#030F3E] text-white px-3 md:px-6 py-2 mt-4 rounded-md ">Get in touch</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhomWeServe