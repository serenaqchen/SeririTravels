import React from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";

import * as apiClient from "../apiClient";
import CustomButtonsSpan from "../styles/button";

function DestinationForm({
  articles,
  setshowDestinationForm,
  setshowCountryForm,
}) {
  const countries = articles.map((article) => article.country);

  const ids = articles.map((article) => article.article_id);

  const countryId = {};

  for (let i = 0; i < ids.length; i++) {
    countryId[countries[i]] = ids[i];
  }

  const initialState = {
    article_id: "",
    title: "",
    description: "",
    city: "",
    image_url: "",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "editArticle_id":
        return { ...state, article_id: countryId[action.payload] };
      case "editTitle":
        return { ...state, title: action.payload };
      case "editDescription":
        return { ...state, description: action.payload };
      case "editCity":
        return { ...state, city: action.payload };
      case "editImage_url":
        return { ...state, image_url: action.payload };
      case "reset":
        return {
          ...state,
          title: "",
          description: "",
          city: "",
          image_url: "",
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addDestination = (formData) => {
    apiClient.addDestination(formData);
  };
  const handleAddDestination = (e) => {
    e.preventDefault();
    addDestination(state);
    setshowDestinationForm(false);
    setshowCountryForm(true);
    dispatch({ type: "reset" });
  };

  const handleBack = (e) => {
    setshowDestinationForm(false);
    setshowCountryForm(true);
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
      <h2>Add New Destination to Existing Country</h2>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Select a Country{" "}
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: "country",
            id: "uncontrolled-native",
          }}
          onChange={(e) =>
            dispatch({
              type: "editArticle_id",
              payload: e.target.value,
            })
          }
        >
          <option>Please Select a Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
        <Spacing />
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
          label="Description"
          id="overview"
          variant="standard"
          type="text"
          required
          fullWidth
          multiline
          value={state.description}
          onChange={(e) =>
            dispatch({
              type: "editDescription",
              payload: e.target.value,
            })
          }
        />
        <Spacing />
        <TextField
          label="City"
          id="country"
          variant="standard"
          type="text"
          required
          fullWidth
          value={state.city}
          onChange={(e) =>
            dispatch({
              type: "editCity",
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
      </FormControl>
      <CustomButtonsSpan
        text1="Submit"
        text2="Back"
        fx1={handleAddDestination}
        fxn2={handleBack}
      />
    </Box>
  );
}

export default DestinationForm;
