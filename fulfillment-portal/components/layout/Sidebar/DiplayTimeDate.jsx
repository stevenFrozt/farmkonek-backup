import React, { useState } from "react"
import dayjs from "dayjs"
import FarmingIllustration from "/public/images/farmingIllustration.png"
import Image from "next/image"

const DiplayTimeDate = () => {
  const CURRENT_TIME = dayjs().format("h:mm A")
  const CURRENT_MONTH = dayjs().format("MMM DD")

  const [currentTime, setCurrentTime] = useState(dayjs().format("h:m A"))

  setInterval(() => {
    setCurrentTime(prev => dayjs().format("h:m A"))
  }, 10000)

  return (
    <div className="px-3 py-4 border-t mt-auto">
      <h6 className="font-medium text-[14px]">Fulfillment Center Management</h6>
      <div className="flex gap-3.5 justify-between items-center">
        <div className="w-full">
          <div className="text-sm -mb-1">{CURRENT_MONTH}</div>
          <h6 className="text-xl font-medium">{currentTime}</h6>
        </div>
        <div className="w-full h-full relative">
          <Image src={FarmingIllustration} alt="FarmingIllustration" />
        </div>
      </div>
    </div>
  )
}

export default DiplayTimeDate
