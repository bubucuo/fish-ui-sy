import { SeedToken } from "../interface";
import { HeightMapToken } from "../interface/maps";

const genControlHeight = (token: SeedToken): HeightMapToken => {
  const { controlHeight } = token;

  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25,
  };
};

export default genControlHeight;
