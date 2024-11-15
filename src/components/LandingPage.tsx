import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Paper, Tab, Tabs, Chip, Select, MenuItem, Box } from '@mui/material';
import DataTable from 'react-data-table-component';


import '../styles/LandingPage.css';
import { ListAltOutlined,WarningAmber,BoltOutlined,InfoOutlined,BugReportRounded, FilterList, DashboardOutlined, WarningAmberOutlined, BugReportOutlined, BoltSharp, LogoutOutlined} from '@mui/icons-material';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [platformTab, setPlatformTab] = useState(0);
  const [severityFilter, setSeverityFilter] = useState('All severity');

  const platforms = ['All platform', 'Plaid', 'Yoodle', 'Intuit', 'Fincity'];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setPlatformTab(newValue);
  };

  

  const columns = [
    {
      name: 'Timestamp',
      selector: (row: any) => row.timestamp,
      sortable: true,
    },
    {
      name: 'Error Type',
      selector: (row: any) => row.errorType,
      cell: (row: any) => (
        <Chip color='warning' icon={<WarningAmber/>} label={row.errorType}/>
      ),
    },
    {
      name: 'Error Message',
      selector: (row: any) => row.errorMessage,
    },
    {
      name: 'Severity',
      selector: (row: any) => row.severity,
      cell: (row: any) => (
        <Chip 
        icon={row.severity === 'Critical' ? <BoltOutlined/> :
          row.severity === 'WARN' ||  'Info' ? <InfoOutlined/> :
         
          row.severity === 'Debug' ? <BugReportRounded/> : <InfoOutlined/>} 
        sx={{
          backgroundColor: row.severity === 'Critical' ? '#FFC0C5' :
                          row.severity === 'Warn' ? '#FFD5C0' :
                          row.severity === 'Info' ? '#C0D5FF' :
                          row.severity === 'Debug' ? '#CAC0FF' : 'default'
        }}  label={row.severity}/>
      ),
    },
    
    {
      name: 'Platform',
      selector: (row: any) => row.platform,
      cell: (row: any) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* <img src={`/assets/images/${row.platform.toLowerCase()}.png`} alt={row.platform} style={{ height: '30px', width: '30px' }} /> */}
          <span>{row.platform}</span>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      timestamp: '12-04-2023 04:37 PM',
      errorType: 'API Error',
      errorMessage: 'Invalid API Key',
      severity: 'Debug',
      platform: 'Plaid',
    },
    {
      id: 2,
      timestamp: '03-01-2023 09:23 AM',
      errorType: 'API Error',
      errorMessage: 'InternalServerError',
      severity: 'Warn',
      platform: 'Plaid',
    },
       // Add more rows to ensure overflow
       ...Array.from({ length: 50 }, (_, index) => ({
        id: index + 4,
        timestamp: `10-04-2023 0${index % 12 + 1}:37 PM`,
        errorType: 'API Error',
        errorMessage: 'Rate Limit Exceeded',
        severity: index % 3 === 0 ? 'Critical' : index % 3 === 1 ? 'Info' : 'Warn',
        platform:  index % 3 === 0  ? 'Yoodle' : index % 3 === 1 ? 'Intuit' : 'Fincity',
      }))
  ];

  return (
    <div className="landing-page">
      <header className="header-bar">
        <div className="header-content">
          <img src="/assets/images/logo.png" alt="Logo" className="logo" />
          <Button sx={{backgroundColor: '#F5F7FA',padding:'8px',borderRadius:'8px'}} className="logout-button" startIcon={<LogoutOutlined />} color="inherit" onClick={() => navigate('/login')}>Logout</Button>
        </div>
      </header>
      <div className='landing-content'>

      <div className="header" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <ListAltOutlined fontSize="large" />
        <Typography variant="h4" component="h1" sx={{fontWeight:"bold"}}>Service Logs</Typography>
        <Typography variant="subtitle2" component="p" style={{ width: '100%',color: '#525866' }}>
          View and monitor statuses and logs for all services in one place
        </Typography>
      </div>

     
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={() => console.log('ji')}>
          Select Date Range
        </Button>
        <Select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          displayEmpty
          variant="outlined"
          renderValue={(selected) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FilterList/>
              <span>{selected}</span>
            </div>
          )}
          style={{ minWidth: 180 }}
 
        >
        <MenuItem value="All severity">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DashboardOutlined  />
              <span>All severity</span>
            </div>
             <div style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#2196f3' }}></div>
            </div>
          </MenuItem>
          <MenuItem value="Info">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <InfoOutlined  />
              <span>Info</span>
            </div>
             <div style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#2196f3' }}></div>
            </div>
             
          </MenuItem>
      
          <MenuItem value="Debug">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BugReportOutlined  />
              <span>Debug</span>
            </div>
             <div style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#9c27b0' }}></div>
            </div>
          </MenuItem>
          <MenuItem value="Warn">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <WarningAmberOutlined  />
              <span>Warn</span>
            </div>
             <div style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#ff9800' }}></div>
            </div>
          </MenuItem>
          <MenuItem value="Critical">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BoltSharp />
              <span>Critical</span>
            </div>
             <div style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#f44336' }}></div>
            </div>
          </MenuItem>
        </Select>
      </div>

      <Box sx={{  maxWidth: "max-content", bgcolor: 'background.paper' ,borderRadius:'10px'}}>

      <Tabs textColor="inherit"  TabIndicatorProps={{ style: { backgroundColor: '#0C0C0C' } }} value={platformTab} onChange={handleTabChange} className="platform-tabs">
        <Tab label="All platform" />
        <Tab label="Plaid" />
        <Tab label="Yoodle" />
        <Tab label="Intuit" />
        <Tab label="Fincity" />
      </Tabs>
      </Box>

      <Paper className="table-container">
        <DataTable
          columns={columns}
          data={data.filter((row: any) => (platformTab === 0 || row.platform === platforms[platformTab]) && (severityFilter === 'All severity' || row.severity === severityFilter))}
          pagination
          highlightOnHover
        />
      </Paper>
      </div>
    </div>
  );
};

export default LandingPage;