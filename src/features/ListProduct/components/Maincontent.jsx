import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import "../asset/css/mainContent.scss";

export default function Maincontent() {
  return (
    <div className='app__main'>
      <LeftContent />
      <RightContent />
    </div>
  );
}
