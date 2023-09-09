import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Content, Overlay } from "./PopupWondow.styles";

type Props = {
  active: boolean;
  setActive: (arg: boolean) => void;
  children: ReactNode;
};
type QuerySelector = HTMLDivElement | DocumentFragment;

const PopupWindow = ({ active, setActive, children }: Props) => {
  const closePopupByEsc = (e) => {
    if (e.code === "Escape") {
      setActive(false);
    }
  };
  document.addEventListener("keydown", closePopupByEsc);

  return createPortal(
    <Overlay
      onClick={() => {
        setActive(false);
      }}
    >
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </Content>
    </Overlay>,
    document.querySelector("#popup-root") as QuerySelector
  );
};

export default PopupWindow;
