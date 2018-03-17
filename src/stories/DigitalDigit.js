import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import DigitalDigit from "../components/DigitalDigit";
import { setTimeout } from "timers";

storiesOf("DigitalDigit", module)
  .add("empty", () => <DigitalDigit />)
  .add("0", () => <DigitalDigit digit={0} />)
  .add("1", () => <DigitalDigit digit={1} />)
  .add("2", () => <DigitalDigit digit={2} />)
  .add("3", () => <DigitalDigit digit={3} />)
  .add("4", () => <DigitalDigit digit={4} />)
  .add("5", () => <DigitalDigit digit={5} />)
  .add("6", () => <DigitalDigit digit={6} />)
  .add("7", () => <DigitalDigit digit={7} />)
  .add("8", () => <DigitalDigit digit={8} />)
  .add("9", () => <DigitalDigit digit={9} />)
  .add("with string", () => <DigitalDigit digit="5" />);
