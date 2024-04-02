
const Herosection = () => {
    return (
        <div id="" className="h-[93vh] font-po flex justify-center items-center px-16 lg:px-24 relative overflow-hidden">
            <img src="/Rings.png" alt="Rings" className="absolute bottom-5 -right-36 z-0 " />
            <img src="/Rings.png" alt="Rings" className="absolute -top-24 -left-40 z-0 rotate-180" />
            <div className="lg:w-1/2 ">
                {/* Text */}
                <h1 className="text-[38px] text-center lg:text-left lg:text-[40px] text-[#030F3E] font-bold">Bring <span className="text-[#253880]">Amazing Financial Health</span> to Your Business.</h1>
                <p className="text-[#6E7491] lg:text-[17px] text-center lg:text-left mt-4"> Achieve Stability, Growth, and Long-Term Success in Your Finances</p>
                <div className="text-center lg:text-left mt-6 flex items-center  justify-center lg:justify-start">
                    <button className="bg-[#253880] hover:bg-[#030F3E] text-white px-3 md:px-6 py-2 mt-4 rounded-md ">Get in touch</button>
                    <button className="text-[#253880] border border-[#253880] px-3 md:px-6 py-2 mt-4 rounded-md ml-4 hover:bg-[#030F3E] hover:text-white">Know More</button>
                </div>
            </div>
            <div className="w-1/2 hidden lg:block">
                {/* Image */}
                <img src="/heroimage.svg" alt="heroimage" />
            </div>
        </div>
    )
}

export default Herosection