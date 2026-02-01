import { ArrowBack } from "../ArrowBack";
import { ArrowForward } from "../ArrowForward";

export interface MasterProps {
  className: string;
  override: JSX.Element;
  hasDiv: boolean;
  visible: boolean;
}

export const Master = ({
  className,
  override = (
    <ArrowBack
      arrowBack="https://c.animaapp.com/Gyeak8sQ/img/arrow-back.svg"
      className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
    />
  ),
  hasDiv = true,
  visible = true,
}: MasterProps): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-3.5 relative top-[348px] left-20 bg-[#898989] rounded-lg ${className}`}
    >
      {override}

      {hasDiv && (
        <div className="relative w-fit mt-[-1.00px] font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-tokens-text-text-invert text-[length:var(--medium-text-base-font-size)] text-center tracking-[var(--medium-text-base-letter-spacing)] leading-[var(--medium-text-base-line-height)] whitespace-nowrap [font-style:var(--medium-text-base-font-style)]">
          Button
        </div>
      )}

      {visible && (
        <ArrowForward
          arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward.svg"
          className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
        />
      )}
    </div>
  );
};
