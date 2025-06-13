import Image from "next/image";
// import Chat from "@/components/Chat";
import { Settings } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
// import { Image } from "next/image";
import ChatJarwo from "@/components/ChatJarwo";
import ironman from "../app/ironman-kumis.png";

export default function Home() {
  return (
    <div className="grid h-screen -w-full">
      <div className="flex flex-col"></div>
      <header className="sticky top-10 z-10 flex h-[57px] bg-background items-center gap-2 px-4">
        <h1 className="text-xl font-semibold w-64">
          <Image
            src={ironman}
            width={60}
            height={60}
            alt="I am Jarwo!"
            style={{ objectFit: "cover" }}
          />
          <span>Ask</span> <label className="line-through decoration-double">Jarvis</label> Jarwo
        </h1>
        <div className="w-full flex flex-row justify-end gap-2">
          <ModeToggle />
          {/* <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings />
                <span className="sr-only">
                  <Settings />
                </span>
              </Button>
            </DrawerTrigger>
          </Drawer> */}
        </div>
      </header>
      <div
        style={{
          height: "75vh",
          overflow: "scroll",
          marginBottom: "0px",
          marginTop: "50px",
          marginLeft: "30px",
          marginRight: "30px",
          borderColor: "red",
        }}
      >
        <ChatJarwo />
      </div>
      <div>
        <p style={{ float: "left", fontSize: "10px", margin: "30px" }}>
          {/* Copyleft @ 2024 | */}
          {/* <i class="pi pi-github" style="font-size: 1rem; cursor: pointer"></i> */}
          <a href="https://github.com/ridhonovembri/ask-jarwo-nextjs" target="_blank">
            https://github.com/ridhonovembri/ask-jarwo
          </a>
        </p>
      </div>
    </div>
  );
}
