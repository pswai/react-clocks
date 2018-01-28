import React, { Component } from "react";
import PropTypes from "prop-types";
import { clearTimeout, setTimeout } from "timers";

class TextClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "--:--:--"
    };
    this.timeout = null;
  }

  componentDidMount() {
    this.tick();
    this.setupNextTick();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  setupNextTick() {
    const date = new Date();
    const ms = date.getMilliseconds();

    this.timeout = setTimeout(() => {
      this.tick();
      this.setupNextTick();
    }, 1000 - ms);
  }

  tick() {
    const date = new Date();
    this.setState({
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    });
  }

  render() {
    const { time } = this.state;
    const [hh, mm, ss] = time.split(":");

    return (
      <div>
        {hh.padStart(2, "0")} : {mm.padStart(2, "0")} : {ss.padStart(2, "0")}
      </div>
    );
  }
}

export default TextClock;
