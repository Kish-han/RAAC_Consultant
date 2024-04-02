/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

// eslint-disable-next-line react/prop-types
export default function Servecard({ icon, short, title, long }) {
    const [expanded, setExpanded] = React.useState(false);


    return (
        <Card sx={{ maxWidth: 320, paddingTop: 3, borderRadius: 2, backgroundColor: "#FFFFFF" }}>
            <div className='relative h-full'>
                <img src={icon} alt="accounting" className='w-[180px] pl-4' />
                {!expanded ? <div>
                    <CardContent>
                        <p className='text-[20px] text-left font-bold'>
                            {title}
                        </p>
                        <p color="text.secondary" className='text-[16px] text-left mt-2'>
                            {short}
                        </p>
                        <div className='text-left'>
                            <p className='text-[12px] mt-4 text-gray-700 hover:text-gray-500 text-left cursor-pointer font-semibold' onClick={() => { setExpanded(true) }}>
                                Read more
                            </p>
                        </div>
                    </CardContent>
                </div> : <div>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <p className='text-[20px] text-left font-bold'>
                                {title}
                            </p>
                            <p className='text-[16px] text-left mt-2'>
                                {long}
                            </p>
                            <p className='text-[12px] mt-4 text-gray-700 hover:text-gray-500 text-left mx-auto cursor-pointer font-semibold' onClick={() => { setExpanded(false) }}>
                                Read less
                            </p>
                        </CardContent>
                    </Collapse>
                </div>}
            </div>
        </Card>
    );
}