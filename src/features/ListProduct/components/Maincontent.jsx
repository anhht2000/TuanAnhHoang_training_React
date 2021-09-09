import React, { useState } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import "../asset/css/mainContent.scss";

export default function Maincontent() {
  const [IshowFilter, setIshowFilter] = useState(false);
  return (
    <div className='app__main' onClick={() => setIshowFilter(!IshowFilter)}>
      <LeftContent isShow={IshowFilter} handle={setIshowFilter} />
      <div className='app__main-icon'>
        <i
          className='fas fa-filter'
          onClick={() => {
            setIshowFilter(!IshowFilter);
          }}
        ></i>
      </div>
      <RightContent />
    </div>
  );
}
