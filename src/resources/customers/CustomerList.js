import React from "react";
import {
  Datagrid,
  Filter,
  List,
  TextField,
  TextInput,
  Pagination,
} from "react-admin";

const CustomerFilter = ({ ...props }) => (
  <Filter {...props}>
    <TextInput source="search" alwaysOn />
  </Filter>
);
const CustomPagination = (props) => (
  <Pagination rowsPerPageOptions={[20, 40, 60]} {...props} />
);

export const CustomerList = (props) => {
  return (
    <List
      {...props}
      pagination={<CustomPagination />}
      perPage={20}
      bulkActionButtons={false}
      filters={<CustomerFilter />}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
      </Datagrid>
    </List>
  );
};
