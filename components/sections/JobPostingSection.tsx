import React from "react";
import { Button } from "@mui/material";

const JobPostingSection = () => {
  return (
    <section className="w-full bg-[#f3f2ef]">
      <div className="mx-auto flex max-w-[1128px] flex-col items-center px-6 pt-14 pb-16 text-center">
        <h2 className="text-[48px] font-extralight leading-[1.2] text-[#8f5849]">
          Post your job for millions of people
        </h2>
        <div className="mt-4">
          <Button
            className="border-primary-blue text-primary-blue rounded-full"
            variant="outlined"
          >
            Post a job
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobPostingSection;
