import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


const offers = () => {
    const [open, setOpen] = React.useState(true);
    

  return (
      <>
        <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
         color="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{  }}
        >
          All books have been verififed, if anything goes wrong during the purchase make sure to contact our customer support.
        </Alert>
      </Collapse>
    </Box>
      </>
  );
};

export default offers;
