import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
    
      <InputGroup className="mb-3">
        <FormControl
        onChange={(e) => setKeyword(e.target.value)}
        name="q"
        type="text"

        className="mr-sm-2 ml-sm-5"
          placeholder="Search Products..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button type="submit" variant="outline-success" className="p-2" id="button-addon2">
        Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
