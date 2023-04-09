import React from "react";

const LinkedinSvg = (props) => {
  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={props.bioPage ? "40px" : "25px"}
        height={props.bioPage ? "40px" : "25px"}
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
        style={{ cursor: "pointer" }}
      >
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={props.color}
          stroke="none"
        >
          <path
            d="M435 5101 c-205 -60 -367 -225 -420 -428 -13 -50 -15 -326 -15 -2111
0 -2280 -5 -2102 67 -2246 47 -93 152 -199 248 -248 142 -73 -36 -68 2245 -68
2278 0 2100 -5 2244 67 96 48 201 153 249 249 72 144 67 -34 67 2244 0 2278 5
2100 -67 2244 -48 96 -153 201 -249 249 -144 72 35 67 -2250 66 -1931 0 -2063
-2 -2119 -18z m4170 -407 c46 -25 65 -45 91 -94 18 -34 19 -100 19 -2040 0
-1940 -1 -2006 -19 -2040 -26 -49 -45 -69 -91 -94 l-40 -21 -2005 0 c-1940 0
-2006 1 -2040 19 -49 26 -69 45 -94 91 l-21 40 0 2005 c0 1940 1 2006 19 2040
35 66 75 96 146 111 19 4 926 6 2015 5 l1980 -1 40 -21z"
          />
          <path
            d="M1133 4266 c-104 -34 -204 -123 -251 -224 -24 -51 -27 -68 -27 -172
0 -110 2 -119 32 -181 40 -80 120 -159 200 -197 53 -24 69 -27 173 -27 110 0
119 2 181 32 80 40 159 120 197 200 24 52 27 69 27 173 0 104 -3 121 -27 173
-37 80 -117 160 -197 199 -58 29 -75 33 -165 35 -65 2 -116 -2 -143 -11z"
          />
          <path
            d="M3190 3176 c-189 -44 -356 -147 -439 -273 l-31 -46 0 146 0 147 -340
0 -340 0 0 -1130 0 -1130 339 0 339 0 5 638 c5 696 6 710 66 838 58 124 156
194 299 214 129 18 228 -8 306 -80 121 -112 135 -225 136 -1092 l0 -518 345 0
346 0 -3 783 c-3 708 -5 791 -22 877 -66 344 -225 534 -512 611 -98 27 -403
36 -494 15z"
          />
          <path d="M900 2020 l0 -1130 355 0 355 0 0 1130 0 1130 -355 0 -355 0 0 -1130z" />
        </g>
      </svg>
    </>
  );
};

export default LinkedinSvg;