import React, { useState } from "react";
import { ResetPassword } from "../assets/export";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "../axios";
import { SuccessToast, ErrorToast } from "../components/Globals/Toaster";

const ChangePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Get email and otp from navigation state
  const { email, otp } = location.state || {};

  // Redirect to verify-email if no email or otp is present
  if (!email || !otp) {
    navigate("/verify-email");
    return null;
  }

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/update-password", {
        email: email,
        new_password: values.password,
      });

      SuccessToast(response.data?.message || "Password updated successfully!");
      navigate("/login");
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
          <div className="rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-3xl font-extrabold">Update Password</h3>
                    <p className="text-sm mt-4">Create your new password!</p>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Password</label>
                    <div className="relative">
                      <Field
                        name="password"
                        type="password"
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                        placeholder="Enter new password"
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
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Field
                        name="confirmPassword"
                        type="password"
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                        placeholder="Confirm new password"
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
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={isLoading || isSubmitting}
                      className={`w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-[#028EE6] hover:bg-[#028EE6] focus:outline-none ${
                        isLoading ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? "Updating Password..." : "Update Password"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="lg:h-[550px] md:h-[400px] max-md:mt-10">
            <img
              src={ResetPassword}
              className="w-full h-full object-cover"
              alt="Authentication Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
