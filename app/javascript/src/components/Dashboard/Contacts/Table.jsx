import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Dropdown } from "neetoui";

import { PAGE_SIZE } from "./constants";
import NameAndRole from "./NameAndRole";

const Table = ({ contacts, deleteHandler, editHandler }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const contactTableColumnData = [
    {
      title: "NAME & ROLE",
      dataIndex: "nameAndRole",
      key: "nameAndRole",
      render: (_, contact) => <NameAndRole contact={contact} />,
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "CREATED AT",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      render: (_, contact) => (
        <Dropdown
          icon={MenuHorizontal}
          buttonStyle="text"
          strategy="fixed"
          trigger="hover"
        >
          <li onClick={() => editHandler(contact)}>Edit</li>
          <li onClick={() => deleteHandler(contact.id)}>Delete</li>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="notes-table-height w-full">
      <NeetoUITable
        allowRowClick
        fixedHeight
        defaultPageSize={PAGE_SIZE}
        currentPageNumber={currentPage}
        handlePageChange={page => setCurrentPage(page)}
        rowData={contacts}
        columnData={contactTableColumnData}
      />
    </div>
  );
};

export default Table;
