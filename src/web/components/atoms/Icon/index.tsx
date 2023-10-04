interface IconProps {
  icon?: string
  className?: string
  fill?: string
}
export const Icon = ({ icon, className, fill }: IconProps) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill={fill}
      className={className}
    >
      <use href={`#${icon}`} xlinkHref={`#${icon}`} />
    </svg>
  )
}
