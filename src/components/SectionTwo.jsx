import { graph } from "../Constants/Constants";

function SectionTwo() {
  return   <section className="bg-primaryColor-1.2 py-10 text-center p-8 px-10 text-5xl font-semibold">
  {/* text area  */}
  <div className="pt-8">
    <p className="mb-4">Why use direct mail?</p>
    <p>
      It
      <span className="text-primaryColor-1 font-myFont-Playwrite">
        {" "}
        works{" "}
      </span>
      like crazy.
    </p>
  </div>

  <div className="flex justify-evenly mt-10 gap-x-14">
    <div>
      <p className="font-semibold text-5xl ">28X</p>
      <p className="text-xl font-normal">
        Higher response rate than email{" "}
        <span className="font-myFont-Playwrite text-primaryColor-1">
          &
        </span>{" "}
        digital{" "}
      </p>
    </div>
    <div>
      <img src={graph} alt="graph" />
      <p className="text-xl font-normal">Your message get read</p>
    </div>

    <div>
      <p className="font-semibold text-5xl ">17 Days</p>
      <p className="text-xl font-normal">
        Lifespan of postcard vs seconds for email or SMS.{" "}
      </p>
    </div>
  </div>
</section>;
}

export default SectionTwo;
