import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TypingContainer = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold36};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 8.9rem 0 9rem;
    line-height: 8rem;
    letter-spacing: normal;
    white-space: nowrap;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold26};
      padding: 0 3.4rem;
      line-height: 5.6rem;
      letter-spacing: normal;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.bold20};
      padding: 0 1.8rem;
      line-height: 4.2rem;
      letter-spacing: normal;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold16};
      padding: 0 1.4rem;
      line-height: 3.6rem;
      letter-spacing: normal;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 0 1rem;
    }
  `}
`;

export const TextRelative = styled.div`
  position: relative;
`;

interface MaskLineProps {
  isMaskLineIntersect: boolean;
}

export const MaskLine = styled.div<MaskLineProps>`
  ${({ isMaskLineIntersect }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: ${isMaskLineIntersect ? '0%' : '100%'};
    height: 100%;
    background: #000000;
    opacity: 0.9;
    transition: 2s linear;
  `}
`;
