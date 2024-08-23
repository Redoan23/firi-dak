import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Slide } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { IoHeartOutline, IoPersonOutline } from 'react-icons/io5';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { PiHoodieLight } from 'react-icons/pi';
import { GiSquareBottle } from 'react-icons/gi';
import { CiShirt } from 'react-icons/ci';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { BiLogOut } from 'react-icons/bi';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '0%',
    left: '0%',
    transform: 'translate(0%, 0%)',
    width: '280px',
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid ',
    boxShadow: 24,
    p: 4,
};


const MobileNav = ({ openModal }) => {

    const { user, logOut } = useAuth()
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // modal part

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        handleOpen()
    }, [openModal])

    const handleLogout = () => {
        return logOut()
    }

    // notification for empty category
    const handleUpcomingNotification = () => {
        return Swal.fire({
            title: "Upcoming soon",
            icon: "info",
            position: "top-end",
            timer:1000,
            showConfirmButton:false
        });
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
        >
            <Slide direction='right' in={open} mountOnEnter unmountOnExit>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {/* Text in a modal */}
                        <div className=' relative '>
                            <input type="text" name="search" id="search" className=' w-44 rounded-md bg-gray-100 border-none outline-none text-sm p-2' placeholder=' search here... ' />
                            <FaMagnifyingGlass className=' absolute top-2 right-0 text-orange-600' />
                        </div>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
                                    '& .MuiTabs-indicator': {
                                        backgroundColor: '#d3581d',
                                    },
                                    '& .MuiTab-root': {
                                        color: 'inherit',
                                        '&.Mui-selected': {
                                            color: '#d3581d',
                                        },
                                    },
                                }} className=' text-black '>
                                    <Tab label="Menu" value="1" />
                                    <Tab label="Category" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className=' flex flex-col text-black text-sm'>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} to={'/shop'}> <LiaShoppingBagSolid /> SHOP</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} to={'/shop'}> <IoHeartOutline /> WISHLIST</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex  items-center gap-2'} to={'/login'}> <IoPersonOutline /> LOGIN / REGISTER</NavLink>
                                    {user && <NavLink onClick={handleLogout} className={'flex items-center py-2 my-1 gap-2'}> <BiLogOut /> LOGOUT</NavLink>}
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className=' flex flex-col text-black text-sm'>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} onClick={handleUpcomingNotification}> SPECIAL DISCOUNT PRODUCTS</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} onClick={handleUpcomingNotification}> <GiSquareBottle /> ATTAR</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} onClick={handleUpcomingNotification}> <CiShirt /> T-SHIRT</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} onClick={handleUpcomingNotification}> <PiHoodieLight /> HOODIE</NavLink>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Typography>
                </Box>
            </Slide>
        </Modal>
    )
};

export default MobileNav;