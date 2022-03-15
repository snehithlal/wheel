import React from "react";

import { Typography, Dropdown, Tag, Tooltip, Avatar } from "@bigbinary/neetoui";
import { MenuVertical } from "neetoicons";

import StatusText from "./StatusText";
import { randomStatus } from "./utils";

const Item = ({ note, editHandler, deleteHandler }) => (
  <div className="neeto-ui-shadow-s mb-4 border p-4">
    <div className="flex justify-between border-b">
      <div className="my-1">
        <Typography style="h4">{note.title}</Typography>
        <Typography
          style="body3"
          className="neeto-ui-text-gray-600 mb-3 mt-0.5"
        >
          {note.description}
        </Typography>
      </div>
      <Dropdown buttonStyle="text" position="bottom-end" icon={MenuVertical}>
        <li onClick={() => editHandler(note)}>Edit</li>
        <li onClick={() => deleteHandler(note.id)}>Delete</li>
      </Dropdown>
    </div>
    <div className="mt-4 flex justify-between">
      <Tag
        className="neeto-ui-text-gray-600"
        label="Getting Started"
        size="small"
      />
      <div className="flex items-center">
        <Tooltip position="bottom-end" content="Wednesday, 10:30AM">
          <StatusText status={randomStatus()} />
        </Tooltip>
        <Avatar
          size="small"
          user={{
            name: "Oliver Smith",
          }}
          className="ml-1"
        />
      </div>
    </div>
  </div>
);

export default Item;
