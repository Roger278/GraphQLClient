import styled, { css } from 'styled-components';

export interface IButtonProps {
    isSelected?: boolean;
    altColor?: boolean;
    onClick?: (eventTypeId: number) => void;
}

export const GetButton = styled.button<IButtonProps>`
  font-size: 0.9rem;
  color: #04265a;
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 3px 10px;
  margin: 4px 6px 0 5px;
  
  ${({isSelected }) =>
    isSelected &&
    css`
      color: #04265a;
      background: #fff;
      border: 1px solid #ccc;
   `}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 5px;
    //position: relative;
    border-top: 1px solid #dde5cc;
    border-left: 1px solid #dde5cc;
    border-bottom: 1px solid #dde5cc;
    border-right: 1px solid #dde5cc;
`;

export const MainListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

export const ListHeadingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 35px;
    width: 600px;
    background: #D3D3D3;
    border-bottom: 1px solid #dde5cc;
`;

export const ListTitleWrapper = styled.div`
    display: flex;
    // text-align: center;
    // justify-content: space-between;
    // height: 35px;
    width: 600px;
    background: #D3D3D3;
    border-bottom: 1px solid #dde5cc;
`;

export const ListOuterWrapper = styled.div`
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 600px;
    position: relative;

    .list{
        height: calc(100% - 50px);
        overflow-y: auto;
        max-height: 100%;
    }    
`;

export interface IListProps {
    isColor?: boolean;
}

export const ListWrapper = styled.div<IListProps>`
    display: flex;
    width: 600px;
    height: 25px;
    position: relative;
  
    ${({isColor }) =>
    isColor &&
    css`
        background: #eff3f7;
   `}
`;

export interface IValProps {
    isNegative?: boolean;
}

export const CheckBoxWrapper = styled.div`
    .chkbox {
        width: 20px;
        height: 20px;
    }
`;

export const ItemWrapper1 = styled.div`
    display: flex;
    width: 400px;
    height: 100%;
    text-align: left;
    position: relative;
    margin-left: 10px;
    margin-top: 4px;
`;

export const ItemWrapper2 = styled.div`
    display: flex;
    width: 200px;
    height: 100%;
    text-align: left;
    position: relative;
    margin-top: 4px;
`;

