import styled from '@emotion/styled';

export const ContainerTable = styled.table`
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

export const WrapperTable = styled.thead`
  background-color: #210faa;
`;

export const TitleTable = styled.tr`
  color: white;
  height: 50px;
  text-transform: uppercase;
`;

export const SubtitleTable = styled.th`
  padding: 8px;
  width: 180px;
  border: 1px solid #575757;
`;

export const BodyTable = styled.tbody`
  background-color: #bcbbcc;
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #94b0f5;
  }
`;
