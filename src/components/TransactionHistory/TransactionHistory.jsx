import PropTypes from 'prop-types';
import {
  ContainerTable,
  WrapperTable,
  TitleTable,
  SubtitleTable,
  TableRow,
  BodyTable,
} from './TransactionHistory.styled';
import transactions from './transactions.json';

export const TransactionHistory = () => {
  return (
    <ContainerTable>
      <WrapperTable>
        <TitleTable>
          <SubtitleTable>Type</SubtitleTable>
          <SubtitleTable>Amount</SubtitleTable>
          <SubtitleTable>Currency</SubtitleTable>
        </TitleTable>
      </WrapperTable>
      <BodyTable>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <SubtitleTable>{type}</SubtitleTable>
              <SubtitleTable>{amount}</SubtitleTable>
              <SubtitleTable>{currency}</SubtitleTable>
            </TableRow>
          );
        })}
      </BodyTable>
    </ContainerTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
