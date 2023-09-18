import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Content, Overlay } from "./PopupWondow.styles";

type Props = {
  setActive: (arg: boolean) => void;
  children: ReactNode;
  active: boolean;
};
type QuerySelector = HTMLDivElement | DocumentFragment;

const PopupWindow = ({ active, setActive, children }: Props) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [active]);

  const closePopupByEsc = (e: KeyboardEvent) => {
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
