import { SiCss3, SiHtml5 } from "react-icons/si";
import { IoHomeOutline, IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const logo = [
  {
    icon: <SiHtml5 />,
    text: "HTML",
    path: "/htmlPage",
  },
  {
    icon: <SiCss3 />,
    text: "CSS",
    path: "/cssPage",
  },
  {
    icon: <IoLogoJavascript />,
    text: "Java Script",
    path: "/javascript",
  },
  {
    icon: <FaReact />,
    text: "React JS",
    path: "/reactPage",
  },
  {
    icon: <RiTailwindCssFill />,
    text: "Tailwind CSS",
    path: "/tailwindPage",
  },
];
const Sidebar = () => {
  const navigate = useNavigate();
  // Function to handle item click and navigate to the path
  const onHandelClick = (item) => {
    console.log(`{item.path} clicked !`);
    navigate(item.path);
  };
  return (
    <>
      <div className="w-[20%] relative bg-[#dbe3ec] min-h-screen text-[#0D0D0D] shadow-xl">
        <div className="fixed w-auto">
          <div className="flex items-center justify-between p-3 pl-7">
            <h3 className="cursor-pointer m-0">Frontend...</h3>
          </div>
          <div className="flex flex-col py-3">
            <p
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer px-3 py-2 gap-3 text-[1.2rem] hover:bg-[#abb2bb] rounded-r-xl"
            >
              <IoHomeOutline /> Home
            </p>
          </div>
          <div className="h-auto w-full py-3 mt-[-13px]">
            <p className="font-semibold px-3 text-[1.2rem]">For Interview</p>

            {logo.map((item, index) => (
              <p
                key={index}
                onClick={() => onHandelClick(item)}
                className="flex items-center cursor-pointer px-3 py-2 gap-3 text-[1rem] hover:bg-[#abb2bb] rounded-r-xl"
              >
                {item.icon}
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
