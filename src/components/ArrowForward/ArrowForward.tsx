export interface ArrowForwardProps {
  className: string;
  arrowForward: string;
}

export const ArrowForward = ({
  className,
  arrowForward = "https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-1.svg",
}: ArrowForwardProps): JSX.Element => {
  return (
    <img
      className={`absolute top-0 left-0 w-6 h-6 ${className}`}
      alt="Arrow forward"
      src={arrowForward}
    />
  );
};
