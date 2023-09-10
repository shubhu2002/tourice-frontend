import { Link, NavLink, useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";
import { ImageData } from "../data/imgData";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../hooks/config";

const { goa } = ImageData;
const Login = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: { "content-type": "application/json"},
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login-register");
    } catch (error) {
      alert(error.message);
    }
  };
  const [show, setShow] = useState(true);
  const handlePage = () => {
    setShow(!show);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full h-screen grid place-items-center">
      <section className="w-5/6 md:w-4/5 flex flex-col md:flex-row bg-secondaryBG  rounded-lg relative">
        <NavLink to="/">
          <XCircle
            size={32}
            strokeWidth={1}
            className="absolute right-2 top-2 cursor-pointer z-50 text-lime-50 md:text-black dark:md:text-white"
          />
        </NavLink>
        <div className="flex-1 relative">
          <div className="absolute z-50 text-lime-50 capitalize top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2  border-white p-2">
            <h1 className="text-sm md:text-2xl pb-2">
              Sign up now to join the club of
            </h1>
            <h1 className="text-lg md:text-3xl font-bold">
              10 Lakh+ happy Travellers
            </h1>
          </div>
          <img
            src={goa}
            alt="carousel"
            className="w-full h-full brightness-[0.3]"
          />
        </div>

        <div className="w-full flex-1 py-7 flex flex-col items-center">
          <h1 className="w-full text-center text-2xl relative font-bold">
            {show ? "LogIn" : "SignUp"}
            <hr className="w-7 h-[5px] absolute bg-black dark:bg-lime-50 dark:bg-textLight top-10 rounded-2xl left-2/4 -translate-x-1/2" />
          </h1>
          <form className="w-5/6" onSubmit={handleSubmit}>
            <div
              className={`${
                show ? "max-h-0  overflow-hidden border-none" : "max-h-36"
              } txt_field my-5 relative border-gray-500 border-b `}
            >
              <input
                type="text"
                name="userName"
                required={!show}
                value={credentials.userName}
                className=" w-full h-12 outline-none border-none bg-inherit"
                onChange={handleChange}
              />
              <span></span>

              <label
                htmlFor="userName"
                className="absolute z-50 top-2/4 -translate-y-2/4 left-0 pointer-events-none duration-500 dark:text-textLight text-textDark "
              >
                User Name
              </label>
            </div>
            <div className="txt_field my-5 relative border-gray-500 border-b">
              <input
                type="email"
                name="email"
                value={credentials.email}
                required
                className="w-full h-12 outline-none py-1 border-none bg-inherit"
                onChange={handleChange}
              />
              <span></span>
              <label
                htmlFor="email"
                className="absolute z-50 top-2/4 -translate-y-2/4 left-0 pointer-events-none duration-500 dark:text-textLight text-textDark "
              >
                E-mail
              </label>
            </div>
            <div className="txt_field my-5 relative border-gray-500 border-b">
              <input
                type="password"
                name="password"
                value={credentials.password}
                required
                className="w-full h-12 outline-none py-1 border-none bg-inherit"
                onChange={handleChange}
              />
              <span></span>

              <label
                htmlFor="pass"
                className="absolute z-50 top-2/4 -translate-y-2/4 left-0 pointer-events-none duration-500 dark:text-textLight text-textDark "
              >
                Password
              </label>
            </div>
            <div className="flex justify-evenly py-2 ">
              <button
                className={`${
                  show ? "bg-slate-300" : "bg-emerald-300"
                } w-5/12 py-2 rounded-2xl  dark:text-black`}
                disabled={show}
              >
                Sign Up
              </button>
              <button
                className={`${
                  show ? "bg-emerald-300" : "bg-slate-300"
                } w-5/12 py-2 rounded-2xl  dark:text-black`}
                disabled={!show}
              >
                Login
              </button>
            </div>
          </form>
          <Link
            to="/login-register"
            className="text-sm text-blue-500 hover:underline mt-4"
            onClick={handlePage}
          >
            {show ? "New User Register !!" : "Already User Login !!"}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
