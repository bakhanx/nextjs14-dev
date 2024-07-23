"use client";

import { usePersonStore } from "@/app/(state)/name";
import React, { ChangeEvent } from "react";

const Admin = () => {
  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);
  const updateLastName = usePersonStore((state) => state.updateLastName);
  return (
    <div>
      <div className="">admin Page</div>
      <div className="flex flex-col">
        <label htmlFor="">
          First Name
          <input
            type="text"
            onBlur={(e) => updateFirstName(e.currentTarget.value)}
            className="border-2"
          />
        </label>
        <label htmlFor="">
          Last Name
          <input
            type="text"
            onBlur={(e) => updateLastName(e.currentTarget.value)}
            className="border-2"
          />
        </label>
        <div className="mt-4">
          <div>First Name : {firstName}</div>
          <div>Last Name : {lastName}</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
