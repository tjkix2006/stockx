import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { selectShoe } from '../modules/shoes/actions';

class InventorySlot extends PureComponent {
  handleClick = () => {
    this.props.selectShoe(this.props.id);
  }

  render() {
    const {
      brand,
      selected,
      size,
      style
    } = this.props;

    return (
      <div className={classNames({ 'Inventory-slot': true }, { selected })} onClick={this.handleClick}>
        { brand && size && style ? (
          <div>
            <div className="Slot-title">
              { `${brand} ${style}` }
            </div>
            <div className="Slot-size">
              { `Size ${size}` }
            </div>
          </div>
        ) : (
          <div>
            N/A
          </div>
        )}
      </div>
    );
  }
}

InventorySlot.propTypes = {
  id: PropTypes.number,
  brand: PropTypes.string,
  selected: PropTypes.bool,
  size: PropTypes.string,
  style: PropTypes.string,
  UPC: PropTypes.string
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectShoe
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(InventorySlot);
