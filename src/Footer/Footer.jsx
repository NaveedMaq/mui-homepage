import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { CustomizedTypography } from '../common/styled';

function Footer() {
  const isNarrow = useMediaQuery(useTheme().breakpoints.down('md'));

  return (
    <Box component={'footer'} display={'flex'} flexDirection={'column'}>
      <CustomizedTypography
        fontSize={{ lg: 30, md: 24, xs: 18 }}
        fontWeight={'bold'}
        variant='h3'
        paddingTop={10}
        textAlign={'center'}
      >
        Ready For Any Team Size
      </CustomizedTypography>
      <CustomizedTypography
        fontSize={{ lg: 24, md: 20, xs: 16 }}
        variant='div'
        padding={4}
        textAlign={'center'}
      >
        Optimized For Any Team Size
      </CustomizedTypography>

      <Box
        display={'flex'}
        flexDirection={isNarrow ? 'column' : 'row'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={5}
        gap={4}
      >
        <Button
          fontSize={{ lg: 20, md: 17, sm: 12, xs: 8 }}
          variant='contained'
        >
          Try For Free
        </Button>
        <Button fontSize={{ lg: 20, md: 17, sm: 12, xs: 8 }} variant='outlined'>
          Talk to sales
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
