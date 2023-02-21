import React from "react";

function FooterLeft() {
  return (
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold mb-3">Stay in touch</h3>
      <div className="relative max-w-[330px]">
        <input
          type="email"
          placeholder="Email address"
          className="pl-3 py-2 bg-[#222222] border-[#222222] focus:outline-none focus:border-[#222222] w-full"
        />
        <span className="bg-[#222222] p-[8px] absolute right-0 rounded-rt rounded-tb cursor-pointer">
          Signup
        </span>
      </div>
      <p className="max-w-md mt-3 text-sm">
        By submitting this form, you confirm that you agree to the storing and
        processing of your personal data as described in our Privacy Notice.
      </p>
    </div>
  );
}

export default FooterLeft;
