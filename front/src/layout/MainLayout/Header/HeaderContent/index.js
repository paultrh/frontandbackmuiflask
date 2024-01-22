// material-ui
import {useMediaQuery } from '@mui/material';


// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  console.log(matchesXs)
  return (
    <>
    </>
  );
};

export default HeaderContent;
