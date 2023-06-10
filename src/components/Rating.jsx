const Rating = ({ children, rating }) => {
  const stars = (rating) => {
    const finalRating = Math.round(rating);

    if (finalRating === 1) {
      return '★☆☆☆☆';
    } else if (finalRating === 2) {
      return '★★☆☆☆';
    } else if (finalRating === 3) {
      return '★★★☆☆';
    } else if (finalRating === 4) {
      return '★★★★☆';
    } else if (finalRating === 5) {
      return '★★★★★';
    } else {
      return '☆☆☆☆☆';
    }
  };

  return <div>{rating ? stars(rating) : stars(children)}</div>;
};

export default Rating;
