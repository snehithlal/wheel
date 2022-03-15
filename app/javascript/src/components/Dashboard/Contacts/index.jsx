import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menubar from "./Menubar";
import NewContactPane from "./Pane/Create";
import EditContactPane from "./Pane/Edit";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenubar, setShowMenuBar] = useState(true);
  const [contacts, setContacts] = useState(CONTACTS);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(0);
  const [showNewPane, setShowNewPane] = useState(false);
  const [showEditPane, setShowEditPane] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const deleteHandler = id => {
    setSelectedContactId(id);
    setShowDeleteAlert(true);
  };

  const editHandler = contact => {
    setSelectedContact(contact);
    setShowEditPane(true);
  };

  return (
    <>
      <Menubar showMenubar={showMenubar} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              onClick={() => setShowNewPane(true)}
              label="Add Contact"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle={() => setShowMenuBar(prevValue => !prevValue)}
        />
        <Table
          contacts={contacts}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
        <NewContactPane
          setContacts={setContacts}
          showPane={showNewPane}
          setShowPane={setShowNewPane}
        />
        <EditContactPane
          contact={selectedContact}
          setContacts={setContacts}
          showPane={showEditPane}
          setShowPane={setShowEditPane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedContactId={selectedContactId}
            onClose={() => setShowDeleteAlert(false)}
            setContacts={setContacts}
            setSelectedContactId={setSelectedContactId}
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
