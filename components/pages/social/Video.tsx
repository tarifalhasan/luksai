"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useState } from "react";

const SocaialVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  return (
    <div className=" px-4 pb-12 lg:-mt-[18rem] max-w-[800px] block mx-auto">
      <AspectRatio
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        ratio={16 / 9}
      >
        {!videoLoaded && (
          <Image
            src={"/images/social/session-2/play.webp"}
            alt="Play Video"
            className="w-full rounded-lg h-full cursor-pointer"
            width={800}
            height={452}
            onClick={handleVideoLoad}
            loading="eager"
            quality={80}
          />
        )}
        {videoLoaded && (
          <iframe
            src="https://www.youtube.com/embed/VPd0wEAVdPE?si=DxRoVFAollopShz6&autoplay=1" // Ensure autoplay is on
            width="560"
            height="315"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Mindgrasp Promo Video"
            className="w-full rounded-lg h-full"
          ></iframe>
        )}
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VPd0wEAVdPE?si=DxRoVFAollopShz6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      </AspectRatio>
    </div>
  );
};

export default SocaialVideo;
