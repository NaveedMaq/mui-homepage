import {
  AppBar,
  Box,
  Button,
  Link,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import ApiIcon from '@mui/icons-material/Api';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import Sidebar from './Sidebar';
import { CustomizedTypography } from '../common/styled';
import { useState } from 'react';

const links = ['products', 'solution', 'pricing', 'enterprise'];

function Header() {
  const isNarrow = useMediaQuery(useTheme().breakpoints.down('md'));

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <AppBar
      component={'header'}
      position='static'
      sx={{ bgcolor: 'transparent', boxShadow: '0' }}
    >
      {isNarrow ? (
        <Box
          display={'flex'}
          gap={2}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <ApiIcon sx={{ color: '#000' }} />
          <CustomizedTypography
            variant='h6'
            fontFamily={'fantasy'}
            color={'#000'}
          >
            CodeEnv
          </CustomizedTypography>
          <Sidebar links={links} />
        </Box>
      ) : (
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            <ApiIcon sx={{ color: '#000' }} />
            <Box>
              <Tabs
                value={selectedTab}
                sx={{ textDecoration: 'none' }}
                component={Link}
                onChange={(_, val) => setSelectedTab(val)}
              >
                {links.map((link, i) => (
                  <Tab
                    sx={{
                      fontWeight: 'bold',
                    }}
                    key={i}
                    label={link}
                  />
                ))}
              </Tabs>
            </Box>

            <Box display='flex' marginLeft='auto' gap={2}>
              <Button variant='outlined'>Talk to us</Button>
              <Button variant='contained'>Try for free</Button>
            </Box>
          </Box>
        </Toolbar>
      )}

      <Box width='100%' height='100vh'>
        <video
          src='/video/video.mp4'
          width='100%'
          height='70%'
          autoPlay
          loop
          muted
          playsInline
        />

        <Box display='flex' width='100%'>
          <CustomizedTypography
            fontWeight={'bold'}
            fontSize={{ lg: 30, md: 24, xs: 18 }}
            margin='auto'
            variant='h4'
            color='black'
            textAlign='center'
          >
            Build Your Softwares Hassle Free and with Top Notch quality
          </CustomizedTypography>
        </Box>

        <Box display={'flex'} justifyContent={'center'} marginTop={5} gap={2}>
          <Button endIcon={<EmailIcon />} variant='outlined'>
            Signup
          </Button>
          <Button endIcon={<GoogleIcon />} color='error' variant='contained'>
            Signup
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
