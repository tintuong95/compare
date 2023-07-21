"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import 'react-html5-camera-photo/build/css/index.css';
const BaseCamera = (props) => {
  const [visible, setVisible] = useState(true);

  function handleTakePhoto(dataUri) {
    props.cb(dataUri);
    setVisible(true);
  }
  return (
    <>
      {!visible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   z-40 ">
          <Camera
            isImageMirror={true}
            isSilentMode={false}
            idealResolution = {{width: 1640, height: 1080}}
            isDisplayStartCameraError={true}
            sizeFactor={1}
            isFullscreen={false}
            imageType={IMAGE_TYPES.JPG}
            idealFacingMode={FACING_MODES.ENVIRONMENT || FACING_MODES.USER}
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
        </div>
      )}

      <button
        className="border border-gray-600 px-3 py-1 flex gap-2 items-center rounded-sm hover:bg-gray-400 hover:text-white transition-all ease-in-out"
        onClick={() => {
          setVisible(false);
        }}
      >
        Camera <Image src={require("../assets/icons/camera.svg")} width={18} />
      </button>
    </>
  );
};

export default BaseCamera;