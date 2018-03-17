import React from "react";
import PropTypes from "prop-types";

const Notch = props => {
  const { width, height, isOn } = props;
  const style = {
    fill: isOn ? "black" : "e6e6e6",
  };
  const vMid = height / 2;
  const points = [
    [vMid, vMid],
    [vMid * 2, 0],
    [width - vMid * 2, 0],
    [width - vMid, vMid],
    [width - vMid * 2, height],
    [vMid * 2, height],
  ];
  const pointsAttr = points.map(point => point.join(",")).join(" ");
  return (
    <svg {...props}>
      <polygon points={pointsAttr} style={style} />
    </svg>
  );
};

const VerticalNotch = props => {
  const { width, height, isOn } = props;
  const style = {
    fill: isOn ? "black" : "e6e6e6",
  };
  const hMid = width / 2;
  const points = [
    [hMid, hMid],
    [width, hMid * 2],
    [width, height - hMid * 2],
    [hMid, height - hMid],
    [0, height - hMid * 2],
    [0, hMid * 2],
  ];
  const pointsAttr = points.map(point => point.join(",")).join(" ");
  return (
    <svg {...props}>
      <polygon points={pointsAttr} style={style} />
    </svg>
  );
};

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
  const { digit, width, height, spacing, thickness, ...others } = props;
  const horizontalNotchWidth = width - spacing;
  const verticalNotchHeight = height / 2 - spacing;

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
      isOn: [0, 2, 3, 4, 5, 6, 8, 9].includes(parsedDigit),
    },
  };

  return (
    <svg {...others} height={height} width={width}>
      <Notch
        {...notches.a}
        x={spacing / 2}
        width={horizontalNotchWidth}
        height={thickness}
      />
      <VerticalNotch
        {...notches.b}
        x={width - thickness}
        y={spacing / 2}
        width={thickness}
        height={verticalNotchHeight}
      />
      <VerticalNotch
        {...notches.c}
        x={width - thickness}
        y={height / 2 - thickness + spacing / 2}
        width={thickness}
        height={verticalNotchHeight}
      />
      <Notch
        {...notches.d}
        x={spacing / 2}
        y={height - 2 * thickness}
        width={horizontalNotchWidth}
        height={thickness}
      />
      <VerticalNotch
        {...notches.e}
        y={height / 2 - thickness + spacing / 2}
        width={thickness}
        height={verticalNotchHeight}
      />
      <VerticalNotch
        {...notches.f}
        y={spacing / 2}
        width={thickness}
        height={verticalNotchHeight}
      />
      <Notch
        {...notches.g}
        x={spacing / 2}
        y={height / 2 - thickness}
        width={horizontalNotchWidth}
        height={thickness}
      />
    </svg>
  );
};

DigitalDigit.prototypes = {
  // prettier-ignore
  digit: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  spacing: PropTypes.number,
  thickness: PropTypes.number,
};

DigitalDigit.defaultProps = {
  width: 50,
  height: 100,
  spacing: 2,
  thickness: 10,
};

export default DigitalDigit;
