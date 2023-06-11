"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { detectAlzheimer } from "@/services/ml.service";
import PopupWrapper from "@/components/Popup";
import { useState } from "react";
import DetectionDetails from "./_components/DetectionDetails";
const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors);

    const [open, setOpen] = useState(false)
    const [detectionDetails, setDetectionDetails] = useState(null)
    const [imageURI, setImageURI] = useState(null)

    // Handling form submission
    const handleDetectAlzheimer = async (data) => {
        setImageURI(data?.scan)
        try {
            let response = await detectAlzheimer(data);
            setTimeout(() => {
                setDetectionDetails(response?.data);
                setOpen(true);
            }, 1000)
            toast.success(response.data.message);
        } catch (e) {
            toast.error(e.response.data.detail);
        }
    };
    return (
        <section className="flex flex-col min-h-screen w-full py-8 overflow-hidden bg-prussian_blue justify-center items-center">
            <h2 className="text-white font-be_vietnam_pro text-2xl mb-4">Enter details for the scan</h2>
            <form
                onSubmit={handleSubmit(handleDetectAlzheimer)}
                className="w-[min(440px,calc(100%-2rem))] border-l-2 border-white box-border overflow-hidden"
            >
                <div className="form-wrapper relative flex flex-col gap-y-6 bg-white bg-opacity-10 p-10 bg-clip-border">
                    <div className="relative flex flex-col gap-y-2">
                        <label htmlFor="first-name" className="login-register-field-label">
                            First Name
                        </label>
                        <input
                            {...register("first_name")}
                            id="first-name"
                            className={`login-register-field ${errors?.email ? "border-crayola_red" : "border-white"
                                }`}
                            placeholder="first name"
                        />
                    </div>
                    <div className="relative flex flex-col gap-y-2">
                        <label htmlFor="last-name" className="login-register-field-label">
                            Last Name
                        </label>
                        <input
                            {...register("last_name")}
                            id="last-name"
                            className={`login-register-field ${errors?.email ? "border-crayola_red" : "border-white"
                                }`}
                            placeholder="last name"
                        />
                    </div>
                    <div className="relative flex flex-col gap-y-2">
                        <label
                            htmlFor="age"
                            className="login-register-field-label"
                        >
                            Age
                        </label>
                        <input
                            {...register("age")}
                            id="age"
                            className={`login-register-field ${errors?.password ? "border-crayola_red" : "border-white"
                                }`}
                            placeholder="age"
                            type="number"
                        />
                    </div>
                    <div className="relative flex flex-col gap-y-2">
                        <label
                            htmlFor="contact"
                            className="login-register-field-label"
                        >
                            Contact
                        </label>
                        <input
                            {...register("contact")}
                            id="contact"
                            className={`login-register-field ${errors?.password ? "border-crayola_red" : "border-white"
                                }`}
                            placeholder="contact"
                            type="text"
                        />
                    </div>
                    <div className="relative flex flex-col gap-y-2">
                        <label
                            htmlFor="scan"
                            className="login-register-field-label"
                        >
                            Upload Scan
                        </label>
                        <input
                            {...register("scan")}
                            id="scan"
                            className={`login-register-field ${errors?.password ? "border-crayola_red" : "border-white"
                                }`}
                            placeholder="scan"
                            type="file"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Detect Scan"
                        className="submit-button-primary"
                        disabled={Object.keys(errors).length}
                    />
                </div>
            </form>

            <PopupWrapper open={open} setOpen={setOpen} >
                <DetectionDetails detectionDetails={detectionDetails?.data} imageURI={imageURI && URL.createObjectURL(imageURI[0])} />
            </PopupWrapper>
        </section>
    );
};

export default Home;
