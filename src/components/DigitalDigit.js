import React from "react";
import PropTypes from "prop-types";
import SevenSegment from "./SevenSegment";

/*
 * Notch Label
 * 
 *    A
 * F     B
 *    G
 * E     C
 *    D
 */
const DigitalDigit = props => {
  const { digit, ...rest } = props;

  const parsedDigit = parseInt(digit);
  const notches = {
    a: {
      isOn: [0, 2, 3, 5, 6, 7, 8, 9].includes(parsedDigit),
    },
    b: {
      isOn: [0, 1, 2, 3, 4, 7, 8, 9].includes(parsedDigit),
    },
    c: {
      isOn: [0, 1, 3, 4, 5, 6, 7, 8, 9].includes(parsedDigit),
    },
    d: {
      isOn: [0, 2, 3, 5, 6, 8, 9].includes(parsedDigit),
    },
    e: {
      isOn: [0, 2, 6, 8].includes(parsedDigit),
    },
    f: {
      isOn: [0, 4, 5, 6, 8, 9].includes(parsedDigit),
    },
    g: {
      isOn: [2, 3, 4, 5, 6, 8, 9].includes(parsedDigit),
    },
  };

  const activeNotch = Object.keys(notches).filter(k => notches[k].isOn);

  return <SevenSegment {...rest} activeNotch={activeNotch} />;
};

DigitalDigit.prototypes = {
  // prettier-ignore
  digit: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ])
};

DigitalDigit.defaultProps = {
  digit: null,
};

export default DigitalDigit;
