import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TextClock from "../components/TextClock";
import { setTimeout } from "timers";

storiesOf("TextClock", module).add("standard", () => <TextClock />);
