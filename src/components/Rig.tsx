import { useFrame } from "@react-three/fiber";

const _ = () => {
  useFrame(({ camera }) => {
    camera.lookAt(3, 0, 3);
  });

  return null;
};

export default _;