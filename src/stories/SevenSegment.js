import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SevenSegment from "../components/SevenSegment";
import { setTimeout } from "timers";

storiesOf("SevenSegment", module)
  .add("empty", () => <SevenSegment />)
  .add("notch A", () => <SevenSegment activeNotch={["a"]} />)
  .add("notch B", () => <SevenSegment activeNotch={["b"]} />)
  .add("notch C", () => <SevenSegment activeNotch={["c"]} />)
  .add("notch D", () => <SevenSegment activeNotch={["d"]} />)
  .add("notch E", () => <SevenSegment activeNotch={["e"]} />)
  .add("notch F", () => <SevenSegment activeNotch={["f"]} />)
  .add("notch G", () => <SevenSegment activeNotch={["g"]} />)
  .add("multiple notches", () => (
    <SevenSegment activeNotch={["a", "b", "f", "g"]} />
  ));
