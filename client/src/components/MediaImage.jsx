/*
 * Responsive image for the supplied artwork.
 *
 * `name` is the file name without extension, for example "home-hero".
 * It serves /images/<name>-sm.webp on small screens and
 * /images/<name>.webp on larger ones.
 */
function MediaImage({
  name,
  alt = "",
  position = "50% 50%",
  sizes = "(max-width: 900px) 100vw, 50vw",
  priority = false,
  className = "",
}) {
  return (
    <img
      className={`media-image ${className}`.trim()}
      src={`/images/${name}.webp`}
      srcSet={`/images/${name}-sm.webp 960w, /images/${name}.webp 1920w`}
      sizes={sizes}
      alt={alt}
      width="1920"
      height="811"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ objectPosition: position }}
    />
  );
}

export default MediaImage;
