import { Box } from '@mui/material';

function ContentImage({ item: { img, title } }) {
  return (
    <Box flex={1}>
      <img
        src={`/img/${img}`}
        alt={title}
        loading='lazy'
        width={'100%'}
        style={{
          boxShadow: '10px 10px 20px #ccc',
          borderRadius: 20,
        }}
      />
    </Box>
  );
}

export default ContentImage;
