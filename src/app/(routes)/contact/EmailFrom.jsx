"use client";

import InputForm from "@/components/elements/InputForm";
import TextArea from "@/components/elements/TextArea";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailForm = () => {
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (payload) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/email", payload);
      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setButtonText(isLoading ? "Your message is being sent" : "Send Message");
  }, [isLoading]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-semibold primary md:text-xl">
        Or send me an email
      </h2>

      <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-8">
        <div className="md:flex md:gap-4">
          <InputForm
            name="name"
            type="text"
            rule={{ required: true }}
            register={register}
            error={errors}
            placeholder="Enter your name"
          />
          <InputForm
            name="email"
            type="email"
            rule={{ required: true }}
            register={register}
            error={errors}
            placeholder="Enter your email"
          />
        </div>

        <InputForm
          name="subject"
          type="text"
          rule={{ required: true }}
          register={register}
          error={errors}
          placeholder="Enter your subject"
        />

        <TextArea
          name="message"
          rule={{ required: true }}
          register={register}
          error={errors}
          placeholder="Enter your message"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 mt-8 text-sm font-semibold rounded-md primary bg-neutral-200 dark:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg"
        >
          {buttonText}
        </button>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme === "dark" ? "dark" : "light"}
        />
      </form>
    </motion.section>
  );
};

export default EmailForm;
