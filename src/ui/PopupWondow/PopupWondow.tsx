import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Content, Overlay } from "./PopupWondow.styles";

type Props = {
  active: boolean;
  setActive: (arg: boolean) => void;
  children: ReactNode;
};
type QuerySelector = HTMLDivElement | DocumentFragment;

const PopupWindow = ({ active, setActive, children }: Props) => {
  //   useEffect(() => {
  //     //  document.body.style.overflow = 'hidden';
  //     // const closeModalByEsc = (e) => {
  //     //   if (e.code === 'Escape') {
  //     //     onClose();
  //     //   }
  //   }, []);

  return createPortal(
    <Overlay
      onClick={() => {
        console.log("clic on overlay");
        setActive(false);
      }}
    >
      <Content
        onClick={(e) => {
          console.log("clic on content");
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
