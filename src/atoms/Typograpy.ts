import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

type Props = {
  style?: React.CSSProperties
  color?: string,
  lineHeight?: string,
  margin?: string,
  fontWeight?: 'R' | 'M' | 'SB' | 'B'
}

const Typography = {
  Heading: styled.p<Props>`
    font-size: ${theme.fontSize.Heading};
    font-weight:${theme.fontWeight.SemiBold};
    letter-spacing: -2%;
    line-height: 120%;
    color: ${(props) => props.color ? props.color : theme.color.Text_Default};
  `,
  SubHeading: styled.p<Props>`
      font-size: ${theme.fontSize.SubHeading};
      font-weight:${theme.fontWeight.Regular};
      letter-spacing: 0;
      line-height: 120%;
      color: ${(props) => props.color ? props.color : theme.color.Text_Default};
  `,
  BodyStrong: styled.p<Props>`
    font-size: ${theme.fontSize.BodyStrong};
    font-weight:${theme.fontWeight.SemiBold};
    letter-spacing: 0;
    line-height: 140%;
    color: ${(props) => props.color ? props.color : theme.color.Text_Default};
`,
  BodySmall: styled.p<Props>`
  font-size: ${theme.fontSize.BodySmall};
  font-weight:${theme.fontWeight.Regular};
  letter-spacing: 0;
  line-height: 140%;
  color: ${(props) => props.color ? props.color : theme.color.Text_Default};
  `,
}

export default Typography;