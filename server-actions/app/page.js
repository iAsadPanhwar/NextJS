"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()

  return (
    <div className="w-2/3 mx-auto my-4">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" className="text-black mx-4" />
        </div>

        <div>
        <label htmlFor="add">Adress</label>
        <input name="add" id="add" type="text" className="text-black mx-4" />
        </div>
        <div>
          <button className="border border-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
