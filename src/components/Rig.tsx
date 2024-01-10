import { useFrame } from "@react-three/fiber";

const _ = () => {
  useFrame(({ camera }) => {
    camera.lookAt(5, 0, 0);
    camera.rotation.y += 0.01;
  });

  return null;
};

export default _;