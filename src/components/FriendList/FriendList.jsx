import PropTypes from 'prop-types';
import {
  ContainerFriend,
  FriendCard,
  FriendCardStatus,
  FriendCardImg,
  FriendCardName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ContainerFriend>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendCard key={id}>
            <FriendCardStatus eventIsOnline={isOnline}>
              {isOnline}
            </FriendCardStatus>
            <FriendCardImg src={avatar} alt="User avatar" width="48" />
            <FriendCardName>{name}</FriendCardName>
          </FriendCard>
        );
      })}
    </ContainerFriend>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
