import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FormInput extends PureComponent {
  render() {
    const {
      error,
      label,
      touched,
      ...inputProps
    } = this.props;

    return (
      <div className="form-input">
        <label>
          { label }
          <input {...inputProps} />
        </label>
        <span className="error">
          { !! error && touched && error }
        </span>
      </div>
    );
  }
}

FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool
};

export default FormInput;
