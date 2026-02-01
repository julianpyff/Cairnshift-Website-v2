import { ArrowBack } from "../ArrowBack";
import { Master } from "../Master";

export interface LightDarkNoSizeProps {
  className: string;
  visible: boolean;
}

export const LightDarkNoSize = ({
  className,
  visible = true,
}: LightDarkNoSizeProps): JSX.Element => {
  return (
    <div
      className={`inline-flex items-start relative top-5 left-[517px] ${className}`}
    >
      {visible && (
        <Master
          className="!justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-tokens-components-buttons-primary !top-[unset]"
          hasDiv={false}
          override={
            <ArrowBack
              arrowBack="https://c.animaapp.com/Gyeak8sQ/img/arrow-back-2.svg"
              className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
            />
          }
          visible={false}
        />
      )}
    </div>
  );
};
