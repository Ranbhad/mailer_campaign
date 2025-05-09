import React from 'react';
import ReactDOM from 'react-dom';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

class MuiSelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    return (
      <FormControl fullWidth>
        <InputLabel id="mui-select-label">Select</InputLabel>
        <Select
          labelId="mui-select-label"
          value={this.state.value}
          label="Select"
          onChange={this.handleChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default MuiSelectComponent;
