import React, { forwardRef } from "react";

import { Clock } from "neetoicons";
import { Typography } from "neetoui";

const StatusText = forwardRef(({ status }, ref) => (
  <div
    ref={ref}
    className="neeto-ui-text-gray-600 flex items-center
  "
  >
    <Clock size={12} className="mr-2" />
    <Typography style="body3" className="leading-4">
      {`${status} 2 Hours ago`}
    </Typography>
  </div>
));

StatusText.displayName = "StatusText";

export default StatusText;
