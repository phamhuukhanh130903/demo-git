import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields() {
    return (
        <Box
            component="form" sx={{'& > :not(style)': { m: 1, width: '10ch' },}}
            noValidate
            autoComplete="off">
            <TextField style={{width:'250px'}} size='small'   id="outlined-basic" label="Name" variant="outlined" />
        </Box>
    );
}