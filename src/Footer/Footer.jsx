import { Box, Button, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component={'footer'} display={'flex'} flexDirection={'column'}>
      <Typography variant='h3' paddingTop={10} textAlign={'center'}>
        Ready For Any Team Size
      </Typography>
      <Typography variant='div' padding={4} textAlign={'center'}>
        Optimized For Any Team Size
      </Typography>

      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={5}
        gap={4}
      >
        <Button variant='contained'>Try CodeEnv For Free</Button>
        <Button variant='outlined'>Talk to sales</Button>
      </Box>
    </Box>
  );
}

export default Footer;
