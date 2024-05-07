import Image from "next/image";
import kaidan_cover from "/public/kaidan_cover.png"

export default function Home() {
  return (
    <>
      <Image src={kaidan_cover} className="full" alt="괴담 동아리 표지"/>
    </>
  )
}
