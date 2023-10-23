import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Portfolio is a start-up freelance job marketplace that aims to connect skilled
          African freelancers with clients from all over the world. Our platform offers a
          secure and user-friendly environment for both freelancers and clients, providing
          access to quality services and job opportunities. Our business model is based on
          taking a commission from each successful transaction between clients and freelancers. 
          Our goal is to become the go-to freelance job marketplace in Africa and expand our
          services to other regions.
          The freelance job marketplace in Africa is rapidly growing, with a significant demand
          for quality services from clients worldwide. However, many skilled African freelancers
          often lack access to job opportunities and are unable to showcase their skills to potential
          clients. Our platform aims to bridge this gap by offering a secure and reliable environment
          for freelancers to showcase their skills and connect with potential clients.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>
    </div>
  );
};

export default About;
