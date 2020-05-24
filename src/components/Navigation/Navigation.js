import React, { Fragment, useState, memo } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MainHeader from '../MainHeader/MainHeader';
import ListItemLink from '../ListItemLink/ListItemLink';

function Navigation() {
  const [ drawer, toggleDrawer ] = useState( false );

  return (
    <Fragment>
      <MainHeader toggleDrawer={ () => toggleDrawer( true ) } />
      <SwipeableDrawer
        anchor={'left'}
        open={drawer}
        onClose={() => toggleDrawer( false )}
        onOpen={() => toggleDrawer( true )}
      >
        <List aria-label="main mailbox folders">
          <ListItemLink to="/inbox" primary="Inbox" icon={<InboxIcon />} />
          <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
        </List>
        <Divider />
        <List aria-label="secondary mailbox folders">
          <ListItemLink to="/trash" primary="Trash" />
          <ListItemLink to="/spam" primary="Spam" />
        </List>
      </SwipeableDrawer>
    </Fragment>
  )
}

export default memo( Navigation );
