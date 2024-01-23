import React, { useState, useEffect } from 'react';
// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //


const SamplePage3 = () => {
  const [monJson, setMonJson] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/dataframe')
      .then(response => response.json())
      .then(df_front => {
        setMonJson(df_front)
      });
  }, []);

  return (
    <MainCard title="Sample Card">
      <Typography variant="body2">
        Page 3
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: monJson.html }} />
    </MainCard>
  )
};

export default SamplePage3;
