import React, { Component } from "react";

const withTimeNow = (interval = 500) => WrappedComponent =>
  class TimeProvider extends Component {
    constructor(props) {
      super(props);

      this.timeout;
      this.state = {
        timeNow: new Date(),
      };

      this.getTimeToNextTick = this.getTimeToNextTick.bind(this);
      this.scheduleTick = this.scheduleTick.bind(this);
    }

    getTimeToNextTick(date) {
      return interval - date.getMilliseconds() % interval;
    }

    scheduleTick() {
      this.timeout = setTimeout(() => {
        this.setState({
          timeNow: new Date(),
        });

        this.scheduleTick();
      }, this.getTimeToNextTick(this.state.timeNow));
    }

    componentDidMount() {
      this.scheduleTick();
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    render() {
      const { timeNow } = this.state;
      return <WrappedComponent time={timeNow} {...this.props} />;
    }
  };

export default withTimeNow;
