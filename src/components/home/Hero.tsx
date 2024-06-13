export const Hero = () => {
  
  const projectLinks = [
      {
        title: "PORTFOLIO",
        link: "/",
        date: "08/24"
      },
      {
        title: "TODO APP",
        link: "/",
        date: "08/24"
      },
      {
        title: "FIBER APP",
        link: "/",
        date: "08/24"
      }
    ]
  
  return (
    <div className="w-full h-svh sticky -z-10 top-0 overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center bg-white relative h-[35svh] text-7xl">
        <div className="absolute bottom-0 flex flex-col text-center font-bold">
          <h3>
            LEON
          </h3>
          <h3>
            KAZUYA
          </h3>
        </div>
      </div>
      <div className="w-full bg-black text-white h-[65svh] flex flex-col items-center px-8">
        <h3 className="my-12">LOOK MY NEW WORK</h3>
        <div className="flex gap-x-8">
          {
            projectLinks.map((projectLink) => {
              return(
                <div class="w-52 relative h-72 rounded-md bg-white">
                  <div className="flex w-full absolute bottom-0 text-black justify-around">
                    <h3>{projectLink.title}</h3>
                    <h3>{projectLink.date}</h3>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    )
}