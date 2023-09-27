import { Box, Typography } from '@mui/material';

function ContentDescription({ item: { title, description } }) {
  return (
    <Box flex={1}>
      <Typography
        fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
        color={'#734950'}
        padding={3}
        variant='h3'
      >
        {title}
      </Typography>

      <Typography
        fontSize={{ lg: 20, md: 18, sm: 16, xs: 14 }}
        variant='caption'
        padding={3}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default ContentDescription;
