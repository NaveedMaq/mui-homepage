import { Box } from '@mui/material';
import { CustomizedTypography } from '../common/styled';

function ContentDescription({ item: { title, description } }) {
  return (
    <Box flex={1}>
      <CustomizedTypography
        fontWeight={'bold'}
        fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
        color={'#734950'}
        padding={3}
        variant='h3'
      >
        {title}
      </CustomizedTypography>

      <CustomizedTypography
        fontSize={{ lg: 20, md: 18, sm: 16, xs: 14 }}
        variant='caption'
        padding={3}
      >
        {description}
      </CustomizedTypography>
    </Box>
  );
}

export default ContentDescription;
