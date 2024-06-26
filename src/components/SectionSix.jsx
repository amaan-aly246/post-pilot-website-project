import { testimonials } from "../Constants/Constants"

function SectionSix() {
  return <section className="bg-secondaryColor-6 py-16">
  <h2 className="text-5xl font-semibold text-center">
    PostPilot is🔥for{" "}
    <span className="font-myFont-Playwrite text-primaryColor-1">
      DTC
    </span>
  </h2>
  {/* testimonial container */}
  <div className="pt-8 flex gap-4">
    {testimonials.map(({ img, name, username, text }) => (
      <div className="w-[350px] h-[200px] rounded-md border-[2px] border-secondaryColor-2 p-6">
        <h2 className="flex justify-between relative">
          <img src={img} alt={img} />
          <span className="absolute left-20">
            <p className="font-semibold text-secondaryColor-2">
              {name}
            </p>
            <p>@{username}</p>
          </span>
          <i className="fa-brands fa-twitter"></i>
        </h2>
        <p className="text-secondaryColor-2 font-semibold line-clamp-3">
          {text}
        </p>
      </div>
    ))}
  </div>
</section>
}

export default SectionSix;