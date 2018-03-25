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
  const { time, showSeconds, ...rest } = props;
  const { width, height } = props;

  let digitWidth, colonWidth;

  if (showSeconds) {
    // Lets set this:
    // width = 6 * digitWidth + 2 * colonWidth + 3 * spacing
    // colonWidth = digitWidth / 2
    // spacing = digitWidth / 10
    // SO: width = 7.3 * digitWidth
    digitWidth = width / 7.3;
    colonWidth = digitWidth / 2;
  } else {
    // Lets set this:
    // width = 4 * digitWidth + colonWidth + 2 * spacing
    // colonWidth = digitWidth / 2
    // spacing = digitWidth / 10
    // SO: width = 4.7 * digitWidth
    digitWidth = width / 4.7;
    colonWidth = digitWidth / 2;
  }
  const spacing = digitWidth / 10;
  let h1,
    h2,
    m1,
    m2,
    s1,
    s2,
    isColonOn = false;

  if (time) {
    const hh = time.getHours();
    const mm = time.getMinutes();
    const ss = time.getSeconds();
    h1 = parseInt(hh / 10) || undefined; // Don't show leading zero for hours
    h2 = hh % 10;
    m1 = parseInt(mm / 10);
    m2 = mm % 10;

    // Blink the colon
    isColonOn = time.getMilliseconds() < 100 || time.getMilliseconds() > 900;

    if (showSeconds) {
      isColonOn = true;
      s1 = parseInt(ss / 10);
      s2 = ss % 10;
    }
  }

  return (
    <svg {...rest}>
      <DigitalDigit height={height} width={digitWidth} digit={h1} />
      <DigitalDigit
        height={height}
        width={digitWidth}
        x={digitWidth + spacing}
        digit={h2}
      />
      <DigitalColon
        height={height}
        width={colonWidth}
        x={2 * digitWidth + spacing}
        isOn={isColonOn}
      />
      <DigitalDigit
        height={height}
        width={digitWidth}
        x={2 * digitWidth + spacing + colonWidth}
        digit={m1}
      />
      <DigitalDigit
        height={height}
        width={digitWidth}
        x={3 * digitWidth + 2 * spacing + colonWidth}
        digit={m2}
      />

      {showSeconds && (
        <React.Fragment>
          <DigitalColon
            height={height}
            width={colonWidth}
            x={4 * digitWidth + 2 * spacing + colonWidth}
            isOn={isColonOn}
          />
          <DigitalDigit
            height={height}
            width={digitWidth}
            x={4 * digitWidth + 2 * spacing + 2 * colonWidth}
            digit={s1}
          />
          <DigitalDigit
            height={height}
            width={digitWidth}
            x={5 * digitWidth + 3 * spacing + 2 * colonWidth}
            digit={s2}
          />
        </React.Fragment>
      )}
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
  showSeconds: PropTypes.bool,
};

DigitalClock.defaultProps = {
  time: null,
  width: 235,
  height: 100,
  showSeconds: false,
};

export default DigitalClock;
