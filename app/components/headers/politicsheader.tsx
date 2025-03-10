import { House } from "@phosphor-icons/react/dist/ssr";

export default function PoliticsHeader() {
    return (
      <header>
        <nav>
          <div className="flex  flex-row items-center justify-center absolute  py-4 px-2 gap-2 w-full">
          
            <a href="/worldChange" className="sm:text-lg text-md text-white text-center rounded-lg bg-[#4e577e] px-3 py-1">
            <House size={32} weight="light" />
            </a>
          </div>
        </nav>
      </header>
    );
  }
  