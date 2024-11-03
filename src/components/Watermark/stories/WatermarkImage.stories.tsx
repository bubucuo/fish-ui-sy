import React from "react";
import { Watermark } from "fish-ui-sy";

const Default: React.FC = () => (
  <Watermark
    height={30}
    width={130}
    image="https://wechatapppro-1252524126.cdn.xiaoeknow.com/appuwwsm6cl6690/image/b_u_6216026f4bce0_QSywwter/l5x3salznkgeuy.png?imageMogr2/thumbnail/454x/quality/80|imageMogr2/ignore-error/1"
    // image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div style={{ height: 500, zIndex: 10, position: "relative" }}>
      hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    </div>
    <div style={{ height: 500 }}>
      hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    </div>
  </Watermark>
);

export default Default;
