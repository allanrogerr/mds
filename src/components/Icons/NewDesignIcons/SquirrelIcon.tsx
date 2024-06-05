// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const SquirrelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.9174 0.914946C3.36631 0.729004 3.84744 0.633301 4.33333 0.633301C4.81922 0.633301 5.30035 0.729004 5.74926 0.914946C6.19816 1.10089 6.60605 1.37343 6.94963 1.71701C7.2932 2.06058 7.56574 2.46847 7.75169 2.91737C7.93763 3.36628 8.03333 3.84741 8.03333 4.3333C8.03333 5.05768 7.93799 5.66655 7.77614 6.19751C8.07634 6.10648 8.38513 6.04158 8.69913 6.00422C8.82881 5.35806 9.1465 4.75895 9.6194 4.28604C10.0831 3.82231 10.6682 3.50784 11.3 3.37353V2.66663C11.3 2.28003 11.6134 1.96663 12 1.96663C12.3866 1.96663 12.7 2.28003 12.7 2.66663V5.37353C13.3318 5.50784 13.9169 5.82231 14.3806 6.28604C15.012 6.91741 15.3667 7.77374 15.3667 8.66663V9.99997C15.3667 10.5392 15.1524 11.0564 14.7711 11.4377C14.3898 11.8191 13.8726 12.0333 13.3333 12.0333H12.6667C12.3219 12.0333 11.9912 12.1703 11.7474 12.4141C11.5065 12.655 11.3699 12.9807 11.3667 13.3211C11.3667 13.3252 11.3667 13.3292 11.3667 13.3333C11.3667 13.4856 11.318 13.6266 11.2354 13.7415C11.1662 13.8377 11.0733 13.9156 10.9652 13.9666H11.2914C11.187 14.3991 10.9771 14.8002 10.679 15.1333C10.5415 15.2871 10.3513 15.3658 10.1601 15.3666H12C12.3866 15.3666 12.7 15.0532 12.7 14.6666C12.7 14.28 12.3866 13.9666 12 13.9666H11.2914M10.1541 15.3666C9.98893 15.3659 9.82338 15.3071 9.69061 15.1883C9.40248 14.9306 9.37787 14.488 9.63563 14.1999C9.69981 14.1282 9.7555 14.0499 9.80196 13.9666H10.3681C10.1934 13.8841 10.0583 13.7315 9.99924 13.545C9.97891 13.4808 9.96758 13.4127 9.96672 13.342C9.96674 13.3391 9.96675 13.3362 9.96675 13.3333C9.96675 13.3292 9.96673 13.3252 9.96669 13.3211C9.96759 13.1211 9.99069 12.9234 10.0346 12.7313C10.1373 12.2823 10.3539 11.8643 10.6668 11.5193C10.5161 11.3532 10.3447 11.2057 10.1557 11.0808C9.72319 10.7949 9.21749 10.6396 8.69904 10.6334C8.31246 10.6287 7.99534 10.9384 7.99071 11.3249C7.98609 11.7115 8.29572 12.0286 8.68229 12.0332C8.93192 12.0362 9.1754 12.111 9.38366 12.2487C9.59191 12.3864 9.75612 12.5811 9.85666 12.8096C9.92793 12.9716 9.96507 13.1457 9.96669 13.3211C9.96673 13.3252 9.96675 13.3292 9.96675 13.3333C9.96675 13.3362 9.96674 13.3391 9.96672 13.342C9.96627 13.4071 9.96093 13.4724 9.95062 13.5373C9.92654 13.6887 9.87598 13.834 9.80196 13.9666H5.33333C3.85326 13.9666 2.7 12.8134 2.7 11.3333C2.7 9.52725 3.2879 8.49939 3.90796 7.60805C3.98676 7.49478 4.06993 7.37975 4.15499 7.26211C4.71935 6.48156 5.36666 5.58629 5.36666 4.3333C5.36666 3.9467 5.05326 3.6333 4.66666 3.6333C4.28006 3.6333 3.96666 3.9467 3.96666 4.3333C3.96666 4.58968 3.86482 4.83555 3.68353 5.01684C3.50225 5.19812 3.25637 5.29997 3 5.29997C2.74362 5.29997 2.49775 5.19812 2.31646 5.01684C2.13518 4.83555 2.03333 4.58968 2.03333 4.3333C2.03333 4.03126 2.09282 3.73218 2.20841 3.45313C2.32399 3.17408 2.49341 2.92053 2.70699 2.70696C2.92056 2.49338 3.17411 2.32396 3.45316 2.20838C3.73221 2.09279 4.03129 2.0333 4.33333 2.0333C4.63537 2.0333 4.93445 2.09279 5.2135 2.20838C5.49255 2.32396 5.7461 2.49338 5.95968 2.70696C6.17325 2.92053 6.34267 3.17408 6.45825 3.45313C6.57384 3.73218 6.63333 4.03126 6.63333 4.3333C6.63333 5.15879 6.48455 5.74955 6.27603 6.22306C6.06293 6.70697 5.77651 7.0966 5.4432 7.53407C5.42508 7.55785 5.40687 7.58171 5.38859 7.60566C4.72407 8.47642 3.96666 9.46889 3.96666 11.3333C3.96666 11.7199 4.28006 12.0333 4.66666 12.0333C5.05326 12.0333 5.36666 11.7199 5.36666 11.3333C5.36666 10.2813 5.78458 9.27234 6.52847 8.52844C7.27237 7.78455 8.28131 7.36663 9.33333 7.36663C9.71993 7.36663 10.0333 7.05323 10.0333 6.66663C10.0333 6.14504 10.2405 5.64481 10.6094 5.27599C10.8074 5.07798 11.0433 4.92655 11.3 4.82876V5.99997C11.3 6.38657 11.6134 6.69997 12 6.69997C12.5216 6.69997 13.0218 6.90717 13.3906 7.27599C13.7595 7.64481 13.9667 8.14504 13.9667 8.66663V9.99997C13.9667 10.1679 13.8999 10.329 13.7812 10.4478C13.6624 10.5666 13.5013 10.6333 13.3333 10.6333H12.6667C11.9506 10.6333 11.2638 10.9178 10.7575 11.4241C10.7264 11.4552 10.6962 11.4869 10.6668 11.5193M2.83846 6.69445C2.89206 6.69812 2.94593 6.69997 3 6.69997C3.62768 6.69997 4.22965 6.45062 4.67348 6.00679C5.11732 5.56295 5.36666 4.96098 5.36666 4.3333H3.96666C3.96666 4.63386 3.91254 4.89353 3.81274 5.14604C3.65637 5.5417 3.38787 5.91976 3.03976 6.40991C3.02662 6.42841 3.01336 6.44707 3 6.4659C2.94782 6.53941 2.89394 6.61545 2.83846 6.69445ZM2.83846 6.69445C2.26979 6.65557 1.73212 6.41239 1.32651 6.00679C0.882676 5.56295 0.633331 4.96098 0.633331 4.3333C0.633331 3.84741 0.729035 3.36628 0.914977 2.91737C1.10092 2.46847 1.37346 2.06058 1.71704 1.71701C2.06061 1.37343 2.4685 1.10089 2.9174 0.914946M2.83846 6.69445C2.81223 6.73181 2.78564 6.76983 2.7587 6.80856C2.04543 7.83388 1.3 9.13935 1.3 11.3333C1.3 13.5866 3.08007 15.3666 5.33333 15.3666H10.1541M3.96666 11.3333H5.36666H3.96666ZM11.3 8.66663C11.3 8.28003 11.6134 7.96663 12 7.96663H12.0067C12.3933 7.96663 12.7067 8.28003 12.7067 8.66663C12.7067 9.05323 12.3933 9.36663 12.0067 9.36663H12C11.6134 9.36663 11.3 9.05323 11.3 8.66663Z"
      fill="currentColor"
    />
  </svg>
);
export default SquirrelIcon;