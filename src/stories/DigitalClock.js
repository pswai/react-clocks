import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import DigitalClock from "../components/DigitalClock";
import withTimeNow from "../hoc/withTimeNow";

storiesOf("DigitalClock", module)
  .add("empty", () => <DigitalClock />)

  .add("basic", () => {
    const time = new Date("2018-03-17T12:34:56+0800");
    return <DigitalClock time={time} />;
  })

  .add("show seconds", () => {
    const time = new Date("2018-03-17T12:34:56+0800");
    return <DigitalClock time={time} showSeconds={true} />;
  })

  .add("single-digit hour", () => {
    const time = new Date("2018-03-17T02:34:56+0800");
    return <DigitalClock time={time} />;
  })

  .add("single-digit minute", () => {
    const time = new Date("2018-03-17T12:04:56+0800");
    return <DigitalClock time={time} />;
  })

  .add("single-digit second", () => {
    const time = new Date("2018-03-17T12:34:06+0800");
    return <DigitalClock time={time} showSeconds={true} />;
  })

  .add("ticking", () => {
    const MovingDigitalClock = withTimeNow()(DigitalClock);
    return <MovingDigitalClock />;
  })

  .add("ticking with seconds", () => {
    const MovingDigitalClock = withTimeNow()(DigitalClock);
    return <MovingDigitalClock showSeconds={true} />;
  });
