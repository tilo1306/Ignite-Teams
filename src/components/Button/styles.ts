import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SEGUNDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-width: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: theme.FONT_SIZE.MD}px;
    color: theme.COLORS.WHITE};
    font-family: theme.FONT_FAMILY.BOLD};
  `}
`;
