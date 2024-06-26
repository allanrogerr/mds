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

const FoldersIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.89552 2.56222C4.27684 2.1809 4.79403 1.96667 5.3333 1.96667H7.9533C8.28993 1.96673 8.62139 2.05036 8.91772 2.21006C9.21277 2.36907 9.46391 2.59853 9.64883 2.87801L10.1913 3.68168C10.2496 3.77015 10.329 3.84262 10.4225 3.89241C10.516 3.9422 10.6205 3.96775 10.7264 3.96671L10.7333 3.96664L13.3333 3.96667C13.8726 3.96667 14.3898 4.1809 14.7711 4.56222C15.1524 4.94355 15.3666 5.46073 15.3666 6.00001V10C15.3666 10.5393 15.1524 11.0565 14.7711 11.4378C14.3898 11.8191 13.8726 12.0333 13.3333 12.0333H5.3333C4.79403 12.0333 4.27684 11.8191 3.89552 11.4378C3.51419 11.0565 3.29997 10.5393 3.29997 10V4.00001C3.29997 3.46073 3.51419 2.94355 3.89552 2.56222ZM5.3333 3.36667C5.16533 3.36667 5.00424 3.4334 4.88547 3.55217C4.76669 3.67095 4.69997 3.83204 4.69997 4.00001V10C4.69997 10.168 4.76669 10.3291 4.88547 10.4478C5.00424 10.5666 5.16533 10.6333 5.3333 10.6333H13.3333C13.5013 10.6333 13.6624 10.5666 13.7811 10.4478C13.8999 10.3291 13.9666 10.168 13.9666 10V6.00001C13.9666 5.83204 13.8999 5.67095 13.7811 5.55217C13.6624 5.4334 13.5013 5.36667 13.3333 5.36667H10.7364C10.3976 5.36936 10.0635 5.28737 9.76447 5.12811C9.46561 4.96895 9.21124 4.73769 9.02444 4.45534L8.48198 3.6517C8.42431 3.56413 8.34584 3.49223 8.25354 3.44248C8.16128 3.39276 8.05811 3.36671 7.9533 3.36667C7.95326 3.36667 7.95334 3.36667 7.9533 3.36667H5.3333ZM1.3333 4.63334C1.7199 4.63334 2.0333 4.94674 2.0333 5.33334V12.6667C2.0333 12.8346 2.10003 12.9957 2.2188 13.1145C2.33757 13.2333 2.49866 13.3 2.66663 13.3H12C12.3866 13.3 12.7 13.6134 12.7 14C12.7 14.3866 12.3866 14.7 12 14.7H2.66663C2.12736 14.7 1.61017 14.4858 1.22885 14.1045C0.847526 13.7231 0.633301 13.2059 0.633301 12.6667V5.33334C0.633301 4.94674 0.946701 4.63334 1.3333 4.63334Z"
      fill="currentColor"
    />
  </svg>
);
export default FoldersIcon;
