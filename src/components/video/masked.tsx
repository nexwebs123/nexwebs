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
            src="https://www.pexels.com/download/video/31575746/"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      {/* <MaskedDiv maskType="type-4" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069701/18069701-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-2" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv> */}
    </div>
  );
}
