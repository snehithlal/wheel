import React from "react";

import Item from "./Item";

const Items = ({ notes, editHandler, deleteHandler }) => (
  <div className="w-full">
    {notes.map(note => (
      <Item
        key={note.id}
        note={note}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
      />
    ))}
  </div>
);

export default Items;
