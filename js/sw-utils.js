// Guardar en el cache dinamico
const refreshDinamicCache = (dinamicCache, req, res) => {
  if (res.ok) {
    return caches.open(dinamicCache).then(cache => {

      cache.put(req, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
};