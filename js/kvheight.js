const el = document.querySelector(".kv-text-name-deco1");
const wrap = document.querySelector(".kv-wrap");
export const kvResize = () => {
  const rect = el.getBoundingClientRect();

  const h = rect.top + rect.height + window.scrollY + 80;
  wrap.style.setProperty("--height", h + "px");
};
