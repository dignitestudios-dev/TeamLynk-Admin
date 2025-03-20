import React, { useState } from "react";
import { AuthMockup, VerifyOtpMockup } from "../assets/export";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "../axios";
import { SuccessToast, ErrorToast } from "../components/Globals/Toaster";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  // Get email from navigation state
  const email = location.state?.email;

  // Redirect to verify-email if no email is present
  if (!email) {
    navigate("/verify-email");
    return null;
  }

  const validationSchema = Yup.object({
    otp: Yup.string()
      .matches(/^[0-9]+$/, "OTP must contain only numbers")
      .min(6, "OTP must be exactly 6 digits")
      .max(6, "OTP must be exactly 6 digits")
      .required("OTP is required"),
  });

  const handleResendOtp = async (e) => {
    e.preventDefault();
    try {
      setIsResending(true);
      const response = await axios.post("/forget-password", { email });
      SuccessToast(response.data?.message || "OTP sent successfully!");
    } catch (error) {
      ErrorToast(error.response?.data?.error || "Failed to send OTP");
    } finally {
      setIsResending(false);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/verify-otp", {
        email,
        otp: values.otp,
      });

      if (response?.data) {
        SuccessToast(response.data.message || "OTP verified successfully!");
        navigate("/reset-password", { state: { email, otp: values.otp } });
      }
    } catch (error) {
      ErrorToast(error.response?.data?.error || "Something went wrong");
      setIsLoading(false);
      setSubmitting(false);
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
              initialValues={{ otp: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="mb-10">
                    <h3 className="text-3xl font-extrabold">Verify OTP</h3>
                    <p className="text-sm mt-4">
                      Input the 6-digit OTP code sent to {email}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">OTP Code</label>
                    <div className="relative">
                      <Field
                        name="otp"
                        type="text"
                        maxLength="6"
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                        placeholder="Enter 6-digit OTP"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4 top-1/2 -translate-y-1/2"
                        viewBox="0 0 128 128"
                      >
                        <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <ErrorMessage
                      name="otp"
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
                      {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={isResending}
                      className={`text-sm text-[#028EE6] hover:underline ${
                        isResending ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isResending
                        ? "Sending OTP..."
                        : "Didn't receive OTP? Request again"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="lg:h-[550px] md:h-[400px] max-md:mt-10">
            <img
              src={VerifyOtpMockup}
              className="w-full h-full object-cover"
              alt="Authentication Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
