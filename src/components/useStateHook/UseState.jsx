import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const UseState = () => {
  const [myPassion, setMyPassion] = useState(true);

  const formDetails = {
    Name: "",
    City: "",
  };

  const [details, setDetails] = useState(formDetails);

  const changeNameHandler = (e) => {
    setDetails({
      ...details,
      Name: e.target.value,
    });
  };

  return (
    <div>
      <h1 className="text-4xl">useState Hook</h1>
      <h1>UseState Hook is basically used to manage a components State</h1>

      <div className="dflex flex-col">
        {myPassion ? <h1>I am a Coder</h1> : <h1>I am a Traveller</h1>}
        <Button onClick={() => setMyPassion(!myPassion)} variant="contained">
          Toggle Passion
        </Button>
      </div>

      {/* select and and city */}
      <div className="dflex gap-10 mt-10">
        <TextField
          onChange={changeNameHandler}
          id="outlined-basic"
          label="Enter Your Name"
          variant="outlined"
        />
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            displayEmpty
            onChange={(e) =>
              setDetails({
                ...details,
                City: e.target.value,
              })
            }
          >
            <MenuItem value="" disabled>
              <em>Select a city</em>
            </MenuItem>
            <MenuItem value={"Banglore"}>Banglore</MenuItem>
            <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col mt-5 items-center">
        <h1>Your Name is - {details?.Name}</h1>
        <h1>Your City is - {details?.City}</h1>
      </div>
    </div>
  );
};

export default UseState;
