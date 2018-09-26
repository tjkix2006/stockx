import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';
import { selectedShoe } from '../modules/shoes/utils';
import { addShoe, removeShoe } from '../modules/shoes/actions';
import FormInput from './FormInput';

class InventoryForm extends Component {
  removeShoe = () => {
    this.props.removeShoe();
  }

  render() {
    const { selectedShoe } = this.props;
    
    return (
      <div className="Inventory-form">
        { selectedShoe === null ?
          <p>No slot selected</p>
        :
          <div>
            <button onClick={this.removeShoe}>Remove shoe</button>
            <Formik
              ref={c => this.inventoryForm = c}
              enableReinitialize={true}
              initialValues={Object.assign({}, { brand: '', style: '', size: '', UPC: '' }, this.props.selectedShoe)}
              validate={values => {
                let errors = {};

                const validateField = (field) => {
                  if (! values[field]) {
                    errors[field] = 'Required';
                  }
                };

                validateField('brand');
                validateField('style');
                validateField('size');
                validateField('UPC');
                
                return errors;
              }}
              onSubmit={(values) => {
                this.props.addShoe(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
                /* and other goodies */
              }) => {
                const renderFormElement = (field, label) => (
                  <FormInput 
                    type="text"
                    name={field}
                    label={label}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[field]}
                    error={errors[field]}
                    touched={touched[field]}
                  />
                );

                return (
                  <form onSubmit={handleSubmit}>
                    {renderFormElement('brand', 'Brand')}
                    {renderFormElement('style', 'Style')}
                    {renderFormElement('size', 'Size')}
                    {renderFormElement('UPC', 'UPC')}
                    <button type="submit">
                      Submit
                    </button>
                  </form>
                );
              }}
            </Formik>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedShoe: selectedShoe(state),
  selectedShoeId: state.selectedShoe
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addShoe,
    removeShoe
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryForm);
