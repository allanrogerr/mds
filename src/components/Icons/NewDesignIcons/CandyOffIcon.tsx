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

const CandyOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838326 0.838358C1.11169 0.564991 1.55491 0.564991 1.82828 0.838358L7.16139 6.17147C7.16125 6.17133 7.16154 6.17162 7.16139 6.17147L9.82796 8.83805C9.82775 8.83784 9.82817 8.83825 9.82796 8.83805L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1616C14.8882 15.435 14.445 15.435 14.1717 15.1616L10.3333 11.3233L10.1566 11.5C9.40392 12.2376 8.39052 12.6484 7.33667 12.643C6.81995 12.6404 6.31397 12.5379 5.84459 12.3462L5.35304 14.8039C5.31026 15.0178 5.17021 15.1996 4.97427 15.2954C4.77833 15.3913 4.5489 15.3904 4.35377 15.2929L3.44243 14.8375C3.2621 14.7473 3.06294 14.7001 2.8613 14.7C2.86121 14.7 2.86139 14.7 2.8613 14.7H1.99997C1.61337 14.7 1.29997 14.3866 1.29997 14L1.29997 13.1389C1.29997 13.1389 1.29997 13.139 1.29997 13.1389C1.29984 12.9373 1.25282 12.7382 1.1626 12.5578L0.70711 11.6462C0.609615 11.4511 0.608659 11.2216 0.704525 11.0257C0.800392 10.8298 0.982121 10.6897 1.19602 10.6469L3.65376 10.1554C3.46207 9.68599 3.35953 9.18002 3.35692 8.6633C3.3516 7.60945 3.76239 6.59607 4.50002 5.84338L4.50497 5.83833L4.67668 5.66667L0.838326 1.82831C0.564959 1.55494 0.564959 1.11173 0.838326 0.838358ZM5.66663 6.65662L5.49757 6.82568C5.01958 7.31468 4.75345 7.97234 4.7569 8.65623C4.76036 9.34123 5.03401 9.9972 5.51839 10.4816C5.65519 10.6184 5.80568 10.7384 5.96663 10.8402V6.95662L5.66663 6.65662ZM7.36663 8.35662V11.2431C7.81412 11.2414 8.24968 11.1244 8.6333 10.9082V9.62328L7.36663 8.35662ZM4.47646 11.4186L2.36899 11.8401L2.41467 11.9315C2.41462 11.9314 2.41472 11.9316 2.41467 11.9315C2.60202 12.3061 2.6998 12.7195 2.69997 13.1384V13.3H2.8613C3.28017 13.3002 3.69354 13.3978 4.06817 13.5851L4.15991 13.631L4.5814 11.5235C4.56361 11.5064 4.54595 11.489 4.52844 11.4715C4.51094 11.454 4.49361 11.4364 4.47646 11.4186ZM11.0257 0.704558C11.2216 0.608691 11.451 0.609647 11.6462 0.707143L12.5575 1.16248C12.7378 1.25269 12.937 1.29988 13.1386 1.3C13.1386 1.3 13.1387 1.3 13.1386 1.3H14C14.3866 1.3 14.7 1.6134 14.7 2V2.86105C14.7 2.86096 14.7 2.86115 14.7 2.86105C14.7001 3.06269 14.7471 3.26182 14.8373 3.44215L15.2928 4.3538C15.3903 4.54893 15.3913 4.77836 15.2954 4.9743C15.1995 5.17024 15.0178 5.31029 14.8039 5.35307L12.377 5.83845C12.4308 5.972 12.4776 6.10872 12.5168 6.24806C12.7026 6.90707 12.7161 7.60276 12.5559 8.26846C12.4654 8.64433 12.0874 8.87569 11.7115 8.78523C11.3356 8.69477 11.1043 8.31674 11.1947 7.94087C11.2988 7.50829 11.2901 7.05621 11.1694 6.62797C11.0486 6.19972 10.8199 5.80966 10.5052 5.49517C10.3624 5.3523 10.2037 5.22676 10.0333 5.1214V5.562C10.0333 5.9486 9.7199 6.262 9.3333 6.262C8.9467 6.262 8.6333 5.9486 8.6333 5.562V4.73333C8.44059 4.73583 8.24798 4.75977 8.05909 4.80523C7.68323 4.89569 7.30519 4.66433 7.21473 4.28846C7.12427 3.91259 7.35564 3.53456 7.73151 3.4441C8.3972 3.28388 9.09289 3.29732 9.75191 3.48313C9.89125 3.52241 10.028 3.56913 10.1615 3.62295L10.6469 1.19605C10.6897 0.982153 10.8297 0.800424 11.0257 0.704558ZM11.5621 4.57372L13.6309 4.15994L13.5853 4.06851C13.5852 4.06841 13.5853 4.06862 13.5853 4.06851C13.3979 3.69388 13.3001 3.28048 13.3 2.86161V2.7H13.1386C12.7198 2.69983 12.3064 2.60221 11.9318 2.41486L11.84 2.36902L11.4262 4.43792C11.4495 4.46006 11.4724 4.48249 11.4951 4.50522C11.5177 4.5278 11.54 4.55064 11.5621 4.57372Z"
      fill="currentColor"
    />
  </svg>
);
export default CandyOffIcon;