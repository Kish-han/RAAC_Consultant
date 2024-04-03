import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { useEffect } from "react";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [written, setWritten] = useState(false);


    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,

        });
    };

    useEffect(() => {
        if (form.name === "" || form.email === "" || form.message === "") {
            setWritten(false);
        } else {
            setWritten(true);
        }

        return () => {
            setWritten(false);
        }
    }, [form.name, form.email, form.message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_azrnhbk',
                'template_rvy9068',
                {
                    from_name: form.name,
                    to_name: "RAAC",
                    from_email: form.email,
                    to_email: "raac.advisors@gmail.com",
                    message: form.message,
                },
                'VDqfhlZTOMGCcWoO2'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div id="contact" className="py-10">
            <div className=" lg:w-[80vw] mx-auto rounded-xl shadow-xl bg-[#F7F9FB] px-10 py-4">
                <div className="flex items-center justify-center py-5 space-x-4">
                    <img src="/rocket.png" className="w-9" />
                    <h1 className="text-[32px] font-bold text-[#253880]">
                        Contact Us
                    </h1>
                </div>
                <p className="text-[24px]  text-center mx-auto">
                    Let us know what you are looking for and
                    we will schedule a free callback!
                </p>
                <div>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-10 flex flex-col gap-5'
                    >
                        <label className='flex flex-col'>
                            <span className='text-black font-medium mb-2'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className='bg-tertiary py-2 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-black font-medium mb-2'>Your email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className='bg-tertiary py-2 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-black font-medium mb-2'>Your Message</span>
                            <textarea
                                rows={5}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Leave us a message...'
                                className='bg-tertiary py-2 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                            />
                        </label>

                        {
                            written ? (
                                <button
                                    type='submit'
                                    className='bg-[#253880] w-[150px] border hover:bg-[#030F3E] text-white px-3 md:px-6 py-2 mt-2 rounded-md'
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                            ) : (
                                <button
                                    className='text-[#253880] border border-[#253880] w-[150px] px-3 md:px-6 py-2 mt-2 rounded-md cursor-not-allowed'
                                    onClick={() => alert("Please fill all the fields")}
                                >
                                    Send
                                </button>
                            )
                        }
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;