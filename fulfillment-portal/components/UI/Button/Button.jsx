import React from "react"

const Button = ({
  children,
  type = "button",
  fullWidth,
  size,
  variant,
  color,
  icon = "",
  onClick = () => {},
  className = "",
  disabled = false
}) => {
  return (
    <button
      className={`inline-block font-bold border active:scale-95 transition-transform focus:outline-none ${className} ${
        fullWidth && "w-full"
      }
      ${ButtonSize(size)}
      ${VariantDefault(variant, color)}
      disabled:bg-slate-400 disabled:hover:bg-slate-500 disabled:active:bg-slate-400 disabled:active:scale-100`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={`flex gap-2 items-center justify-center`}>
        {icon !== "" && <span className={`${IconSize(size)}`}>{icon}</span>}
        {children}
      </span>
    </button>
  )
}

export default Button

const ButtonSize = (size = "default") =>
  ({
    default: "text-base px-8 py-2.5 rounded-lg min-h-[2.875rem]",
    xs: "text-xs px-4 py-2 rounded-md min-h-[1.375rem]",
    sm: "text-sm px-6 py-2 rounded-md min-h-[2.375rem]",
    lg: "text-lg px-10 py-2.5 rounded-lg min-h-[3.125rem]"
  }[size])

const VariantDefault = (variant = "default", color = "default") => {
  switch (variant) {
    case "default":
      return `${ColorDefault(color)}`
    case "outlined":
      return `${ColorOutlined(color)}`
    case "light":
      return `${ColorLight(color)}`
    case "subtle":
      return `${ColorSubtle(color)}`
    default:
      break
  }
}

const ColorDefault = (color = "default") => {
  switch (color) {
    case "default":
      return "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white"
    case "blue":
      return "bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-white"
    case "yellow":
      return "bg-tertiary-500 hover:bg-tertiary-600 active:bg-tertiary-700 text-white"
    case "gray":
      return "bg-gray-700 hover:bg-gray-800 active:bg-gray-900 text-white"
    case "red":
      return "bg-persimmon-500 hover:bg-persimmon-600 active:bg-persimmon-700 text-white"
    default:
      break
  }
}
const ColorOutlined = (color = "default") => {
  switch (color) {
    case "default":
      return "border-primary-500 bg-white hover:border-primary-600 hover:bg-primary-600 active:border-primary-700 active:bg-primary-700 text-primary-500 hover:text-white active:text-white"
    case "blue":
      return "border-secondary-500 bg-white hover:border-secondary-600 hover:bg-secondary-600 active:border-secondary-700 active:bg-secondary-700 text-secondary-500 hover:text-white active:text-white"
    case "yellow":
      return "border-tertiary-500 bg-white hover:border-tertiary-600 hover:bg-tertiary-600 active:border-tertiary-700 active:bg-tertiary-700 text-tertiary-500 hover:text-white active:text-white"
    case "gray":
      return "border-gray-500 bg-white hover:border-gray-600 hover:bg-gray-600 active:border-gray-700 active:bg-gray-700 text-gray-500 hover:text-white active:text-white"
    case "red":
      return "border-persimmon-500 bg-white hover:border-persimmon-600 hover:bg-persimmon-600 active:border-persimmon-700 active:bg-persimmon-700 text-persimmon-500 hover:text-white active:text-white"
    default:
      break
  }
}

const ColorLight = (color = "default") => {
  switch (color) {
    case "default":
      return "border-none bg-primary-50 hover:bg-primary-200 active:bg-primary-300 text-primary-600"
    case "blue":
      return "border-none bg-secondary-50 hover:bg-secondary-100 active:bg-secondary-200 text-secondary-600"
    case "yellow":
      return "border-none bg-tertiary-50 hover:bg-tertiary-100 active:bg-tertiary-200 text-tertiary-600"
    case "gray":
      return "border-none bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-[#242424]"
    case "red":
      return "border-none bg-persimmon-200 hover:bg-persimmon-200 active:bg-persimmon-300 text-persimmon-600"
    default:
      break
  }
}

const ColorSubtle = (color = "default") => {
  switch (color) {
    case "default":
      return "border-white bg-white text-primary-400 hover:text-primary-500 active:text-primary-600"
    case "blue":
      return "border-white bg-white text-secondary-400 hover:text-secondary-500 active:text-secondary-600"
    case "yellow":
      return "border-white bg-white text-tertiary-400 hover:text-tertiary-500 active:text-tertiary-600"
    case "red":
      return "border-white bg-white text-persimmon-400 hover:text-persimmon-500 active:text-persimmon-600"
    case "gray":
      return "border-white bg-white text-[#242424] hover:text-[#242424] active:text-[#242424]"
    default:
      break
  }
}

const IconSize = (size = "default") =>
  ({
    default: "[&>*]:w-5 [&>*]:h-5",
    sm: "[&>*]:w-4 [&>*]:h-4"
  }[size])
