import React, { useState, useEffect } from 'react';
// material-ui
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import { Typography } from '@mui/material';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //
function NestedList(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Choose pivot
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.items.map(elt => (
            <ListItemButton sx={{ pl: 4 }} onClick={() => props.setter(elt)}>
              <ListItemText primary={elt} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}


const SamplePage = () => {
  const [pivot, setPivot] = useState('');
  const [type1, setType1] = useState('bar');
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
    let url = process.env.REACT_APP_BACKEND_URL + '/chart/' + pivot
    if (type1) {
      url += '?type=' + type1
    }
    fetch(url)
      .then(response => response.json())
      .then(df_front => {
        setMonJsonChart(df_front)
      });
  }, [pivot]);


  return (
    <MainCard title="Sample Card">
      <Typography variant="body2">
        ORIGINAL
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: monJson.html }} />
      <Typography variant="body2">
        DYNAMIC
      </Typography>
      <NestedList items={monJsonChart.cols || []} setter={setPivot} />
      <NestedList items={['bar', 'line', 'pie', 'doughnut', 'polarArea', 'radar', 'scatter', 'bubble']} setter={setType1} />
      <div dangerouslySetInnerHTML={{ __html: monJsonChart.html }} />
      {monJsonChart.chart && <Chart
        type={type1}
        datasetIdKey='id'
        data={monJsonChart.chart}
        options={monJsonChart.options}
      />}

    </MainCard>
  )
};

export default SamplePage;
