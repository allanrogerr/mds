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

const LassoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00003 2.03336C4.56613 2.03336 2.03336 4.25765 2.03336 6.66669V6.66682C2.03323 7.40816 2.24802 8.13209 2.64952 8.75181C2.86696 8.67415 3.09806 8.63336 3.33336 8.63336C3.87264 8.63336 4.38982 8.84759 4.77115 9.22891C5.15247 9.61024 5.36669 10.1274 5.36669 10.6667C5.36669 10.7304 5.36371 10.7937 5.35782 10.8566C6.19878 11.1643 7.09044 11.3151 7.98834 11.3001L8.00003 11.2999V11.3C11.4339 11.3 13.9667 9.07574 13.9667 6.66669C13.9667 4.25765 11.4339 2.03336 8.00003 2.03336ZM4.75111 12.1242C4.55973 12.3104 4.33545 12.4553 4.09211 12.5532C4.13849 12.769 4.21197 12.9789 4.31137 13.1777C4.4942 13.5433 4.75964 13.8614 5.08669 14.1067C5.39597 14.3387 5.45865 14.7774 5.2267 15.0867C4.99474 15.396 4.55597 15.4587 4.2467 15.2267C3.74577 14.851 3.3392 14.3638 3.05917 13.8038C2.86788 13.4212 2.73924 13.0118 2.67691 12.5911C2.38541 12.4917 2.11749 12.3264 1.89558 12.1045C1.51425 11.7232 1.30003 11.206 1.30003 10.6667C1.30003 10.3085 1.39452 9.96012 1.5697 9.65478C0.96044 8.7784 0.633192 7.73581 0.633362 6.66669M4.75111 12.1242C5.78815 12.522 6.89295 12.7179 8.00589 12.7C11.9029 12.6974 15.3667 10.1226 15.3667 6.66669C15.3667 3.20907 11.8995 0.633362 8.00003 0.633362C4.10065 0.633362 0.633448 3.20901 0.633362 6.66657M3.33336 10.0334C3.16539 10.0334 3.0043 10.1001 2.88553 10.2189C2.76675 10.3376 2.70003 10.4987 2.70003 10.6667C2.70003 10.8347 2.76675 10.9958 2.88553 11.1145C3.0043 11.2333 3.16539 11.3 3.33336 11.3C3.50133 11.3 3.66242 11.2333 3.7812 11.1145C3.89997 10.9958 3.9667 10.8347 3.9667 10.6667C3.9667 10.4987 3.89997 10.3376 3.7812 10.2189C3.66242 10.1001 3.50133 10.0334 3.33336 10.0334Z"
      fill="currentColor"
    />
  </svg>
);
export default LassoIcon;
