import React from "react";

import MaskedDiv from "../ui/masked-div";

export function MaksedDivBox() {
  return (
    <div className="items-between m-auto my-12 flex w-full flex-wrap justify-between gap-5">
      <MaskedDiv maskType="type-3" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://ik.imagekit.io/nexwebs/banner.mp4?updatedAt=1756527198680"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
    </div>
  );
}
