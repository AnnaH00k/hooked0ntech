import Image from "next/image";
import Script from "next/script";


export default function Home() {
  return (
    <div className=" overflow-x-hidden w-full ">

    <main className="flex gap-6 flex-col items-center  justify-between py-20 pb-[10vh] bg-[#0A1109] w-[100vw]">
    <div>
        <h1 className="text-4xl text-[#7C9838] text-start font-bold w-[90vw]">
            The difference between next.config.mjs and next.config.js    
        </h1>
        <p className="text-lg text-[#A0A2A0] text-start w-[90vw]">
            Next.js 12 introduced support for ES Modules (ESM) in the Next.js configuration file. This means that you can now use next.config.mjs instead of next.config.js. This is useful if you want to use ES modules in your Next.js configuration file.
        </p>
    </div>
   
    <div>
        <h2 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw]">
            next.config.js
        </h2>
        <p className="text-md text-[#A0A2A0] text-start w-[90vw]">
            It is the traditional JavaScript configuration file used in Next.js projects. It follows the CommonJS module format, which is supported by Node.js. Developers familiar with Node.js and JavaScript will find this format comfortable to work with.    
        </p>
        <div className="container mx-auto mt-8">
          <h2 className="text-xl font-bold mb-4 text-[#A0A2A0]">Example: next.config.js</h2>
          <pre className="bg-[#303830] rounded-lg p-4 overflow-auto">
            <code className="language-javascript">
              {" const nextConfig ="} <br/> {"    {"} <br/> {"      // Configuration options"} <br/> {"    };"} <br/> {"module.exports = nextConfig;"} 

            </code>
          </pre>
       </div>
    </div>
    <div>
        <h2 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw]">
            next.config.mjs
        </h2>
        <p className="text-md text-[#A0A2A0] text-start w-[90vw]">
            On the other hand, next.config.mjs is a newer addition to Next.js, introduced to leverage ECMAScript Modules (ESM) syntax. ESM provides a more modern and concise way of writing JavaScript modules, with support for import and export statements.
        </p>
        <div className="container mx-auto mt-8">
          <h2 className="text-xl font-bold mb-4 text-[#A0A2A0]">Example: next.config.mjs</h2>
          <pre className="bg-[#303830] rounded-lg p-4 overflow-auto">
            <code className="language-javascript">
                {" const nextConfig ="} <br/> {"    {"} <br/> {"      // Configuration options"} <br/> {"    };"} <br/> {"export default nextConfig;"} 
            </code>
          </pre>
        </div>
    </div>
    

    <div className="overflow-x-auto w-[90vw]">
  <table className="table-auto mt-10 w-[90vw]">
    <thead>
      <tr className="bg-[#303830] text-gray-100">
        <th className="sm:px-4 px-1 py-2 hyphens-auto">Feature</th>
        <th className="sm:px-4 px-1 py-2 hyphens-auto">next.config.mjs</th>
        <th className="sm:px-4 px-1 py-2 hyphens-auto">next.config.js</th>
      </tr>
    </thead>
    <tbody className="text-gray-200">
      <tr>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Module System</td>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">ECMAScript Modules (ESM)</td>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">CommonJS Modules</td>
      </tr>
      <tr>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Syntax</td>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Modern JavaScript (import/export)</td>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Traditional JavaScript (require/module.exports)</td>
      </tr>
      <tr>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Support for TypeScript</td>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Fully compatible</td>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Fully compatible</td>
      </tr>
      <tr>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Future-Proofing</td>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Aligns with modern JavaScript standards</td>
        <td className="border sm:px-4 px-1 py-2 hyphens-auto">Traditional approach, might require updates in the future</td>
      </tr>
    </tbody>
  </table>
</div>



 
 

      
    </main>

    </div>
  );
}
