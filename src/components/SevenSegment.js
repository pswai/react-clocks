import React from "react";
import PropTypes from "prop-types";

const Notch = props => {
  const { isOn, ...rest } = props;
  const { width, height } = props;
  const style = {
    fill: isOn ? "black" : "e6e6e6",
  };
  const vMid = height / 2;
  const points = [
    [0, vMid],
    [vMid, 0],
    [width - vMid, 0],
    [width, vMid],
    [width - vMid, height],
    [vMid, height],
  ];
  const pointsAttr = points.map(point => point.join(",")).join(" ");
  return (
    <svg {...rest}>
      <polygon points={pointsAttr} style={style} />
    </svg>
  );
};

const VerticalNotch = props => {
  const { isOn, ...rest } = props;
  const { width, height } = props;
  const style = {
    fill: isOn ? "black" : "e6e6e6",
  };
  const hMid = width / 2;
  const points = [
    [hMid, 0],
    [width, hMid],
    [width, height - hMid],
    [hMid, height],
    [0, height - hMid],
    [0, hMid],
  ];
  const pointsAttr = points.map(point => point.join(",")).join(" ");
  return (
    <svg {...rest}>
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
const SevenSegment = props => {
  const { activeNotch, width, height, spacing, thickness, ...rest } = props;
  const horizontalNotchWidth = width - thickness - spacing;
  const verticalNotchHeight = (height - thickness) / 2 - spacing;

  const notches = {
    a: {
      isOn: activeNotch.includes("a"),
      x: thickness / 2 + spacing / 2,
      width: horizontalNotchWidth,
      height: thickness,
    },
    b: {
      isOn: activeNotch.includes("b"),
      x: width - thickness,
      y: thickness / 2 + spacing / 2,
      width: thickness,
      height: verticalNotchHeight,
    },
    c: {
      isOn: activeNotch.includes("c"),
      x: width - thickness,
      y: height / 2 + spacing / 2,
      width: thickness,
      height: verticalNotchHeight,
    },
    d: {
      isOn: activeNotch.includes("d"),
      x: thickness / 2 + spacing / 2,
      y: height - thickness,
      width: horizontalNotchWidth,
      height: thickness,
    },
    e: {
      isOn: activeNotch.includes("e"),
      y: height / 2 + spacing / 2,
      width: thickness,
      height: verticalNotchHeight,
    },
    f: {
      isOn: activeNotch.includes("f"),
      y: thickness / 2 + spacing / 2,
      width: thickness,
      height: verticalNotchHeight,
    },
    g: {
      isOn: activeNotch.includes("g"),
      x: thickness / 2 + spacing / 2,
      y: height / 2 - thickness / 2,
      width: horizontalNotchWidth,
      height: thickness,
    },
  };

  return (
    <svg {...rest} height={height} width={width}>
      <Notch {...notches.a} />
      <VerticalNotch {...notches.b} />
      <VerticalNotch {...notches.c} />
      <Notch {...notches.d} />
      <VerticalNotch {...notches.e} />
      <VerticalNotch {...notches.f} />
      <Notch {...notches.g} />
    </svg>
  );
};

SevenSegment.prototypes = {
  activeNotch: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.number,
  height: PropTypes.number,
  spacing: PropTypes.number,
  thickness: PropTypes.number,
};

SevenSegment.defaultProps = {
  activeNotch: [],
  width: 50,
  height: 100,
  spacing: 2,
  thickness: 10,
};

export default SevenSegment;
