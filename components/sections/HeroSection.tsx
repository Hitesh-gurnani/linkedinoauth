`use client`;

import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

const GoogleIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <g>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      ></path>
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      ></path>
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      ></path>
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      ></path>
      <path fill="none" d="M0 0h48v48H0z"></path>
    </g>
  </svg>
);

const MicrosoftIcon = () => (
  <Image
    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/32e53b9a-d05a-41bd-a528-2014e1c7a4c5-linkedin-com/assets/icons/icon_1.png"
    width={24}
    height={24}
    alt="Microsoft logo"
  />
);

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-[1128px] px-4 pt-6 pb-12 md:py-16">
      <div className="flex flex-col-reverse items-center gap-y-10 md:flex-row md:justify-between md:gap-x-6">
        <div className="w-full shrink-0 md:w-auto md:max-w-[440px] lg:max-w-[500px]">
          <h1 className="text-[3.5rem] font-extralight leading-[1.22] text-[#8f5849]">
            Explore jobs and grow your network
          </h1>
          <div className="mt-8 space-y-3 flex flex-col gap-y-2">
            <Button
              variant="contained"
              size="large"
              startIcon={<GoogleIcon />}
              fullWidth
              onClick={() => signIn("google")}
              sx={{
                height: "56px",
                borderRadius: "28px",
                backgroundColor: "#0066cc",
                fontSize: "1.25rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#004182",
                },
              }}
            >
              Continue with Google
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<MicrosoftIcon />}
              fullWidth
              sx={{
                height: "56px",
                borderRadius: "28px",
                borderColor: "rgba(0, 0, 0, 0.9)",
                backgroundColor: "white",
                color: "rgba(0, 0, 0, 0.7)",
                fontSize: "1.25rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  color: "rgba(0, 0, 0, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.9)",
                },
              }}
            >
              Continue with Microsoft
            </Button>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{
                height: "56px",
                borderRadius: "28px",
                borderColor: "rgba(0, 0, 0, 0.9)",
                backgroundColor: "white",
                color: "rgba(0, 0, 0, 0.7)",
                fontSize: "1.25rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  color: "rgba(0, 0, 0, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.9)",
                },
              }}
            >
              Sign in with email
            </Button>
          </div>
          <p className="mt-4 text-center text-xs text-black/60">
            By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
            <Link
              href="#"
              className="font-semibold text-primary-blue hover:underline"
            >
              User Agreement
            </Link>
            ,{" "}
            <Link
              href="#"
              className="font-semibold text-primary-blue hover:underline"
            >
              Privacy Policy
            </Link>
            , and{" "}
            <Link
              href="#"
              className="font-semibold text-primary-blue hover:underline"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-8 text-center">
            <p className="text-lg text-black/90">
              New to LinkedIn?{" "}
              <Link
                href="#"
                className="font-bold text-primary-blue hover:underline"
              >
                Join now
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full shrink md:w-auto">
          <Image
            src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png"
            alt="Illustration of a person working at a desk"
            width={700}
            height={560}
            priority
            className="w-full max-w-[700px] md:w-[50vw] lg:w-[600px] xl:w-[700px]"
          />
        </div>
      </div>
    </section>
  );
}
