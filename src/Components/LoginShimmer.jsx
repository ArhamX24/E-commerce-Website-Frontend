import React from "react";

const LoginShimmer = () => {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center bg-slate-300">
      <div className="flex w-52 flex-col gap-4">
      <div><h2 className="text-red-400">Please Login To Access This Path</h2></div>
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default LoginShimmer;
