import React from "react";

import Item from "./Item";

const Items = ({ notes, editHandler }) => (
  <div className="w-full">
    {notes.map(note => (
      <Item key={note.id} note={note} editHandler={editHandler} />
    ))}
  </div>
);

export default Items;
