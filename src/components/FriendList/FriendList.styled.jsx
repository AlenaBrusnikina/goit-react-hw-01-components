import styled from '@emotion/styled';
import { setBgColor } from 'components/Utils/setBgColor';

export const ContainerFriend = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const FriendCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 28px;
  border: 1px solid #d8e4e2;
  margin-right: 30px;

  background-color: #f6efef;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  &:last-child {
    margin-right: 0;
  }
`;

export const FriendCardStatus = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;

export const FriendCardImg = styled.img`
  display: block;
  max-width: 100%;
  margin-top: 15px;
`;

export const FriendCardName = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-top: 5px;
`;
