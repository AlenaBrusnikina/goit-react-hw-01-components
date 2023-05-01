import styled from '@emotion/styled';
import { getRandomHexColor } from 'components/Utils/getRandomHexColor';

export const SectionStatic = styled.section`
  margin: 0 auto;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  margin-top: 15px;
`;

export const StatItem = styled.li`
  padding: 25px;
  border: 1px solid #d8e4e2;
  background-color: ${getRandomHexColor};
`;
