import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({
  setContacts,
  onClose,
  selectedContactId,
  setSelectedContactId,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== selectedContactId)
    );
    Toastr.success("Contact deleted succesfully");
    setSelectedContactId(0);
    setDeleting(false);
    onClose();
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Contact"
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
