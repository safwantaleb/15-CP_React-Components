import "./App.css";
import React from "react";
import MyPic from "./Component/Profile/ProfilPhoto";
import Greeting from "./Component/Profile/FullName";
import MyAdd from "./Component/Profile/Address";

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Greeting />
        </header>
        <body className="App-body">
          <MyPic />
        </body>
        <footer className="App-footer">
          <MyAdd />
        </footer>
      </div>
    </>
  );
};
export default App;
