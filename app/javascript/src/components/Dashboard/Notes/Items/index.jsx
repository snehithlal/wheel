import React from "react";

import Item from "./Item";

const Items = ({ notes, editHandler }) => (
  <>
    {notes.map(note => (
      <Item key={note.id} note={note} editHandler={editHandler} />
    ))}
  </>
);

export default Items;
