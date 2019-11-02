import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  text: {
    textDecoration: 'line-through'
  }
}));

export default ({ list }) => {
  const classes = useStyles();

  const [selectedItems, setSelectedItems] = useState({});

  const handleClick = idx => {
    setSelectedItems({
      ...selectedItems,
      [idx]: !selectedItems[idx]
    });
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary folders">
        {list.map((item, idx) => (
          <ListItem button onClick={() => handleClick(idx)}>
            <ListItemText
              primary={item}
              className={selectedItems[idx] && classes.text}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
