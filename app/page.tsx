import Image from "next/image";
import MenuHeader from "./components/menuHeader";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="w-full ">
    <MenuHeader />
    <main className="flex flex-col items-center justify-between sm:py-20 pb-[10vh] bg-[#0A1109] w-full">

      <div className="flex flex-col justify-center sm:h-auto h-[100vh] items-center w-full mt-[5vh]">
      <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">Hooked0ntech</h1>
      <h2 className="text-2xl text-center w-[90vw] text-[#A0A2A0] font-thin">Welcome to my Portfolio</h2>
      </div>


    <div id="projects" className="h-[5vh] w-[90vw]"/>
      <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw] ">
      <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8">
        <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">Projects</h1>
      <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold ">Online University</h2>
               <p className="text-md text-[#7C9838]">Bachelor of Computer Science <br/> (in progress)</p>
               <a href="https://www.iu.de/bachelor/informatik/"  className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1" target="_blank"> @ IU International University</a>
            </div>
            <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold">Working at CLYE</h2>
                <p className="text-md text-[#7C9838]">Frontend development & Landingpage design </p>        
                <a href="https://clye.app/en" className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff]  rounded-full bg-[#303830] px-3 py-1" target="_blank"> CLYE Landingpage</a>
            </div>
            <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold">FAB App</h2>
               <a href="https://apps.apple.com/us/app/fabapp/id1554684851?fbclid=IwAR3ha_5Z9kWtMqfu4gVLOqbYFzdYnZSDdLVIQyKdG7YRyYWYYODJDKWLCIU"  className="text-sm text-[#A0A2A0] hover:text-[#fff] sm:text-md rounded-full bg-[#303830] px-3 py-1" target="_blank">Apple app Store</a>
               <a href="https://play.google.com/store/apps/details?id=com.Hook.fabapp&fbclid=IwAR0qtZG8s9tki8USCR4IdGCpI7nGZstqH2XIuT5D2Bo0Uuxo6A6KGWBkDT0"  className="text-sm text-[#A0A2A0] hover:text-[#fff] sm:text-md rounded-full bg-[#303830] px-3 py-1" target="_blank">Google Play Store</a>
            </div>
            <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold">Couple Corner</h2>
               <a href="https://apps.apple.com/de/app/couplecorner/id6448982599"  className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1" target="_blank">Apple app Store</a>
            </div>
          </div>
      </div>
      






      <div id="techStack" className="h-[5vh] w-[90vw]"/>
      <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw] ">
        <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8">
        <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">Tech Stack</h1>
        <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold">Native App development</h2>
               <p className="text-md text-[#7C9838]">Java, Swift</p>
            </div>
            
            <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold ">Web development</h2>
               <p className="text-md text-[#7C9838]">HTML,CSS,Typescript</p>
               <p className="text-md text-[#7C9838]">React, Next.js, Tailwind CSS</p>
            </div>

            <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold ">Media Creation</h2>
               <p className="text-md text-[#7C9838]">Canva, Adobe, Figma</p>
               {/*<p className="text-md text-[#7C9838]">Da Vinci Resolve</p>*/}

            </div>

          {/*}  <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold">VR development</h2>
                <p className="text-md text-[#744F29]">Unreal Engine 5, Meta Quest 2</p>
            </div> */}

           </div>
      </div>




      <div id="media" className="h-[5vh] w-[90vw]"/>
      <div  className="flex flex-col flex-wrap justify-center gap-4 w-[90vw]">
      <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8">
        <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">Media</h1>
        <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold ">YouTube</h2>
               <a className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1" href="https://youtube.com/@hooked0nTech?si=urTx7LmuBbzpSca0" target="_blank">hooked0nTech</a>
               <a className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1" href="https://youtube.com/@hookedwords?si=iG2OyeU6sYO_fkM_" target="_blank">hookb00k</a>
               <a className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1" href="https://youtube.com/@Studyvation?si=EzWIS-EEmj7Ndr7-" target="_blank">Studyvation</a>
            </div>
            <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold">Instagram</h2>
               <a href="https://www.instagram.com/hooked0ntech/"   className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1" target="_blank">hooked0nTech</a>
               <a href="https://www.instagram.com/hookb00k/?next=https%3A%2F%2Fwww.instagram.com%2Fp%2FCBTn3TEpza3%2Fliked_by%2F%3F__coig_login%3D1"   className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1" target="_blank">hookb00k</a>
            </div>
          </div>
      </div>

      <div id="products" className="h-[5vh] w-[90vw]"/>
      <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw]">
      <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8">
        <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">Products</h1>
        <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
               <h2 className="text-lg text-[#A0A2A0] font-bold">Amazon Storefront</h2>
               <a href="https://www.amazon.de/shop/hooked0ntech/list/XEYKC4SP7AYA?ref_=cm_sw_r_cp_ud_aipsflist_aipsfhooked0ntech_1ARB010TPA22B9J44HB7"   className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1" target="_blank">My Setup</a>
            </div>
             {/*<div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  w-[40vw] text-center items-center justify-center gap-2 bg-[#151C14] p-4">
               <h2 className="text-lg text-[#303830] font-bold">Selfpublished Books</h2>
              <a href=""   className="text-sm sm:text-md rounded-full bg-[#303830] px-3 py-1" target="_blank">Development journey</a>
            </div>*/}
          </div>
      </div>
      
    </main>
    <Footer />

    </div>
  );
}