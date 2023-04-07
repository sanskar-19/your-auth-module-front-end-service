"use client";
import { useForm } from "react-hook-form";
import { VERIFICATION_SCHEMA } from "@/schemas/auth.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthServices } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const VerifyAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(VERIFICATION_SCHEMA),
  });

  console.log(errors);

  const router = useRouter();
  // Handling form submission
  const handleAccountVerification = async (data) => {
    try {
      let response = await AuthServices.verify_account(data);
      toast.success(response.data.message);
      router.push("/");
    } catch (e) {
      toast.error(e.response.data.detail);
    }
    // console.log(response);
  };
  return (
    <section className="flex flex-col h-screen w-screen bg-prussian_blue justify-center items-center">
      <form
        onSubmit={handleSubmit(handleAccountVerification)}
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
              type="email"
              className={`login-register-field ${
                errors?.email ? "border-crayola_red" : "border-white"
              }`}
              placeholder="user@example.com"
            />
          </div>
          <div className="relative flex flex-col gap-y-2">
            <label htmlFor="otp" className="login-register-field-label">
              OTP
            </label>
            <input
              {...register("otp")}
              id="otp"
              className={`login-register-field ${
                errors?.otp ? "border-crayola_red" : "border-white"
              }`}
              placeholder="XXXXXX"
            />
          </div>
          <input
            type="submit"
            value="Verify"
            className="submit-button-primary"
            disabled={Object.keys(errors).length}
          />
        </div>
      </form>
      {/* <Link
        href={"/"}
        className="w-[min(440px,calc(100%-2rem))] mt-2 text-white font-be_vietnam_pro"
      >
        Existing user?{" "}
        <span className="underline cursor-pointer underline-offset-2">
          Sign In
        </span>
      </Link> */}
    </section>
  );
};

export default VerifyAccount;
