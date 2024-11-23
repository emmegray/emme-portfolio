import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../content/data";
export const Gallery = ({ images = data.Works.Arts }) => {
  const [slide, setSlide] = useState(0);
  const forward = () => {
    if (slide !== images.length - 1) setSlide(slide + 1);
  };
  const back = () => {
    if (slide > 0) setSlide(slide - 1);
  };
  const image = images[slide];
  return (
    <><div class="image-gallery">
    <AnimatePresence initial={false}>
      <motion.img key={slide} initial={{ opacity: 0 }} animate={{ opacity: 1,zIndex: 1 }} exit={{ opacity: 0,zIndex:0}} transition={{duration: 1}} src={image.src} alt={image.alt} />
    </AnimatePresence>
  </div>
    <button onClick={back}>{"<"}</button>
    <button onClick={forward}>{">"}</button></>
  );
};
