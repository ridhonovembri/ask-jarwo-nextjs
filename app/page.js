import Image from "next/image";
// import Chat from "@/components/Chat";
import ChatJarwo from "@/components/ChatJarwo";

export default function Home() {
  return (
    <main>
      <div style={{ margin: "30px" }}>
        Ask <del>Jarvis</del> Jarwo{" "}
        {/* <i class="pi pi-prime" style="font-size: 2rem"></i> */}
      </div>
      <div
        style={{
          height: "75vh",
          overflow: "scroll",
          marginBottom: "0px",
          marginTop: "50px",
          marginLeft: "30px",
          marginRight: "30px",
          borderColor: "red"
        }}
      >
        <ChatJarwo />
      </div>
      <div>
        <p style={{ float: "left", fontSize: "10px", margin: "30px" }}>
          {/* Copyleft @ 2024 | */}
          {/* <i class="pi pi-github" style="font-size: 1rem; cursor: pointer"></i> */}
          <a href="https://github.com/ridhonovembri/ask-jarwo" target="_blank">
            https://github.com/ridhonovembri/ask-jarwo
          </a>
        </p>
      </div>
    </main>
  );
}
