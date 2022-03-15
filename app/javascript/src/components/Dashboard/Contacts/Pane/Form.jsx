import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACT_VALIDATION_SCHEMA, ROLE_OPTIONS } from "./constants";

const ContactForm = ({ onClose, setContacts, contact, isEdit = false }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = values => {
    const contactDetails = isEdit
      ? { contact, ...values }
      : { ...values, id: new Date().getTime(), created_at: "Feb, 5, 2021" };

    if (isEdit) {
      setContacts(prevContacts =>
        prevContacts.map(prevContact => {
          if (prevContact.id === contact.id) return contactDetails;

          return prevContact;
        })
      );
    } else {
      setContacts(prevContacts => [...prevContacts, contactDetails]);
    }
    Toastr.success(`Contact ${isEdit ? "Edited" : "Created"} Successfully`);
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between">
              <Input
                required
                label="First Name"
                name="firstName"
                className="mr-6"
              />
              <Input required label="Last Name" name="lastName" />
            </div>
            <Input
              required
              label="Email"
              name="email"
              className="w-full flex-grow-0"
            />
            <Select
              required
              label="Role"
              name="role"
              options={ROLE_OPTIONS}
              placeholder="Select Role"
              className="w-full"
            />
          </Pane.Body>
          <Pane.Footer className="border-t">
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
              icon={Check}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
