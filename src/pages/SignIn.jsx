import React from "react";

const SignIn = () => {
  return (
    <main className="bg-white min-h-screen flex items-center justify-between px-12 py-16">
      {/* Left: Login Form */}
      <div className="w-full lg:w-[50%] p-8 shadow-xl rounded-md border border-gray-200 bg-white">
        <h2 className="text-3xl font-bold mb-2">Login</h2>
        <p className="text-gray-500 mb-6">
          Doesn’t have an account yet?{" "}
          <a href="/" className="text-primary hover:text-blue-700 pl-3">
            Sign Up
          </a>
        </p>
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-lg font-medium mb-2"
              >
                Password
              </label>
              <p className="text-primary text-sm hover:text-blue-700 cursor-pointer">
                Forget Password?
              </p>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter 8 characters or more"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 font-semibold "
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or login with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center">
        <h1 className="text-4xl text-primary font-bold text-center px-4 mb-7">
          OLTRAPAY
        </h1>
        <img
          src="/vectors/login.svg"
          alt="Login Image"
          className="object-contain w-[70%] h-[70%] mx-auto"
        />
      </div>
    </main>
  );
};

export default SignIn;
