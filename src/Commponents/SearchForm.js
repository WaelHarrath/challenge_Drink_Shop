import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

function SearchForm({ setSearched }) {
  return (
    <div className="Form-container">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          onChange={(e) => setSearched(e.target.value)}
          className=" mr-sm-2"
        />
        <Button type="submit" disabled>
          Search
        </Button>
      </Form>
    </div>
  );
}

export default SearchForm;
