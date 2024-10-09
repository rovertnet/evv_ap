import { Button } from "@mui/material";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";



export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="header fixed top-0 right-0 bg-white py-4 z-[100] flex justify-between items-cente p-5">
        <div className="searchBox w-[300px] h-[40px]">
          <FaSearch className=" absolute top-7 left-8 z-[10] cursor-pointer" />
          <input
            type="text"
            className="w-full h-full px-9 "
            placeholder="Recherche..."
          />
        </div>
        <div className="ml-auto part2">
          <ul className="flex justify-center items-center gap-3">
            <li>
              <Button>
                <IoMdMail size={30} />
              </Button>
            </li>

            <li>
              <Button>
                <FaBell size={30} />
              </Button>
            </li>

            <li>
              <Button onClick={handleClick}>
                <FaUserCircle size={30} />
              </Button>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> Mon compte
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Ajouter un autre compte
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Parametre     
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Déconnecter
                </MenuItem>
              </Menu>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
