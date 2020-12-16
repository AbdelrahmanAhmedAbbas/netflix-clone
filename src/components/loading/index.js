import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <React.Fragment>
      <Spinner>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
      </Spinner>
    </React.Fragment>
  );
}

Loading.ReleaseBody = function loadingReleaseBody() {
  return <ReleaseBody />;
};
