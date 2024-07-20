import styled from "styled-components";
import {IconProps} from "./AppIcon";


export const IconCircle =  styled.div<IconProps>`
  width: ${props => props.$size ?? '45px'};
  height: ${props => props.$size ?? '45px'};
  border-radius: 50%;
  border: ${props => props.$border ?? ''};
  background-color: ${props => props.$bgColor ?? 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 20px;
  cursor: pointer;
`