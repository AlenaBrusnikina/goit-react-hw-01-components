import PropTypes from 'prop-types';
import { SectionStatic, StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatic>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </SectionStatic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
