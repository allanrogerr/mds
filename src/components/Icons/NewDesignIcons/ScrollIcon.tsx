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

const ScrollIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.22885 1.8956C1.61017 1.51427 2.12736 1.30005 2.66663 1.30005H11.3333C11.8726 1.30005 12.3898 1.51427 12.7711 1.8956C13.1524 2.27692 13.3666 2.79411 13.3666 3.33338V10.6334H14.6666C15.0532 10.6334 15.3666 10.9468 15.3666 11.3334V12.6667C15.3666 13.206 15.1524 13.7232 14.7711 14.1045C14.3898 14.4858 13.8726 14.7 13.3333 14.7H5.3333C4.79403 14.7 4.27684 14.4858 3.89552 14.1045C3.51419 13.7232 3.29997 13.206 3.29997 12.6667V6.03338H1.3333C0.946701 6.03338 0.633301 5.71998 0.633301 5.33338V3.33338C0.633301 2.79411 0.847526 2.27692 1.22885 1.8956ZM4.69997 12.6667C4.69997 12.8347 4.76669 12.9958 4.88547 13.1145C5.00424 13.2333 5.16533 13.3 5.3333 13.3C5.50127 13.3 5.66236 13.2333 5.78113 13.1145C5.89991 12.9958 5.96663 12.8347 5.96663 12.6667V11.3334C5.96663 10.9468 6.28003 10.6334 6.66663 10.6334H11.9666V3.33338C11.9666 3.16541 11.8999 3.00432 11.7811 2.88555C11.6624 2.76677 11.5013 2.70005 11.3333 2.70005H4.59882C4.66523 2.90262 4.69997 3.11621 4.69997 3.33338V12.6667ZM2.66663 2.70005C2.8346 2.70005 2.9957 2.76677 3.11447 2.88555C3.23324 3.00432 3.29997 3.16541 3.29997 3.33338V4.63338H2.0333V3.33338C2.0333 3.16541 2.10003 3.00432 2.2188 2.88555C2.33757 2.76677 2.49866 2.70005 2.66663 2.70005ZM7.36663 12.0334V12.6667C7.36663 12.8839 7.33189 13.0975 7.26549 13.3H13.3333C13.5013 13.3 13.6624 13.2333 13.7811 13.1145C13.8999 12.9958 13.9666 12.8347 13.9666 12.6667V12.0334H7.36663Z"
      fill="currentColor"
    />
  </svg>
);
export default ScrollIcon;
