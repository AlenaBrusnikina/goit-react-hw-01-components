import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  Img,
  ParagraphName,
  Paragrap,
  ListStats,
  Items,
  LabelItem,
  QuantityItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Wrapper>
        <Img src={avatar} alt="User avatar" />
        <ParagraphName>{username}</ParagraphName>
        <Paragrap>@{tag}</Paragrap>
        <Paragrap>{location}</Paragrap>
      </Wrapper>
      <ListStats>
        <Items>
          <LabelItem>Followers:</LabelItem>
          <QuantityItem>{followers}</QuantityItem>
        </Items>
        <Items>
          <LabelItem>Views:</LabelItem>
          <QuantityItem>{views}</QuantityItem>
        </Items>
        <Items>
          <LabelItem>Likes:</LabelItem>
          <QuantityItem>{likes}</QuantityItem>
        </Items>
      </ListStats>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    })
  ),
};
