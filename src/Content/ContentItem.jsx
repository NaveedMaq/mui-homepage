import { Box, useMediaQuery, useTheme } from '@mui/material';
import ContentImage from './ContentImage';
import ContentDescription from './ContentDescription';

function ContentItem({ item, swapImageDirection = false }) {
  const isNarrow = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <Box
      display={'flex'}
      flexDirection={isNarrow ? 'column' : 'row'}
      padding={isNarrow ? 5 : 10}
      justifyContent={'space-between'}
      gap={5}
      alignItems={'center'}
      bgcolor={swapImageDirection && '#fff'}
    >
      {swapImageDirection && !isNarrow ? (
        <>
          <ContentImage item={item} />
          <ContentDescription item={item} />
        </>
      ) : (
        <>
          <ContentDescription item={item} />
          <ContentImage item={item} />
        </>
      )}
    </Box>
  );
}

export default ContentItem;
