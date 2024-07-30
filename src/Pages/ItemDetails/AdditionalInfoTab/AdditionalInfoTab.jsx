import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const AdditionalInfoTab = ({ itemInfo }) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{
            width: '80%', typography: 'body1',
            margin: 'auto',
            minHeight:'200px'

        }}>
            <div>
                <TabContext value={value}>
                    <Box sx={{
                        borderBottom: 0,
                        borderColor: 'divider',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: "center",
                        width: '100%',
                        '& .MuiTab-root': {
                            color: 'inherit',
                            '&.Mui-selected': {
                                color: '#E96406',
                            }
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#E96406',
                        }
                    }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Additional Information" value="1" />
                            <Tab label="Reviews" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">

                        <p><span className=' text-gray-700 font-semibold text-xl'>Weight :</span> {itemInfo.weight} g</p>
                        <p> <span className=' text-gray-700 font-semibold text-xl'>Size Available :</span> {itemInfo.size}</p>

                    </TabPanel>
                    <TabPanel value="2">Reviews</TabPanel>
                </TabContext>
            </div>
        </Box>
    );
};

export default AdditionalInfoTab;