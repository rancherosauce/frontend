import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 400 400"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M278.134 367.2V206.991h26.135V367.2h-26.135z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M211.097 274.028h160.209v26.135H211.097v-26.135zm-178.427 74.3l136.164-136.165 18.48 18.481L51.15 366.808l-18.48-18.48z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M51.205 212.163l136.164 136.165-18.48 18.48L32.724 230.644l18.48-18.481z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;
