import bgImg from "/images/drinks_bg.PNG"

export default function BgImg() {
  return (
    <img
      src={bgImg}
      alt="background"
      className="absolute -z-10 w-screen h-screen object-fit opacity-20"
    />
  )
}
