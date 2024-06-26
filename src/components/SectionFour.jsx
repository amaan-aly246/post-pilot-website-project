import { gridItem } from "../Constants/Constants"

function SectionFour() {
  return  <section className="pb-10">
  {/* heading */}
  <div className="font-semibold text-5xl text-center my-16">
    <h1>Everything your brand needs to </h1>
    <p className="font-myFont-Playwrite text-primaryColor-1 text-4xl mt-4">
      make your brand unforgettable
    </p>
  </div>
  {/* grid container  */}
  <div className="grid sm:grid-cols-3  gap-y-10  gap-x-0 justify-items-center mx-10">
    {gridItem.map(({ heading, text, bgColor, img }) => {
      return (
        <div
          className={`${bgColor} w-[350px] h-[350px] rounded-md text-secondaryColor-7`}>
          <img
            src={img}
            alt={img}
            width="200px"
            className="mx-auto mt-8"
          />
          <h1 className="text-2xl font-semibold text-center mt-3">
            {heading}
          </h1>
          <p className="text-[16px] text-center p-2">{text}</p>
        </div>
      )
    })}
  </div>
</section>
}

export default SectionFour;
