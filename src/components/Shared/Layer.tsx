import React from "react";
import { FC } from "react-dom/node_modules/@types/react";

interface IProps {
  ulDisplay: () => React.CSSProperties;
}
const Layer: FC<IProps> = ({ ulDisplay }) => {
  return <div className="layer" style={ulDisplay()}></div>;
};

export default Layer;
