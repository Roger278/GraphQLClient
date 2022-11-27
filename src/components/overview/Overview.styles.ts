import styled, {css} from "styled-components";

export interface IButtonProps {
  isSelected?: boolean;
  onClick?: (id: number) => void;
}

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  //height: 50px;
  width: 100%;
  padding: 0;
  background: #add8e6;
  color: #2e4004;
  border-bottom: 1px solid #dde5cc;
`;

export const BottomWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

