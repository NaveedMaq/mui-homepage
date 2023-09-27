import { Box } from '@mui/material';
import ContentItem from './ContentItem';

const content = [
  {
    title: 'Get Things Done',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, esse, facere quis omnis nobis dolore assumenda deserunt praesentium dignissimos temporibus laborum modi odio maiores pariatur autem quas, libero cum ullam animi nisi. ',
    img: '1.jpg',
  },
  {
    title: 'Productivity Is Brilliant',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, esse, facere quis omnis nobis dolore assumenda deserunt praesentium dignissimos temporibus laborum modi odio maiores pariatur autem quas, libero cum ullam animi nisi. ',
    img: '2.jpg',
  },

  {
    title: 'Fast Development',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, esse, facere quis omnis nobis dolore assumenda deserunt praesentium dignissimos temporibus laborum modi odio maiores pariatur autem quas, libero cum ullam animi nisi. ',
    img: '3.jpg',
  },
];

function Content() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      width={'100%'}
      height={'10%'}
      bgcolor={'#fbf2f2'}
    >
      {content.map((item, i) => (
        <ContentItem key={i} item={item} swapImageDirection={i % 2} />
      ))}
    </Box>
  );
}

export default Content;
