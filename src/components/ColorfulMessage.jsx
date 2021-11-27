import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  // スタイルの定義
  const contentStyle = {
    // 要素名と値が同じ場合は一つにまとめることができる
    // color: color,
    color,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
