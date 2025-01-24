import { gridItem } from "../Constants/Constants"

function SectionFour() {
  return  <section className="pb-10">
  {/* heading */}
  <div className="font-semibold text-2xl lg:text-5xl text-center my-8 lg:my-16 ">
    <h1>Everything your brand needs to </h1>
    <p className="font-myFont-Playwrite text-primaryColor-1 text-2xl lg:text-4xl mt-4">
      make your brand unforgettable
    </p>
  </div>
  {/* grid container  */}
  <div className="grid  grid-cols-2 gap-x-8 lg:grid-cols-3  gap-y-10   justify-items-center px-4">
    {gridItem.map(({ heading, text, bgColor, img }) => {
      return (
        <div
          className={`${bgColor} w-[150px] h-[150px] lg:w-[350px] lg:h-[350px] rounded-md text-secondaryColor-7`}>
          <img
            src={img}
            alt={img}
            className="mx-auto mt-2 lg:mt-8 w-[60px] lg:w-[200px]"
          />
          <h1 className="text-xs lg:text-2xl font-semibold text-center mt-3">
            {heading}
          </h1>
          <p className=" text-[10px] lg:text-[16px] text-center px-1">{text}</p>
        </div>
      )
    })}
  </div>
</section>
}

export default SectionFour;
