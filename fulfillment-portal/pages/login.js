import Image from "next/image"
import React from "react"
import Button from "../components/UI/Button/Button"
import TextField from "../components/UI/TextField"
export default function login() {
  return (
    <div className="bg-login-background h-screen bg-cover lg:bg-center  bg-no-repeat flex ">
      <div className="bg-white/80 w-full lg:w-2/6">
        <div className=" h-40 lg:h-28 relative mx-auto mt-60 lg:mt-20">
          <Image
            src="/images/logo.png"
            alt="logo"
            fill="fill"
            className="absolute object-contain"
          />
        </div>
        {/* Form */}
        <form
          onSubmit={() => {}}
          className="my-4 w-3/4 mx-auto flex flex-col gap-6"
        >
          <TextField placeholder="Enter Username" label="Username" />
          <TextField
            placeholder="Enter Password"
            label="Password"
            type="password"
          />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  )
}
