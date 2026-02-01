export interface ArrowBackProps {
  className: string;
  arrowBack: string;
}

export const ArrowBack = ({
  className,
  arrowBack = "https://c.animaapp.com/Gyeak8sQ/img/arrow-back-1.svg",
}: ArrowBackProps): JSX.Element => {
  return (
    <img
      className={`absolute top-0 left-0 w-6 h-6 ${className}`}
      alt="Arrow back"
      src={arrowBack}
    />
  );
};
