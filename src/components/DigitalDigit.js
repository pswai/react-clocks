import React from "react";
import PropTypes from "prop-types";

const Notch = props => {
  const { width, height } = props;
  const style = {
    fill: "lime",
    stroke: "black",
    strokeWidth: 1,
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
  const { width, height } = props;
  const style = {
    fill: "lime",
    stroke: "black",
    strokeWidth: 1,
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

const DigitalDigit = props => {
  const digit = parseInt(props.digit, 10);

  return (
    <svg height="400" width="200">
      <Notch width="200" height="50" />
      <VerticalNotch x="150" width="50" height="200" />
      <VerticalNotch x="150" y="150" width="50" height="200" />
      <Notch y="300" width="200" height="50" />
      <VerticalNotch y="150" width="50" height="200" />
      <VerticalNotch width="50" height="200" />
      <Notch y="150" width="200" height="50" />
    </svg>
  );
};

DigitalDigit.prototypes = {
  // prettier-ignore
  digit: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  ])
};

export default DigitalDigit;
