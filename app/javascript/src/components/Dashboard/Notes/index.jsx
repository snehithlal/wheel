import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import Items from "./Items";
import Menubar from "./Menubar";
import NewNotePane from "./Pane/Create";
import EditNotePane from "./Pane/Edit";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState();
  const [notes, setNotes] = useState([]);
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const editHandler = note => {
    setSelectedNote(note);
    setShowEditNote(true);
  };

  const deleteHandler = id => {
    setSelectedNoteId(id);
    setShowDeleteAlert(true);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menubar />
      <Container>
        <Header
          title="Notes"
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          <Items
            notes={notes}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
        <EditNotePane
          showPane={showEditNote}
          setShowPane={setShowEditNote}
          fetchNotes={fetchNotes}
          note={selectedNote}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteId={selectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
            refetch={fetchNotes}
            setSelectedNoteId={setSelectedNoteId}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
