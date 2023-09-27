import {
  AppBar,
  Box,
  Button,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';

import ApiIcon from '@mui/icons-material/Api';

const links = ['products', 'solution', 'pricing', 'enterprise'];

function Header() {
  return (
    <AppBar sx={{ bgcolor: 'transparent', boxShadow: '0' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <ApiIcon sx={{ color: '#000' }} />
          <Box>
            <Tabs value={0} sx={{ textDecoration: 'none' }} component={Link}>
              {links.map((link, i) => (
                <Tab
                  sx={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline',
                      textUnderlineOffset: '5px',
                    },
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

      <Box width='100%' height='100vh'>
        <video
          src='video.mp4'
          width='100%'
          height='70%'
          autoPlay
          loop
          muted
          playsInline
        />

        <Box display='flex' width='100%'>
          <Typography
            margin='auto'
            variant='h4'
            color='black'
            textAlign='center'
          >
            Build Your Softwares Hassle Free and with Top Notch quality
          </Typography>
        </Box>

        <Box display={'flex'} justifyContent={'center'} marginTop={5} gap={2}>
          <Button variant='outlined'>Signup with Email</Button>
          <Button variant='contained'>Signup with Google</Button>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
