import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
import { chakra } from "@chakra-ui/react";

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

export const waveAnimation = (length) => css`
  animation: ${wave} ${length} linear;
  animation-direction: alternate; // 🐞 safari has a bug this does not work
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`;

export const ChInnerWave = chakra(InnerWave);
