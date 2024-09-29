import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/adryrlka", userInfo);
      toast('✅ Message has been sent', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // toastId: 'success1'
        
        
        
        });
    } catch (error) {
      console.log(error);
      toast('❌ Error sending the message', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // toastId: 'success1'
        
        
        
        });
    }
  };
  return (
    <>
    <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                containerId="containerA"
               
            />
            {/* Same as */}
            <ToastContainer />
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <p className="text-center text-gray-500">Get in touch</p>
        <h1 className="text-3xl  mb-4 text-center">Contact me</h1>
        <span className="flex justify-center">Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/adryrlka"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Message"
              />
              {errors.message && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="flex justify-between">

            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-600 duration-300"
              >
              Send
            </button>
            <button target="_blank" className="bg-black text-sm text-white rounded-xl px-3 py-2 hover:bg-slate-600 duration-300">
            <a target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
            adnankundlik99@gmail.com
            </a>
               </button>
            
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
