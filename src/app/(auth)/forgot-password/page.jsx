import React from "react";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="p-5 sm:p-0 bg-white h-screen w-screen fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center">
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full space-y-8 lg:space-x-8 flex">
          {/* Left side - Illustration */}
          <div className="w-1/2 hidden lg:flex justify-center items-center">
            <Image
              src="https://epos.enke.in/images/forgot-password.png"
              alt="Login illustration"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Right side - Login Form */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="sm:mx-auto sm:max-w-md sm:w-full">
              <div className="flex justify-center">
                <div className="w-20 h-20 relative">
                  <Image
                    src="https://epos.enke.in/modules/shop/img/logo.png"
                    alt="Epos Logo"
                    layout="fill"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Forgot Password
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                We will send an sms to the registered mobile number to regain
                your password
              </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Number *
                    </label>
                    <div className="mt-1">
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Enter Your Mobile Number"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        {/* Already have an account ? */}
                        <Link
                          href="/signin"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Sign in
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
