import React from "react"

const ShowSVG = ({ className = "", ...props }) => {
  return (
    <div className={className}>
      <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_381_2179)">
          <path
            d="M0 0H3.17678V3.04442H0V0ZM5.71565 0H8.89243V3.04442H5.71565V0ZM10.9553 0H14.1321V3.04442H10.9553V0ZM0 5.4775H3.17678V8.52192H0V5.4775ZM5.71565 5.4775H8.89243V8.52192H5.71565V5.4775ZM10.9553 5.4775H14.1321V8.52192H10.9553V5.4775ZM0 10.9556H3.17678V14H0V10.9556ZM5.71565 10.9556H8.89243V14H5.71565V10.9556ZM10.9553 10.9556H14.1321V14H10.9553V10.9556Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_381_2179">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default ShowSVG
