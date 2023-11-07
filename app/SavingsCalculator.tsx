"use client";

import { useState } from "react";

export default function SavingsCalculator() {
  const [value, setValue] = useState("300");
  const [saving, setSaving] = useState(90);

  function handleChange(e: any) {
    setValue(e.target.value);
    // string has to convert to number for calculation
    // i am using e.target.value instead of
    let calculatedSaving = Number(e.target.value) * 0.3;
    // round up calculated
    let roundUp = Math.ceil(calculatedSaving);
    setSaving(roundUp);
  }
  return (
    <div className="p-16 text-center">
      <form className="flex justify-center items-center">
        <label htmlFor="input">If you include our service and make </label>
        <input
          className="w-24 border px-4 py-2 rounded-full mx-2 text-center"
          id="input"
          type="text"
          value={value}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <span> CHF on delivery services, we would save you </span>
        <span className="font-bold ml-2">{saving}</span>
        <span className="font-bold mr-2">CHF</span>
        <span> a month</span>
      </form>
    </div>
  );
}
