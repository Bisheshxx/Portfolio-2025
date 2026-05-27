import { Button } from "@/components/Globals/Component/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CircleArrowRight, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import React from "react";
import { ContactFormData, contactSchema } from "../Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { sendEmail } from "../action";
import { div } from "framer-motion/client";
import { is } from "zod/v4/locales";
import Link from "next/link";
import Image from "next/image";
import sent from "../../../../public/sent/sent.gif";
import useAccentChange from "@/Customhooks/useAccentChange";

export default function Form() {
  const { accent, themeColor } = useAccentChange();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await sendEmail(data);
      if (response.error) {
        setError("root", { message: response.message });
      } else {
      }
    } catch (error) {
      setError("root", {
        message: "Server error. Please try again in a moment.",
      });
    }
  });

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center md:min-h-[404px] min-h-[374px]">
        <Image src={sent} alt="Sent" height={150} width={150} />
        <h2 className="text-2xl font-semibold my-2 text-center">Thank You!</h2>
        <span className="text-center text-sm">
          Your message has been sent successfully. I will get back to you soon.
        </span>
      </div>
    );
  }

  return (
    <div className="md:h-min-[404px]">
      <div>
        <h2 className="md:text-5xl font-semibold">Get In Touch</h2>
        <p className="text-[12px] md:text-sm font-medium">
          Let’s connect and make things happen.
        </p>
        <Link
          href="mailto:bishesh.tuladhar1@gmail.com"
          target="_"
          className="text-xs flex gap-2 items-center mt-1 underline"
        >
          <Mail className="h-3 w-3" /> bishesh.tuladhar1@gmail.com
        </Link>
      </div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 w-full md:mt-4 mt-1"
        onSubmit={onSubmit}
      >
        <div className="space-y-2">
          <div className="flex gap-1">
            <Label style={{ color: themeColor[accent] }}>First Name</Label>
            <div className="text-red-500 text-xs">
              {errors.firstName ? (
                <span>*{errors.firstName.message}</span>
              ) : null}
            </div>
          </div>
          <Input
            placeholder="Enter your First Name.."
            className={twMerge(errors.firstName ? "border-red-500" : "")}
            {...register("firstName")}
          />
        </div>
        <div className="space-y-2">
          <div className="flex gap-1">
            <Label style={{ color: themeColor[accent] }}>Last Name</Label>
            <div className="text-red-500 text-xs">
              {errors.lastName ? <span>*{errors.lastName.message}</span> : null}
            </div>
          </div>

          <Input
            placeholder="Enter your Last Name.."
            {...register("lastName")}
            className={twMerge(errors.lastName ? "border-red-500" : "")}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <div className="flex gap-1">
            <Label style={{ color: themeColor[accent] }}>Email</Label>
            <div className="text-red-500 text-xs">
              {errors.email ? <span>*{errors.email.message}</span> : null}
            </div>
          </div>

          <Input
            placeholder="Enter your Email.."
            {...register("email")}
            className={twMerge(errors.email ? "border-red-500" : "")}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <div className="flex gap-1 flex-wrap">
            <Label style={{ color: themeColor[accent] }}>Message</Label>
            <div className="text-red-500 text-xs">
              {errors.message ? <span>*{errors.message.message}</span> : null}
            </div>
          </div>
          <Textarea
            placeholder="Type your message here."
            {...register("message")}
            className={twMerge(errors.message ? "border-red-500" : "")}
          />
        </div>

        <div className="text-red-500 text-sm">
          {errors.root ? errors.root.message : null}
        </div>
        <div className="md:col-span-2">
          <Button type="submit">
            {isSubmitting ? (
              <div className="flex items-center w-40 justify-center">
                <span>Sending....</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 w-40 justify-center">
                <span>Send Message</span> <CircleArrowRight />
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
