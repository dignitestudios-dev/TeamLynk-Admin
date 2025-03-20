import React, { useState } from "react";
import { AuthMockup, VerifyEmailMockup } from "../assets/export";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "../axios";
import { SuccessToast, ErrorToast } from "../components/Globals/Toaster";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/forget-password", values);

      if (response?.data) {
        SuccessToast(response.data.message || "OTP sent successfully!");
        navigate("/verify-otp", { state: { email: values.email } });
      }
    } catch (error) {
      setIsLoading(false);
      setSubmitting(false);
      ErrorToast(error.response?.data?.error || "Something went wrong");
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="mb-10">
                    <h3 className="text-3xl font-extrabold">Verify Email</h3>
                    <p className="text-sm mt-4">
                      We'll send an OTP to the provided email address.
                    </p>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Email</label>
                    <div className="relative">
                      <Field
                        name="email"
                        type="email"
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                        placeholder="Enter email"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4 top-1/2 -translate-y-1/2"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="6"
                          data-original="#000000"
                        ></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="!mt-4">
                    <button
                      type="submit"
                      disabled={isLoading || isSubmitting}
                      className={`w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-[#028EE6] hover:bg-blue-600 focus:outline-none ${
                        isLoading ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? "Sending OTP..." : "Send OTP"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="lg:h-[550px] md:h-[400px] max-md:mt-10">
            <img
              src={VerifyEmailMockup}
              className="w-full h-full object-cover"
              alt="Authentication Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
