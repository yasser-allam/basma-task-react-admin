import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import authProvider from "./providers/authProvider";
import DataProvider from "./providers/dataProvider";
import { CustomerList } from "./resources/customers/CustomerList";
import { baseURL } from "./settings/config";

const App = () => {
  const dataProvider = DataProvider(baseURL);

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
    >
      <Resource name="customers" list={CustomerList} />
      <Resource name="stats" list={Stats} />
    </Admin>
  );
};

export default App;
