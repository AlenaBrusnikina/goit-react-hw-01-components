import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #f6efef;
  width: 300px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  border: 1px solid #d8e4e2;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid #575757;
  border-radius: 50%;
  height: 200px;
  background-color: white;
`;

export const ParagraphName = styled.p`
  font-size: 22px;
  font-weight: 700;
  padding: 10px;
`;

export const Paragrap = styled.p`
  color: #575757;
`;

export const ListStats = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  border-top: 2px solid #e1dddd;
  border-right: none;
`;

export const Items = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 5px;
  width: 100%;
  border-right: 2px solid #e1dddd;

  &:last-child {
    border-right: none;
  }
`;

export const LabelItem = styled.span`
  color: #575757;
`;

export const QuantityItem = styled.span`
  font-weight: 500;
  padding-top: 8px;
`;
