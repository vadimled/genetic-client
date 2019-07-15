import React from "react";
import * as Sentry from "@sentry/browser";

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundaries;
