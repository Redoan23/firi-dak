
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Slide } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { IoHeartOutline, IoPersonOutline } from 'react-icons/io5';
import { LiaRingSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { GiLabCoat, GiRolledCloth } from 'react-icons/gi';
import { FaBars, FaMagnifyingGlass } from 'react-icons/fa6';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { BiLogOut } from 'react-icons/bi';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import MobileSearchResult from './MobileSearchResult/MobileSearchResult';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import useUserData from '../../../Hooks/useUserData/useUserData';

const style = {
    position: 'absolute',
    top: '0%',
    left: '0%',
    transform: 'translate(0%, 0%)',
    width: '290px',
    minHeight: '100%',
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid ',
    boxShadow: 24,
    p: 4,
};


const MobileNav = ({ openModal }) => {

    const axiosPublic = useAxiosPublic()
    const { user, logOut } = useAuth()
    const [userData] = useUserData()
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // modal part

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
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
            timer: 1000,
            showConfirmButton: false
        });
    }


    // search functionality

    const [searchText, setSearchText] = useState('')
    const [manualSearchData, setManualSearchData] = useState([])


    const handleSearch = () => {
        if (searchText === '') {
            setManualSearchData(null)
            return
        }
        axiosPublic.get(`/searchItem/${searchText}`)
            .then(res => {
                setManualSearchData(res.data)
            })
            .catch(err => {
                toast.error(`${err.message}`)
            })
    }

    const handleClear = () => {
        setManualSearchData([])
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            sx={{ overflowY: 'auto', minHeight: '100vw', height: 'auto' }}
        >
            <Slide direction='right' in={open} mountOnEnter unmountOnExit>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {/* Text in a modal */}
                        <div className=' relative '>
                            <input
                                type="text"
                                onChange={(e) => setSearchText(e.target.value)}
                                name="search"
                                id="search"
                                className=' w-44 rounded-md bg-gray-100 border-none outline-none text-sm p-2'
                                placeholder=' search here... '
                            />
                            <Link onClick={handleSearch}>
                                <FaMagnifyingGlass className=' absolute top-2 right-4 text-orange-600' />
                            </Link>
                            <div className=''>
                                {manualSearchData.length > 0 &&
                                    < button onClick={handleClear}
                                        className=' mt-1 flex justify-end text-red-500 absolute -right-4 top-1 text-[22px]'
                                    >
                                        <CgClose />
                                    </button>
                                }
                                <MobileSearchResult searchData={manualSearchData} onClear={handleClear} />
                            </div>
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
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} to={'/wishlistDetails'}> <IoHeartOutline /> WISHLIST</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex  items-center gap-2'} to={'/login'}> <IoPersonOutline /> LOGIN / REGISTER</NavLink>
                                    {
                                        userData?.role === 'admin' &&
                                        <NavLink className={' border-b py-2 my-1 flex  items-center gap-2'} to={'/dashboard/adminHome'}> <FaBars/>Dashboard</NavLink>
                                    }
                                    {
                                        user && <NavLink onClick={handleLogout} className={'flex items-center py-2 my-1 gap-2'}> <BiLogOut /> LOGOUT</NavLink>
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className=' flex flex-col text-black text-sm'>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} onClick={handleUpcomingNotification}> SPECIAL DISCOUNT PRODUCTS</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} to={'/'}> < LiaRingSolid /> Bangles</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} onClick={handleUpcomingNotification}> <GiLabCoat /> Kurtis</NavLink>
                                    <NavLink className={' border-b py-2 my-1 flex items-center gap-2'} onClick={handleUpcomingNotification}> <GiRolledCloth /> Shari</NavLink>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Typography>
                </Box>
            </Slide>
        </Modal >
    )
};

export default MobileNav;