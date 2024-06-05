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

const LassoSelectIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.03336 6.66395C2.03973 7.4059 2.26124 8.12851 2.66881 8.74501C2.88059 8.67177 3.10498 8.63336 3.33332 8.63336C3.87259 8.63336 4.38978 8.84759 4.7711 9.22891C5.15243 9.61024 5.36665 10.1274 5.36665 10.6667C5.36665 10.7171 5.36478 10.7673 5.36108 10.8173C5.82179 10.9934 6.29364 11.1234 6.77399 11.2027C7.15543 11.2656 7.41361 11.6259 7.35065 12.0073C7.2877 12.3888 6.92745 12.6469 6.54601 12.584C5.9397 12.4839 5.35018 12.3176 4.78145 12.0941L4.7711 12.1045C4.57543 12.3002 4.34397 12.4518 4.09211 12.5531C4.13849 12.769 4.21198 12.9789 4.31137 13.1777C4.4942 13.5433 4.75965 13.8614 5.0867 14.1067C5.39597 14.3386 5.45865 14.7774 5.2267 15.0867C4.99474 15.3959 4.55597 15.4586 4.2467 15.2267C3.74577 14.851 3.3392 14.3638 3.05917 13.8038C2.86789 13.4212 2.73925 13.0118 2.67692 12.5912C2.3854 12.4917 2.11746 12.3264 1.89554 12.1045C1.51421 11.7232 1.29999 11.206 1.29999 10.6667C1.29999 10.3008 1.39863 9.94499 1.58119 9.63495C0.972912 8.7672 0.641735 7.73412 0.633383 6.6722L0.633362 6.6667C0.633362 3.19554 4.08751 0.633362 8.00003 0.633362C11.9125 0.633362 15.3667 3.19554 15.3667 6.6667L15.3665 6.68216C15.3551 7.20086 15.2702 7.71532 15.1144 8.21021C14.9983 8.57897 14.6053 8.78381 14.2365 8.66773C13.8678 8.55165 13.6629 8.15861 13.779 7.78985C13.8943 7.42356 13.9575 7.04288 13.9667 6.65901C13.9614 4.23984 11.4439 2.03336 8.00003 2.03336C4.55385 2.03336 2.03526 4.24284 2.03336 6.66395ZM3.78116 11.1145C3.66362 11.2321 3.50466 11.2986 3.33859 11.3L3.33336 11.3L3.32799 11.3C3.16195 11.2986 3.003 11.232 2.88549 11.1145C2.76671 10.9958 2.69999 10.8347 2.69999 10.6667C2.69999 10.4987 2.76671 10.3376 2.88549 10.2189C3.00426 10.1001 3.16535 10.0334 3.33332 10.0334C3.50129 10.0334 3.66238 10.1001 3.78116 10.2189C3.89993 10.3376 3.96665 10.4987 3.96665 10.6667C3.96665 10.8347 3.89993 10.9958 3.78116 11.1145Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3054 6.78618C9.72726 6.2606 8.79999 6.67079 8.79999 7.45213V14.3395C8.79999 15.2299 9.95489 15.5796 10.4488 14.8387L11.8746 12.7H14.4827C15.3053 12.7 15.6968 11.6874 15.0881 11.1341L10.3054 6.78618ZM10.2 12.6881V8.5824L13.1894 11.3H11.7676C11.3664 11.3 10.9917 11.5005 10.7691 11.8344L10.2 12.6881Z"
      fill="currentColor"
    />
  </svg>
);
export default LassoSelectIcon;