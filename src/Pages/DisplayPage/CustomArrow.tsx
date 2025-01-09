import leftArrow from "../../assets/triangle-left.png";
import rightArrow from "../../assets/triangle-right.png";


// Functionality for left and right arrows in the gallery slides.
export const CustomArrow = ({ direction, onClick }: any) => (
    <div
      className={`slick-arrow ${direction}`}
      onClick={onClick}
      // Common style for both arrows
      style={{
        backgroundImage: `url(${direction === 'prev' ? leftArrow : rightArrow})`,
        backgroundSize: 'contain',
        width: '40px',
        height: '40px',
        cursor: 'pointer'

      }}
    />
  );
  