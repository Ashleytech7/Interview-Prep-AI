import React from 'react'

const SpinnerLoader = ({ className = "w-8 h-8" }) => {
  return (
    <div role="status" className="flex items-center justify-center">
      <svg
        className={`animate-spin ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
          className="opacity-25"
        />
        <path
          d="M22 12a10 10 0 0 0-10-10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default SpinnerLoader
