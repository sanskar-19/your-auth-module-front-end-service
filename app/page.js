"use client";
import { useForm } from "react-hook-form";
import { LOGIN_SCHEMA } from "@/schemas/auth.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { AuthServices } from "@/services/auth.service";
import { toast } from "react-toastify";
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  console.log(errors);
  // Handling form submission
  const handleLogin = async (data) => {
    try {
      let response = await AuthServices.login(data);
      toast.success(response.data.message);
    } catch (e) {
      toast.error(e.response.data.detail);
    }
  };
  return (
    <section className="flex flex-col h-screen w-screen bg-prussian_blue justify-center items-center">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-[min(440px,calc(100%-2rem))] border-l-2 border-white box-border overflow-hidden"
      >
        <div className="form-wrapper slide-out relative flex flex-col gap-y-6 bg-white bg-opacity-10 p-10 bg-clip-border">
          <div className="relative flex flex-col gap-y-2">
            <label htmlFor="login-email" className="login-register-field-label">
              Your Email
            </label>
            <input
              {...register("email")}
              id="login-email"
              className={`login-register-field ${
                errors?.email ? "border-crayola_red" : "border-white"
              }`}
              placeholder="user@example.com"
            />
          </div>
          <div className="relative flex flex-col gap-y-2">
            <label
              htmlFor="login-password"
              className="login-register-field-label"
            >
              Your Password
            </label>
            <input
              {...register("password")}
              id="login-password"
              className={`login-register-field ${
                errors?.password ? "border-crayola_red" : "border-white"
              }`}
              placeholder="user@123"
              type="password"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="submit-button-primary"
            disabled={Object.keys(errors).length}
          />
        </div>
      </form>
      <Link
        href={"/register"}
        className="w-[min(440px,calc(100%-2rem))] mt-2 text-white font-be_vietnam_pro"
      >
        New User?{" "}
        <span className="underline cursor-pointer underline-offset-2">
          Click here to register
        </span>
      </Link>
      <Link
        href={"/resend-verification-link"}
        className="w-[min(440px,calc(100%-2rem))] mt-2 text-white font-be_vietnam_pro"
      >
        <span className="underline cursor-pointer underline-offset-2">
          Resend verification link
        </span>
      </Link>
    </section>
  );
};

export default Home;
