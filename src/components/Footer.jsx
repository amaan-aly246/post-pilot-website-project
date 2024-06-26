import { footer_img } from "../Constants/Constants"
function Footer() {
  return (
    <>
      <footer className=" bg-secondaryColor-4 ">
        <section className="py-10 flex justify-evenly ">
          <div>
            <img src={footer_img} alt="footer_img" width={"100px"} />
            <p className="w-[30rem]">
              Our paper is sourced from FSC-certified mills. We plant enough
              trees to more than double our paper usage.
            </p>
          </div>
          <div className="capitalize cursor-pointer">
            <p className="font-semibold text-secondaryColor-2">Company</p>
            <p>about us</p>
            <p>partner program</p>
            <p>career</p>
            <p>contact us</p>
            <p>privacy policy</p>
          </div>
          <div className="capitalize z-0 cursor-pointer">
            <p className="text-secondaryColor-4">"" </p>
            <p>pricing </p>
            <p>review </p>
            <p>direct main academy </p>
            <p>success stories</p>
            <p>
              terms{" "}
              <span className="font-myFont-Playwrite text-primaryColor-1">
                &{" "}
              </span>{" "}
              condition
            </p>
          </div>
        </section>
        <hr className=" w-[95%] mx-auto h-[2px] bg-primaryColor-1" />

        <h2 className="text-center font-myFont-Playwrite text-orange py-8">coded with 💖 by amaan <a href="https://github.com/amaan-aly246" target="_blank"><i className="fa-brands fa-github cursor-pointer"></i></a></h2>
      </footer>
    </>
  )
}

export default Footer
