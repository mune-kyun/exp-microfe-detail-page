export default function Root(props) {
  const { name } = props.customProps;
  const { fullname, imgUrl, bio, color } = data[name];

  const handleBack = () => {
    const event = new CustomEvent("InterComponent", {
      detail: {
        customData: {
          from: "detail-page",
          action: "back-to-home",
        },
      },
    });
    dispatchEvent(event);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 p-5 relative">
      <button
        class="absolute top-2 left-4 text-white bg-[#2edaff] hover:bg-[#00d2ff] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        onClick={handleBack}
      >
        <p>← Home</p>
      </button>
      <h1
        style={{
          color: color,
        }}
        className="text-5xl"
      >
        {fullname}
      </h1>
      <div className="flex justify-center">
        <img className="w-1/3 h-auto" src={imgUrl} />
      </div>
      <p className="max-w-[50%]">{bio}</p>
    </section>
  );
}

const data = {
  miko: {
    fullname: "Sakura Miko",
    color: "#FF9CB4",
    imgUrl:
      "https://static.miraheze.org/hololivewiki/thumb/5/51/Sakura_Miko_-_Portrait_3D_03.png/420px-Sakura_Miko_-_Portrait_3D_03.png",
    bio: `"Nya-hello! I'm the elite shrine maiden of hololive, Sakura Miko!"

Used to work hard in the Virtual Sakura Shrine accomplishing duties as a shrine maiden until, following the gods' orders, she was led to Japan where she found out about Tokino Sora. After developing huge admiration for her, she decided to become a virtual shrine maiden idol and continue to keep working hard for that dream!`,
  },
  towa: {
    fullname: "Tokoyami Towa",
    color: "#7B66A8",
    imgUrl:
      "https://static.miraheze.org/hololivewiki/9/9d/Tokoyami_Towa_-_Portrait_01.png",
    bio: `"Sup, groupies!"

A young devil who is visiting human society to gain experience and develop her skills. But instead of studying, she became addicted to video games! After learning about a tool for communicating with humans called "streaming," she's trying it out to help with her studies.`,
  },
  aqua: {
    fullname: "Minato Aqua",
    color: "#C285B7",
    imgUrl:
      "https://static.miraheze.org/hololivewiki/6/6d/Minato_Aqua_-_Portrait_01.png",
    bio: `"A-quality day to one and all! I'm Minato Aqua!"

A marine maid-styled virtual maid. She is trying her very best, yet is still sometimes awkward and clumsy.`,
  },
};
