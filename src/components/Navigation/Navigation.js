import React, { Fragment, useState, memo } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import StoreIcon from '@material-ui/icons/Store';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MainHeader from '../MainHeader/MainHeader';
import NavigationListItemLink from '../NavigationListItemLink/NavigationListItemLink';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    paddingTop: '50px',
    width: 250,
  }
});

function Navigation() {
  const [ drawer, toggleDrawer ] = useState( false );
  const classes = useStyles();

  return (
    <Fragment>
      <MainHeader toggleDrawer={ () => toggleDrawer( true ) } />
      <SwipeableDrawer
        anchor={'left'}
        open={drawer}
        onClose={() => toggleDrawer( false )}
        onOpen={() => toggleDrawer( true )}
      >
        <List className={classes.list} aria-label="main mailbox folders">
          <NavigationListItemLink to="/pedidos" primary="Pedidos" icon={<StoreIcon />} />
          <NavigationListItemLink to="/produtos" primary="Produtos" icon={<LocalMallIcon />} />
        </List>
        <Divider />
        <List aria-label="secondary mailbox folders">
          <NavigationListItemLink to="/login" primary="Log out" />
        </List>
      </SwipeableDrawer>
    </Fragment>
  )
}

export default memo( Navigation );
