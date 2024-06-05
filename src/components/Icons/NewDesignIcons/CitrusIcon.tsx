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

const CitrusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.71499 2.04189C3.71075 2.04016 3.7062 2.03933 3.70162 2.03945C3.69704 2.03956 3.69254 2.04061 3.68839 2.04255C3.68566 2.04382 3.68312 2.04544 3.68084 2.04739C2.53844 3.44561 1.9546 5.21785 2.04259 7.02178C2.13092 8.8327 2.89 10.546 4.17204 11.828C5.45408 13.11 7.16734 13.8691 8.97827 13.9575C10.7846 14.0456 12.5591 13.4601 13.9581 12.3147C13.9595 12.3133 13.9606 12.3116 13.9614 12.3098C13.9626 12.3073 13.9633 12.3045 13.9633 12.3018C13.9634 12.299 13.9629 12.2962 13.9618 12.2936C13.9608 12.291 13.9592 12.2887 13.9571 12.2868L13.9449 12.2748L13.06 11.3894C11.9965 12.1905 10.6916 12.6214 9.34743 12.603C7.77417 12.5815 6.27155 11.9462 5.15997 10.8327C4.04839 9.71915 3.41579 8.21541 3.39705 6.64212C3.38106 5.30016 3.81276 3.99817 4.61321 2.93703L3.72625 2.04949C3.72305 2.04622 3.71923 2.04361 3.71499 2.04189ZM6.11957 2.46382C6.09841 2.43667 6.07499 2.41073 6.0493 2.38628C6.03238 2.37018 6.01487 2.35509 5.99683 2.341L4.72406 1.06741C4.587 0.928133 4.4229 0.818343 4.24184 0.744798C4.05942 0.670703 3.86368 0.634987 3.66685 0.639877C3.47001 0.644767 3.2763 0.690159 3.09778 0.773222C2.91926 0.856285 2.75977 0.975238 2.62926 1.12266C2.62358 1.12908 2.61802 1.1356 2.61258 1.14221C1.24062 2.81158 0.538977 4.93175 0.64425 7.08998C0.749523 9.24821 1.65418 11.29 3.18209 12.818C4.71 14.3459 6.75183 15.2505 8.91006 15.3558C11.0683 15.4611 13.1885 14.7594 14.8578 13.3875L14.8703 13.3769C15.0205 13.2475 15.1419 13.0881 15.2267 12.909C15.3116 12.7298 15.358 12.5349 15.3629 12.3367C15.3679 12.1386 15.3313 11.9416 15.2555 11.7584C15.181 11.5783 15.0702 11.4155 14.9301 11.2802L9.86754 6.21424C9.84268 6.18492 9.81545 6.15768 9.78615 6.1328L6.11957 2.46382ZM5.61554 3.94001C5.1991 4.54393 4.93172 5.23872 4.83609 5.96667H7.64087L5.61554 3.94001ZM7.64342 7.36667H4.86556C4.98842 8.07082 5.27274 8.73752 5.69624 9.31385L7.64342 7.36667ZM6.68616 10.3038C7.26243 10.7273 7.92913 11.0117 8.63337 11.1346V8.35662L6.68616 10.3038ZM10.0334 8.36073V11.1641C10.7603 11.0687 11.4543 10.8019 12.0577 10.3864L10.0334 8.36073Z"
      fill="currentColor"
    />
  </svg>
);
export default CitrusIcon;