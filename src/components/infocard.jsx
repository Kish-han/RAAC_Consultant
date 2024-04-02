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
export default function Infocard({ icon, short, title, long, num }) {
    const [expanded, setExpanded] = React.useState(false);


    return (
        <Card sx={{ maxWidth: 280, paddingTop: 3, borderBottomRightRadius: 25, borderTopLeftRadius: 25, backgroundColor: "#EBF3F5" }}>
            <div className='relative h-full'>
                <p className='absolute h-[45px] w-[40px] left-0 -top-6 bg-[#253880] text-white font-bold px-2 py-2 text-center'>{num}</p>
                <img src={icon} alt="accounting" className='mx-auto w-[120px]' />
                {!expanded ? <div>
                    <CardContent>
                        <p className='text-[20px] text-center font-bold'>
                            {title}
                        </p>
                        <p color="text.secondary" className='text-[16px] text-center px-2 mt-2'>
                            {short}
                        </p>
                        <div className='text-center'>
                            <p className='text-[12px] mt-4 text-gray-700 text-center mx-auto cursor-pointer font-semibold' onClick={() => { setExpanded(true) }}>
                                Read more
                            </p>
                        </div>
                    </CardContent>
                </div> : <div>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <p className='text-[20px] text-center font-bold'>
                                {title}
                            </p>
                            <p className='text-[16px] px-4 text-center mt-2'>
                                {long}
                            </p>
                            <p className='text-[12px] mt-4 text-gray-700 text-center mx-auto cursor-pointer font-semibold' onClick={() => { setExpanded(false) }}>
                                Read less
                            </p>
                        </CardContent>
                    </Collapse>
                </div>}
            </div>
        </Card>
    );
}