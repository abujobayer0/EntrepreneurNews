import React from "react";

const FormHeader: React.FC = () => {
  return (
    <div>
      {/* Form Intro */}
      <div className="flex flex-col gap-2 mb-6 px-10 pt-5 pb-4 border-b border-gray-200">
        <p className="text-lg font-medium">আপনার সকল তথ্য দিন</p>
        <p className="text-sm text-indigo-700">
          দয়া করে কোন ভুল বা মিথ্যা তথ্য দিবেন না
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
