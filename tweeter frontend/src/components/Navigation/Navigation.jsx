import React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'



const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const navigate = useNavigate(); // Call useNavigate as a function
    const handleLogout=()=>{
        console.log("logout")
        handleClose()
    }

    return (
       <div className='h-screen sticky top-0'>
         <div className='py-5'>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJT5r1ohMoaWegz5MRd-pZPJ0zV94zvIeBks4CaK3sK6cp-UuPbqrZFIwrIXHsWPm_YT0&usqp=CAU" 
              alt="" 
              height={20} 
              width={30} 
            />
        </div>
        <div className='space-y-6'>
        {navigationMenu.map((item) => (
            <div 
              key={item.title} // Add a unique key for each item
              className='cursor-pointer flex space-x-3 items-center' 
              onClick={() => 
                item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)
              }
            >
              {item.icon}
              <p className='text-xl'>{item.title}</p>
            </div>
        ))}
        </div>
        <div className='py-10'>
            <Button
            sx={{width:"100%",borderRadius: "29px",py:"15px",bgcolor:'#1e88e5'}}
            variant='contained'>
            Tweet
            </Button>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
<Avatar
alt='Username'
src='https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg'/>
<div>
    <span>Vrushali</span>
    <span className='opacity-70'>@explorer with vrushali</span>
</div>

<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon></MoreHorizIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

            </div>
        </div>
        
       </div>
    );
}

export default Navigation;
