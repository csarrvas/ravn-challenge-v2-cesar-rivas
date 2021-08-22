import { css, FlattenSimpleInterpolation } from 'styled-components';
import colors from 'styles/variables/colors';

export const headerText = (): FlattenSimpleInterpolation => css`
  color: ${colors.textGray};
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2rem;
`;

export const defaultBold = (): FlattenSimpleInterpolation => css`
  color: ${colors.textDark};
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2rem;
`;

export const lowEmphasisBold = (): FlattenSimpleInterpolation => css`
  color: ${colors.textLight};
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2rem;
`;

export const highEmphasis = (): FlattenSimpleInterpolation => css`
  color: ${colors.textEmphasis};
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2rem;
`;

export const defaultNormal = (): FlattenSimpleInterpolation => css`
  color: ${colors.textDark};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7rem;
`;

export const lowEmphasisNormal = (): FlattenSimpleInterpolation => css`
  color: ${colors.textLight};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7rem;
`;
