import {
    companies,
  } from "../Constants/Constants"
function SectionOne() {
  return (
    <section className="my-14">
      <div className="font-semibold text-5xl text-center">
        <p>Trusted by thousands</p>
        <p>
          of the top DTC{" "}
          <span className="font-myFont-Playwrite text-primaryColor-1">
            brands
          </span>
        </p>
      </div>

      {/* company images  */}
      <div className="flex  gap-8 mt-10 mx-4 ">
        {companies.map(({ company, companyName }) => {
          return (
            <div className="mx-auto">
              <img src={company} alt={company} />
              <img
                src={companyName}
                alt={companyName}
                className="mt-4 mx-auto"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionOne
