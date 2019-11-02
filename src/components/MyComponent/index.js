import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

import CustomList from './CustomList';

/*
  Welcome developer! Please fully customize this component as needed.
*/
const useStyles = makeStyles(theme => ({
  container: {
    width: '100%'
  },
  textField: {
    width: '40%',
    padding: theme.spacing(1),
    display: 'block',
    width: 200,
    color: 'rgba(0, 0, 0, 0.87)'
  }
}));

const MyComponent = () => {
  const classes = useStyles();

  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    e.preventDefault();

    setInputText(e.target.value);
  };

  const handleClickEnter = e => {
    if (e.key === 'Enter' && !!inputText) {
      setList([inputText, ...list]);
      setInputText('');
    }
  };

  return (
    <div className={classes.container} noValidate autoComplete="off">
      <TextField
        className={classes.textField}
        margin="normal"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleClickEnter}
        placeholder="Enter Todo..."
      />
      <CustomList list={list} />
    </div>
  );
};
export default MyComponent;
