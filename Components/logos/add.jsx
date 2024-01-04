import React from "react"

const AddSVG = ({ className = "", ...props }) => {
  return (
    <div className={className}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.90043 18.8009C14.7957 18.8009 18.8009 14.7957 18.8009 9.90043C18.8009 5.00519 14.7957 1 9.90043 1C5.00519 1 1 5.00519 1 9.90043C1 14.7957 5.00519 18.8009 9.90043 18.8009Z"
          stroke="currentColor"
          strokeWidth="1.11255"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.33984 9.90051H13.4602"
          stroke="currentColor"
          strokeWidth="1.11255"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.90039 13.4609V6.34052"
          stroke="currentColor"
          strokeWidth="1.11255"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default AddSVG
