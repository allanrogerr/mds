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

const ThumbsDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33335 2.0333C4.19631 2.0333 4.06297 2.07775 3.95335 2.15997C3.84379 2.24213 3.76382 2.3576 3.72542 2.48904M3.72542 2.48904L2.17209 7.82238C2.14456 7.91676 2.13931 8.01652 2.15689 8.11326C2.17448 8.21 2.21435 8.30131 2.27335 8.37997C2.33234 8.45862 2.40884 8.52247 2.49678 8.56644C2.58472 8.61041 2.68169 8.6333 2.78001 8.6333H6.66668C6.88139 8.6333 7.08423 8.73184 7.21694 8.90062C7.34966 9.0694 7.39757 9.28976 7.34693 9.49841L6.68026 12.2451L6.67961 12.2478C6.62953 12.4506 6.62593 12.6621 6.66909 12.8666C6.71225 13.071 6.80105 13.263 6.92885 13.4283C7.05665 13.5936 7.22015 13.7279 7.40714 13.8211C7.46985 13.8524 7.53466 13.8788 7.60098 13.9001L9.67314 9.7618C9.67335 9.76138 9.67356 9.76096 9.67377 9.76054C9.84212 9.42233 10.1014 9.1377 10.4225 8.93858C10.4907 8.89629 10.5611 8.85821 10.6333 8.82445V2.0333H4.33335M4.33335 0.633301C3.89339 0.633301 3.46531 0.775996 3.11335 1.03997C2.76138 1.30394 2.50453 1.67495 2.38135 2.0973L0.828012 7.43063C0.827987 7.43072 0.828037 7.43055 0.828012 7.43063C0.739692 7.73359 0.723025 8.05322 0.779477 8.3637C0.835945 8.67427 0.963947 8.96743 1.15335 9.21997C1.34274 9.4725 1.58834 9.67747 1.87068 9.81864C2.15302 9.95981 2.46435 10.0333 2.78001 10.0333H5.77645L5.32042 11.9122C5.3203 11.9127 5.32018 11.9132 5.32006 11.9136C5.21976 12.3208 5.21265 12.7454 5.29929 13.1558C5.38602 13.5666 5.56447 13.9525 5.8213 14.2847C6.07814 14.6168 6.40671 14.8867 6.78248 15.074C7.15825 15.2614 7.5715 15.3614 7.99134 15.3666C8.25944 15.3699 8.50588 15.2198 8.62593 14.98L10.9259 10.3867L10.9269 10.3848C10.9793 10.2793 11.0601 10.1905 11.1603 10.1284C11.2604 10.0663 11.3759 10.0334 11.4937 10.0333H13.3333C13.8726 10.0333 14.3898 9.81907 14.7711 9.43775C15.1525 9.05643 15.3667 8.53924 15.3667 7.99997V2.66663C15.3667 2.12736 15.1525 1.61017 14.7711 1.22885C14.3898 0.847526 13.8726 0.633301 13.3333 0.633301H4.33335ZM12.0333 2.0333V8.6333H13.3333C13.5013 8.6333 13.6624 8.56657 13.7812 8.4478C13.9 8.32903 13.9667 8.16794 13.9667 7.99997V2.66663C13.9667 2.49866 13.9 2.33757 13.7812 2.2188C13.6624 2.10003 13.5013 2.0333 13.3333 2.0333H12.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default ThumbsDownIcon;