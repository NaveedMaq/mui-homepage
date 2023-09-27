import { Box, Typography } from '@mui/material';

function ContentDescription({ item: { title, description } }) {
  return (
    <Box flex={1}>
      <Typography color={'#734950'} padding={3} variant='h3'>
        {title}
      </Typography>

      <Typography variant='caption' padding={3}>
        {description}
      </Typography>
    </Box>
  );
}

export default ContentDescription;
