import React, { useState, useEffect } from 'react';
// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //


const SamplePage = () => {
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
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
        in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
        descent molls anim id est labours.
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: monJson.html }} />
    </MainCard>
  )
};

export default SamplePage;
