import React from "react";

import { Avatar, Typography } from "neetoui";

import { fullName } from "./utils";

const NameAndRole = ({ contact }) => (
  <div className="flex">
    <Avatar
      size="medium"
      user={{
        name: fullName(contact),
      }}
    />
    <div className="ml-2">
      <Typography style="h5">{fullName(contact)}</Typography>
      <Typography style="body3">{contact.role?.label}</Typography>
    </div>
  </div>
);

export default NameAndRole;
