import React from 'react';
import clsx from 'clsx';
import useStyles from './Sidebarstyle';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//menubar
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
//searchbar
import SearchBar from 'material-ui-search-bar';



const Sidebar=() => {
const classes = useStyles();
//   const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //menubar
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const openmenu2 = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);}

    const handleClose2 = () => {
      setAnchorEl(null);}

  return (

  
  
<div className={classes.root}>
    
    
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
           Drawer
          </Typography> */}
          {/* menubar here */}
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
  All Categories
</Button>
<Menu
  id="fade-menu"
  anchorEl={anchorEl}
  keepMounted
  open={openmenu}
  onClose={handleClose}
  TransitionComponent={Fade}
>
  <MenuItem onClick={handleClose}>Fabel</MenuItem>
  <MenuItem onClick={handleClose}>Fantasy</MenuItem>
  <MenuItem onClick={handleClose}>Horrr</MenuItem>
</Menu>
{/* end menubar */}
{/* menubar 2 */}
<Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick2}>
  All Times
</Button>
<Menu
  id="fade-menu"
  anchorEl2={anchorEl}
  keepMounted
  open2={openmenu2}
  onClose2={handleClose2}
  TransitionComponent2={Fade}
>
  <MenuItem onClick={handleClose2}>2019</MenuItem>
  <MenuItem onClick={handleClose2}>2018</MenuItem>
  <MenuItem onClick={handleClose2}>2017</MenuItem>
</Menu>
{/* end menubar 2 */}
{/* Searchbar */}
<SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
       <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
              <MenuIcon/>
        </IconButton>
        </div>
        <Divider />
        <List>
          {['Explore', 'History', 'Add Book'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

 export default Sidebar; 