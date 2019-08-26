import React from "react";
import { Button } from "antd";

const ExportButton = ({exportTable}) => {
  return(
    <Button onClick={exportTable} type="primary" shape="round" icon="download" size={"default"}>
      Export
    </Button>
  );
};

export default ExportButton;