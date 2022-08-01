import React from "react";
export const InputFurigana = (props) => {
  const {furigana} = props;
  return (
    <div className="input-furigana">
      <input type="text" placeholder="Furigana"  value={furigana}/>
    </div>
  )
}
