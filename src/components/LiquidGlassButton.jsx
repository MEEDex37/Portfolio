function LiquidGlassButton({
  href,
  download,
  children,
  variant = 'default',
  icon = null,
  type = 'button',
  onClick
}) {
  const className = `liquid-glass-button liquid-glass-button-${variant}`;
  const content = (
    <>
      <span className="liquid-glass-button__surface" aria-hidden="true" />
      <span className="liquid-glass-button__specular" aria-hidden="true" />
      <span className="liquid-glass-button__rim" aria-hidden="true" />
      <span className="liquid-glass-button__label">
        {icon ? <span className="liquid-glass-button__icon">{icon}</span> : null}
        <span>{children}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a className={className} href={href} download={download}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {content}
    </button>
  );
}

export default LiquidGlassButton;
