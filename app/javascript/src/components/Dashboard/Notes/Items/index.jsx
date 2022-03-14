import React from "react";

import Item from "./Item";

const Items = ({ notes, fetchNotes }) => (
  <>
    {notes.map(note => (
      <Item key={note.id} fetchNotes={fetchNotes} note={note} />
    ))}
  </>
);

export default Items;
