import React from "react";
import PropTypes from "prop-types";
import DigitalDigit from "./DigitalDigit";

const DigitalColon = props => {
  const { isOn, ...rest } = props;
  const { width, height } = props;
  const style = {
    fill: isOn ? "black" : "e6e6e6",
  };

  return (
    <svg {...rest}>
      <circle style={style} r={width / 5} cx={width / 2} cy={height / 5 * 2} />
      <circle style={style} r={width / 5} cx={width / 2} cy={height / 5 * 3} />
    </svg>
  );
};

DigitalColon.prototypes = {
  isOn: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

DigitalColon.defaultProps = {
  isOn: false,
  width: 25,
  height: 100,
};

const DigitalClock = props => {
  const { time, ...rest } = props;
  const { width, height } = props;

  // Lets set this:
  // width = 4 * digitWidth + colonWidth + 2 * spacing
  // colonWidth = digitWidth / 2
  // spacing = digitWidth / 10
  // SO: width = 4.7 * digitWidth
  const digitWidth = width / 4.7;
  const colonWidth = digitWidth / 2;
  const spacing = digitWidth / 10;
  let h1, h2, m1, m2;

  if (time) {
    const hh = time.getHours();
    const mm = time.getMinutes();
    h1 = parseInt(hh / 10) || undefined; // Don't show leading zero for hours
    h2 = hh % 10;
    m1 = parseInt(mm / 10);
    m2 = mm % 10;
  }

  return (
    <svg {...rest}>
      <DigitalDigit height={height} digit={h1} />
      <DigitalDigit height={height} x={digitWidth + spacing} digit={h2} />
      <DigitalColon
        height={height}
        x={2 * digitWidth + spacing}
        isOn={!!time}
      />
      <DigitalDigit
        height={height}
        x={2 * digitWidth + spacing + colonWidth}
        digit={m1}
      />
      <DigitalDigit
        height={height}
        x={3 * digitWidth + 2 * spacing + colonWidth}
        digit={m2}
      />
    </svg>
  );
};

DigitalClock.propTypes = {
  time: function(props, propName, componentName) {
    if (props[propName] && !(props[propName] instanceof Date)) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected \`Date\``
      );
    }
  },
  width: PropTypes.number,
  height: PropTypes.number,
};

DigitalClock.defaultProps = {
  time: null,
  width: 235,
  height: 100,
};

export default DigitalClock;
