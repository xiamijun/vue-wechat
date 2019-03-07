/** @format */

export function routerBeforeEachFunc(to, from, next) {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
}

export function routerAfterEachFunc(to, from) {}
