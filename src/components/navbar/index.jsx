import { useState } from "react";
import { mainMenu } from "../../const/navbarMenu";
import { useEffect } from "react";
import { setColor, setBackgroundColor } from "../../store/appearance/actions";
import { useAppearance } from "../../store/appearance/hooks";

export default function Navbar() {
  const appearance = useAppearance();
  const { /*backgroundColor*/ color } = useAppearance(); //backgroundcolor koşul kullanılıcaksa açılıcak

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    ); //Gold
    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.base
    );
    document.documentElement.style.setProperty(
      "--color-third",
      appearance.color.third
    );

    document.documentElement.style.setProperty(
      "--bg-primary",
      appearance.backgroundColor.primary
    ); //Beyaz
    document.documentElement.style.setProperty(
      "--bg-secondary",
      appearance.color.secondary
    ); //Siyah
    document.documentElement.style.setProperty(
      "--bg-secondary-base",
      appearance.color.secondary
    ); //açık siyah
    document.documentElement.style.setProperty(
      "--bg-third",
      appearance.color.third
    );
    console.log(appearance.backgroundColor);
    console.log(appearance.color);
    //renkleri tanımla
  }, [appearance]);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center font-inter text-[color:var(--color-primary)] bg-transparent  transition-translate duration-200 text-lg ${
          scrollY > 10 ? "translate-y-6 " : ""
        }`}
      >
        <div
          className={`  flex justify-center items-center py-5 px-2  bg-transparent transition-translate duration-200  ${
            scrollY > 10
              ? "text-golden !bg-[#2a2a2a] shadow-sm shadow-gray-400 rounded-full"
              : ""
          }`}
        >
          <div className="w-full flex justify-between gap-x-20 px-4">
            <div className="flex  items-center gap-x-2 ">
              <img
                className=" h-10"
                src="../../../src/assets/images/booking.png"
                alt="logo"
              />
              <span className="text-3xl font-bold tracking-tight text-golden  transition-all duration-800 ease-in-out">
                YouCanBookMe
              </span>
            </div>
            <div className="flex gap-x-5 ">
              {mainMenu &&
                mainMenu.map((e, index) => (
                  <>
                    <button
                      key={index}
                      className=" relative font-semibold gap-x-2 p-2 "
                    >
                      {e?.icon}
                      <span className="before:absolute before:bottom-0 before:content-[''] before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:left-1/2 before:h-1 before:bg-golden hover:before:w-full before:transition-all before:duration-700 before:ease-in-out">
                        {e.name}
                      </span>
                    </button>
                  </>
                ))}
              <button className="font-bold bg-golden rounded-full text-white py-2 px-3">
                Sign up Free
              </button>
              <label className="swap swap-rotate">
                <input type="checkbox" />
                <svg
                  onClick={() => {
                    setColor({
                      ...color,
                      primary: "#fff",
                    });
                    setBackgroundColor({
                      primary: "rgb(25,29,32)",
                    });
                  }}
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  onClick={() => {
                    setColor({
                      ...color,
                      primary: "#000",
                    });
                    setBackgroundColor({
                      primary: "#fff",
                    });
                  }}
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
