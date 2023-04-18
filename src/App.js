// App.js

import React, { useState } from "react";
import Read from "./Read";
import Create from "./Create";
import Update from "./Update";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  
  const [handle, setHandle] = useState({ name: "", email: "", city: "" });
  const [handle2, setHandle2] = useState({
    _id: "",
    name: "",
    email: "",
    city: "",
  });
  const [handle3, setHandle3] = useState({ _id: "" });

  // function to target the input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
  };

  // function to target the update input fields
  const handler2 = (e) => {
    const { name, value } = e.target;
    setHandle2({ ...handle2, [name]: value });
  };
  // function to target the input field of id to delete item
  const handler3 = (e) => {
    const { name, value } = e.target;
    setHandle3({ ...handle3, [name]: value });
  };

  // function for sending the data to api
  const senddatatoapi = () => {
    fetch("http://127.0.0.1:8000/usertable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(handle),
    }).then(() => {
      setHandle({ name: "", email: "", city: "" });
    });
  };

  // // function to update data to api
  // const updatedatatoapi = async (data) => {
  //   console.log(data);
  //   let myupdate = await fetch(`http://127.0.0.1:8000/usertable/${data.id}`, {
  //     method: "GET",
  //   });
  //   setHandle(myupdate);
  // };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/read"
            element={<Read />}
          />
          <Route
            path="/create"
            element={
              <Create
                handler={handler}
                handle={handle}
                senddatatoapi={senddatatoapi}
              />
            }
          />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
