import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import DigitalDigit from "../components/DigitalDigit";
import { setTimeout } from "timers";

storiesOf("DigitalDigit", module)
  .add("empty", () => <DigitalDigit />)
  .add("with number", () => <DigitalDigit digit={3} />)
  .add("with string", () => <DigitalDigit digit="5" />);
