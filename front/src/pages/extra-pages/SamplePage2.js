import React, { useState, useEffect } from 'react';
// material-ui
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //
function DataTable({data}) {
  const { chart, cols } = data;
  const { datasets, labels } = chart;

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {cols.map((col, index) => (
              <TableCell key={index}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {labels.map((label, rowIndex) => (
            <TableRow key={rowIndex}>
              {datasets.map((dataset, colIndex) => (
                <TableCell key={colIndex}>{dataset.data[rowIndex]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

const SamplePage2 = () => {
  const [monJson, setMonJson] = useState({});
  const [monJsonChart, setMonJsonChart] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/dataframe')
      .then(response => response.json())
      .then(df_front => {
        setMonJson(df_front)
      });
  }, []);

  useEffect(() => {
    let url = process.env.REACT_APP_BACKEND_URL + '/dfjson'
    fetch(url)
      .then(response => response.json())
      .then(df_front => {
        setMonJsonChart(df_front)
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
      {monJsonChart?.chart && <DataTable data={monJsonChart} />}
    </MainCard>
  )
};

export default SamplePage2;
