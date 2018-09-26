import React, { Component } from 'react';
import { connect } from 'react-redux';
import InventorySlot from './InventorySlot';

export const shelfRows = 5;
export const shelfCols = 5;

class InventoryShelf extends Component {
  renderShelfCols = (row) => {
    const {
      selectedShoe,
      shoes
    } = this.props;
    const cols = [];

    for (let col = 0; col < shelfRows; col++) {
      // Get data for the shoe at this index and column
      const shoeIndex = (col + 1) + (row * shelfCols);
      const shoeData = shoes[shoeIndex];
      cols.push(
        <InventorySlot key={col} id={shoeIndex} {...shoeData} selected={selectedShoe === shoeIndex} />
      );
    }

    return cols;
  }

  renderShelfRows = () => {
    const rows = [];

    for (let row = 0; row < shelfRows; row++) {
      rows.push(
        <div className="Inventory-row" key={row}>
          { this.renderShelfCols(row) }
        </div>
      );
    }

    return rows;
  }

  render() {
    return (
      <div className="Inventory">
        { this.renderShelfRows() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedShoe: state.selectedShoe,
  shoes: state.shoes
});

export default connect(mapStateToProps)(InventoryShelf);
