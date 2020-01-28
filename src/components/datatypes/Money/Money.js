import React from 'react';
import PropTypes from 'prop-types';

const Money = props => {
  const { fhirData } = props;
  const { value, code } = fhirData;

  return (
    <span className="fhir-datatype__Money">
      {Number.isFinite(value) ? value : null}
      &nbsp;
      {code || null}
    </span>
  );
};

Money.propTypes = {
  fhirData: PropTypes.shape({
    value: PropTypes.number,
    code: PropTypes.string,
  }).isRequired,
};

export default Money;
