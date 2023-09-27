function ContentImage({ item: { img, title } }) {
  return (
    <img
      src={`/img/${img}`}
      alt={title}
      loading='lazy'
      width={'50%'}
      style={{
        boxShadow: '10px 10px 20px #ccc',
        borderRadius: 20,
      }}
    />
  );
}

export default ContentImage;
