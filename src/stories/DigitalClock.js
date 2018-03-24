import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import DigitalClock from "../components/DigitalClock";
import { setTimeout } from "timers";

storiesOf("DigitalClock", module)
  .add("empty", () => <DigitalClock />)
  .add("basic", () => {
    const time = new Date("2018-03-17T12:34:56+0800");
    return <DigitalClock time={time} />;
  });
