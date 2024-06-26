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

const StarOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.838346 0.838326C1.11171 0.564959 1.55493 0.564959 1.8283 0.838326L6.04984 5.05987C6.05355 5.0635 6.05723 5.06718 6.06086 5.07089L12.134 11.144C12.1964 11.1887 12.2515 11.2435 12.2966 11.3066L15.1616 14.1717C15.435 14.445 15.435 14.8882 15.1616 15.1616C14.8883 15.435 14.445 15.435 14.1717 15.1616L12.7929 13.7829L12.8099 13.8813C12.855 14.1437 12.7474 14.4089 12.5323 14.5657C12.3171 14.7225 12.0317 14.7437 11.7957 14.6203L7.99999 12.6365L4.20423 14.6203C3.9683 14.7437 3.68286 14.7225 3.46772 14.5657C3.25258 14.4089 3.14499 14.1437 3.19012 13.8813L3.91433 9.67104L0.844908 6.68142C0.654122 6.49559 0.585314 6.2176 0.667394 5.96423C0.749473 5.71087 0.968219 5.52603 1.23173 5.48738L4.07969 5.06962L0.838346 1.82828C0.564979 1.55491 0.564979 1.11169 0.838346 0.838326ZM5.31366 6.30359L2.83656 6.66695L5.15507 8.92518C5.32026 9.08609 5.39562 9.31803 5.35652 9.5453L4.80972 12.7242L7.67575 11.2263C7.87887 11.1201 8.1211 11.1201 8.32423 11.2263L11.1903 12.7242L11.0772 12.0672L5.31366 6.30359ZM8.00056 0.633301C8.26694 0.633518 8.51012 0.784915 8.62788 1.02386L10.525 4.8733L14.7669 5.48718C15.0307 5.52536 15.2499 5.71 15.3323 5.96345C15.4148 6.21689 15.3461 6.49516 15.1553 6.6812L12.7686 9.00787C12.4918 9.27773 12.0486 9.27209 11.7788 8.99527C11.5089 8.71844 11.5145 8.27526 11.7914 8.0054L13.1617 6.66947L9.95973 6.20608C9.73143 6.17305 9.53407 6.02965 9.4321 5.82274L7.9987 2.9142L7.66738 3.58376C7.49591 3.93026 7.07602 4.07215 6.72953 3.90069C6.38303 3.72923 6.24114 3.30934 6.4126 2.96284L7.3726 1.02284C7.49075 0.784086 7.73417 0.633084 8.00056 0.633301Z"
      fill="currentColor"
    />
  </svg>
);
export default StarOffIcon;
