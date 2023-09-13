import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const loginHandler = (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;
    let confirmPassword = e.target[3].value;

    let data = {
      name,
      email,
      password
    };

    if (isLogin) {
      //login api with data
    } else {
      // signup api with data
    }
  };
  const forgetPasswordHandler = () => {
    //forget password api
  };
  return (
    <div className="bg-white w-full text-center">
      <div className="w-full my-24 flex justify-center">
        <form
          onSubmit={loginHandler}
          className=" bg-red-400 shadow-xl flex flex-col  rounded-xl w-8/12 lg:w-1/3 h-[26rem] gap-6 py-3 px-4"
        >
          <h2 className="text-green-400 te text-2xl font-black my-1">Login</h2>
          <div className="flex flex-col gap-y-5 h-full justify-between">
            <div className="flex relative items-center ">
              <input
                className="pl-12 rounded shadow-lg w-full  p-2 placeholder:text-gr1 "
                type="text"
                placeholder="User Name"
              />
            </div>
            <div className="flex relative items-center ">
              <input
                className="pl-12 w-full rounded bg-gray-200 shadow-lg   p-2 placeholder:text-gr1 "
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex relative items-center">
              <input
                className="pl-12 w-full rounded bg-gray-200 shadow-lg  p-2 placeholder:text-gr1 "
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex relative items-center">
              {!isLogin && (
                <input
                  className="pl-12 w-full rounded bg-gray-200 shadow-lg  p-2 placeholder:text-gr1 "
                  type="password"
                  placeholder="Confirm Password"
                />
              )}
            </div>

            <div>
              <button
                type="submit"
                className="text-white px-4 py-2 rounded-lg bg-gradient-to-b  bg-green-400 transition duration-200 w-full"
              >
                {isLogin ? "Login" : "Signup"}
              </button>

              {isLogin && (
                <>
                  {" "}
                  <p className="text-md text-left mt-[6px] text-gray-200">
                    Don't have an account ?{" "}
                    <span
                      onClick={() => setIsLogin(false)}
                      className="cursor-pointer hover:underline transition-all text-white"
                    >
                      SignUp Here !
                    </span>
                  </p>
                  <p
                    onClick={forgetPasswordHandler}
                    className="text-md text-left mt-[6px] text-white cursor-pointer hover:underline transition-all"
                  >
                    Forget Password
                  </p>
                </>
              )}

              {!isLogin && (
                <p className="text-md text-left mt-[6px] text-gray-200">
                  Already a user ?{" "}
                  <span
                    onClick={() => setIsLogin(true)}
                    className="cursor-pointer hover:underline transition-all text-white"
                  >
                    Login Here !
                  </span>
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
