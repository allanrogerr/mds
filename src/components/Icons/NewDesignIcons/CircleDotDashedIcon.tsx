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

const CircleDotDashedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.13272 2.1404C8.38461 1.99456 7.61537 1.99456 6.86726 2.1404C6.4878 2.21437 6.12023 1.96673 6.04626 1.58727C5.97228 1.20781 6.21993 0.840236 6.59939 0.766264C7.52442 0.585938 8.47556 0.585938 9.40059 0.766264C9.78005 0.840236 10.0277 1.20781 9.95372 1.58727C9.87975 1.96673 9.51217 2.21437 9.13272 2.1404ZM4.85466 2.0834C5.07001 2.40446 4.98432 2.83931 4.66326 3.05467C4.02822 3.48062 3.48151 4.02531 3.05321 4.65875C2.83666 4.97901 2.4015 5.06309 2.08123 4.84655C1.76097 4.63 1.67689 4.19484 1.89344 3.87458C2.42281 3.09166 3.09852 2.41845 3.88339 1.892C4.20445 1.67664 4.6393 1.76233 4.85466 2.0834ZM11.1534 2.08124C11.37 1.76098 11.8052 1.6769 12.1254 1.89345C12.9083 2.42281 13.5815 3.09852 14.108 3.8834C14.3233 4.20446 14.2377 4.63931 13.9166 4.85467C13.5955 5.07002 13.1607 4.98433 12.9453 4.66327C12.5194 4.02823 11.9747 3.48152 11.3412 3.05322C11.021 2.83667 10.9369 2.4015 11.1534 2.08124ZM1.58726 6.04626C1.96672 6.12024 2.21436 6.48781 2.14039 6.86727C1.99455 7.61538 1.99455 8.38461 2.14039 9.13273C2.21436 9.51218 1.96672 9.87976 1.58726 9.95373C1.2078 10.0277 0.840228 9.78006 0.766257 9.4006C0.58593 8.47557 0.58593 7.52442 0.766257 6.59939C0.840228 6.21994 1.2078 5.97229 1.58726 6.04626ZM14.4127 6.04626C14.7922 5.97229 15.1598 6.21994 15.2337 6.59939C15.414 7.52442 15.414 8.47557 15.2337 9.4006C15.1598 9.78006 14.7922 10.0277 14.4127 9.95373C14.0333 9.87976 13.7856 9.51218 13.8596 9.13273C14.0054 8.38461 14.0054 7.61538 13.8596 6.86727C13.7856 6.48781 14.0333 6.12024 14.4127 6.04626ZM7.99999 8.03333C8.0184 8.03333 8.03332 8.01841 8.03332 8C8.03332 7.98159 8.0184 7.96666 7.99999 7.96666C7.98158 7.96666 7.96666 7.98159 7.96666 8C7.96666 8.01841 7.98158 8.03333 7.99999 8.03333ZM6.63332 8C6.63332 7.24521 7.2452 6.63333 7.99999 6.63333C8.75478 6.63333 9.36666 7.24521 9.36666 8C9.36666 8.75479 8.75478 9.36666 7.99999 9.36666C7.2452 9.36666 6.63332 8.75479 6.63332 8ZM2.08339 11.1453C2.40445 10.93 2.8393 11.0157 3.05466 11.3367C3.48061 11.9718 4.0253 12.5185 4.65875 12.9468C4.97901 13.1633 5.06309 13.5985 4.84654 13.9188C4.63 14.239 4.19483 14.3231 3.87457 14.1065C3.09165 13.5772 2.41845 12.9015 1.89199 12.1166C1.67663 11.7955 1.76233 11.3607 2.08339 11.1453ZM13.9187 11.1534C14.239 11.37 14.3231 11.8052 14.1065 12.1254C13.5772 12.9083 12.9015 13.5815 12.1166 14.108C11.7955 14.3234 11.3607 14.2377 11.1453 13.9166C10.93 13.5955 11.0157 13.1607 11.3367 12.9453C11.9718 12.5194 12.5185 11.9747 12.9468 11.3412C13.1633 11.021 13.5985 10.9369 13.9187 11.1534ZM6.04623 14.4129C6.12013 14.0334 6.48766 13.7857 6.86713 13.8596C7.61534 14.0053 8.38464 14.0053 9.13285 13.8596C9.51232 13.7857 9.87985 14.0334 9.95375 14.4129C10.0276 14.7923 9.77993 15.1599 9.40046 15.2338C8.4755 15.4139 7.52448 15.4139 6.59952 15.2338C6.22005 15.1599 5.97233 14.7923 6.04623 14.4129Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleDotDashedIcon;