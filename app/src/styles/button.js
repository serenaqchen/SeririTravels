import * as React from "react";

import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";

const CustomButtonRoot = styled("span")(`
  background-color: #1687A7;
  padding: 15px 20px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #276678;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #276678;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);
const CustomButtonRoot2 = styled("span")(`
  background-color: transparent;
  padding: 15px 20px;
  border-radius: 5px;
  color: #1687A7;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: 2px solid #61b5cc;

  &:hover {
    background-color: #d7e8ec;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #d7e8ec;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);
function CustomSubmitButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function CustomOtherButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot2} />;
}

export default function CustomButtonsSpan({ text1, text2, fxn1, fxn2 }) {
  return (
    <Stack spacing={2} direction="row">
      <CustomOtherButton onClick={fxn1}>{text1}</CustomOtherButton>
      <CustomSubmitButton type="submit" onClick={fxn2}>
        {text2}
      </CustomSubmitButton>
    </Stack>
  );
}
