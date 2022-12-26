import React from "react"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="overflow-hidden object-contain relative w-full h-36 lg:h-72  max-h-72 z-1">
      <Image
        src="/images/Banner.png"
        fill="responsive"
        alt="text"
        className="absolute object-contain w-full "
      />

      <div className="absolute left-1/2 w-40 lg:w-80 pt-12 text-[.5rem] lg:text-xl">
        <h2 className="lg:pb-4">
          Hi, <b>John Doe!</b>{" "}
        </h2>
        <p>
          You have 12 new orders, 10 new buyers, 15 orders that requires Price
          Quotation and 20 buyers accepted quotation today.
        </p>
      </div>
    </div>
  )
}
