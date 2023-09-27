import { Box } from '@mui/material';
import ContentImage from './ContentImage';
import ContentDescription from './ContentDescription';

function ContentItem({ item, swapImageDirection = false }) {
  return (
    <Box
      display={'flex'}
      padding={10}
      justifyContent={'space-between'}
      gap={5}
      alignItems={'center'}
      bgcolor={swapImageDirection && '#fff'}
    >
      {swapImageDirection ? (
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
