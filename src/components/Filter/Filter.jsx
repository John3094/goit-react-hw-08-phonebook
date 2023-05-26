import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterName } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <label>
        <FilterName>Find contacts by name</FilterName>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        ></input>
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
