import {
  EffectComposer,
  DepthOfField,
  Noise,
} from "@react-three/postprocessing";

const _ = () => {
  return (
    <EffectComposer disableNormalPass>
      <DepthOfField
        focusDistance={3} // where to focus
        focalLength={0.02} // focal length
        bokehScale={2} // bokeh size
      />
      <Noise opacity={0.05} />
    </EffectComposer>
  );
};

export default _;
