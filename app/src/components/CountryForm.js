import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import * as apiClient from "../apiClient";
import CustomButtonsSpan from "../styles/button";

function CountryForm({ setshowCountryForm, setshowDestinationForm }) {
  const initialState = {
    title: "",
    overview: "",
    country: "",
    image_url: "",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "editTitle":
        return { ...state, title: action.payload };
      case "editOverview":
        return { ...state, overview: action.payload };
      case "editCountry":
        return { ...state, country: action.payload };
      case "editImage_url":
        return { ...state, image_url: action.payload };
      case "reset":
        return {
          ...state,
          title: "",
          overview: "",
          country: "",
          image_url: "",
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addCountry = (formData) => {
    apiClient.addCountry(formData);
  };
  const handleAddCountry = (e) => {
    e.preventDefault();
    addCountry(state);
    setshowDestinationForm(true);
    setshowCountryForm(false);
    dispatch({ type: "reset" });
  };

  const handleSkip = (e) => {
    setshowDestinationForm(true);
    setshowCountryForm(false);
  };

  function Spacing() {
    return (
      <Box
        sx={{
          height: 20,
        }}
      />
    );
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Add new Country</h2>
      <div>
        <TextField
          label="Title"
          id="titile"
          variant="standard"
          type="text"
          required
          fullWidth
          value={state.title}
          className="textfield"
          onChange={(e) =>
            dispatch({
              type: "editTitle",
              payload: e.target.value,
            })
          }
        />
        <Spacing />
        <TextField
          label="Overview"
          id="overview"
          variant="standard"
          type="text"
          required
          fullWidth
          multiline
          value={state.overview}
          onChange={(e) =>
            dispatch({
              type: "editOverview",
              payload: e.target.value,
            })
          }
        />
        <Spacing />
        <TextField
          label="Country"
          id="country"
          variant="standard"
          type="text"
          required
          fullWidth
          value={state.country}
          onChange={(e) =>
            dispatch({
              type: "editCountry",
              payload: e.target.value,
            })
          }
        />
        <Spacing />
        <TextField
          label="Image Url"
          id="image_url"
          variant="standard"
          type="text"
          required
          fullWidth
          value={state.image_url}
          onChange={(e) =>
            dispatch({
              type: "editImage_url",
              payload: e.target.value,
            })
          }
        />
        <Spacing />
        <CustomButtonsSpan
          text2="Submit"
          text1="Skip"
          fxn2={handleAddCountry}
          fxn1={handleSkip}
        />
      </div>
    </Box>
  );
}

export default CountryForm;
