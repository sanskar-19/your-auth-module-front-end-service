"use client";
import { useForm } from "react-hook-form";
import { REGISTER_SCHEMA } from "@/schemas/auth.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(REGISTER_SCHEMA),
  });

  console.log(errors);
  // Handling form submission
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <section className="flex flex-col h-screen w-screen bg-prussian_blue justify-center items-center">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-[min(440px,calc(100%-2rem))] border-l-2 border-white box-border overflow-hidden"
      >
        <div className="form-wrapper slide-out relative flex flex-col gap-y-6 bg-white bg-opacity-10 p-10 bg-clip-border">
          <div className="relative flex flex-col gap-y-2">
            <label
              htmlFor="register-first-name"
              className="login-register-field-label"
            >
              Your First Name
            </label>
            <input
              {...register("first_name")}
              id="register-first-name"
              className={`login-register-field ${
                errors?.first_name ? "border-crayola_red" : "border-white"
              }`}
              placeholder="John"
            />
          </div>
          <div className="relative flex flex-col gap-y-2">
            <label
              htmlFor="register-last-name"
              className="login-register-field-label"
            >
              Your Last Name
            </label>
            <input
              {...register("last_name")}
              id="register-last-name"
              className={`login-register-field ${
                errors?.last_name ? "border-crayola_red" : "border-white"
              }`}
              placeholder="Doe"
            />
          </div>
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
            value="Register"
            className="submit-button-primary"
            disabled={Object.keys(errors).length}
          />
        </div>
      </form>
      <Link
        href={"/"}
        className="w-[min(440px,calc(100%-2rem))] mt-2 text-white font-be_vietnam_pro"
      >
        Existing user?{" "}
        <span className="underline cursor-pointer underline-offset-2">
          Sign In
        </span>
      </Link>
    </section>
  );
};

export default Register;
