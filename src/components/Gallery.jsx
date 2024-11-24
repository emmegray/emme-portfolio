import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { data } from "../content/data";
export const Gallery = ({ images = data.Works.Arts, page = "arts" }) => {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const forward = () => {
    if (slide !== images.length - 1) setSlide(slide + 1);
  };
  const back = () => {
    if (slide > 0) setSlide(slide - 1);
  };
  const image = images[slide];
  return (
    <>
      <div class="image-gallery">
        <AnimatePresence initial={false}>
          <motion.a key={slide} initial={{ opacity: 0 }} animate={{ opacity: 1, zIndex: 1 }} exit={{ opacity: 0, zIndex: 0 }} transition={{ duration: 1 }} href={image?.slug ? "/" + page + "/" + image.slug : undefined} onClick={() => !image.slug && setOpen(true)}>
            <motion.img src={image.src} alt={image.alt} />
          </motion.a>
        </AnimatePresence>
      </div>
            <div>
      <ul class="badge__list">
        {["title","description","year","tool"].map(key => (
          image?.[key] && <li key={key}><span class="badge badge--item">{key.toUpperCase()}</span><a class="badge__link" target="_blank">{image[key]}</a></li>
        ))}
    </ul>
      </div>
      <div className="btn-gallery">
        <button onClick={back}>
          <img width="100%" height="100%" src="/public/material/dietro.png" />
        </button>
        <button onClick={forward}>
          <img width="100%" height="100%" src="/public/material/avanti.png" />
        </button>
      </div>

      {open && <motion.div className="image-popup">
        <motion.img src={image.src} alt={image.alt} />
        <button onClick={() => setOpen(false)}>X</button>
      </motion.div>}
    </>
  );
};
