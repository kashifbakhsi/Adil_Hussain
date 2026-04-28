// // import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
// // import { useState, useEffect } from "react";


// // export const ThemeToggle = () => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   // Apply/remove dark class on body
// //   useEffect(() => {
// //     if (isDarkMode) {
// //       document.documentElement.classList.add("dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //     }
// //   }, [isDarkMode]);

// //   return (
// //    <button onClick={() => setIsDarkMode(!isDarkMode)}>
// //   {isDarkMode ? <SunIcon /> : <MoonIcon />}
// // </button>
    
// //   );
// // };


// import { Moon, Sun } from "lucide-react";
// import { useState, useEffect } from "react";
// export const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   useEffect(() => {
//   const storedTheme = localStorage.getItem("theme")
//   if (storedTheme === "dark") {
//     setIsDarkMode(true)
//     document.documentElement.classList.add("dark");
//   } else {

// localStorage.setItem("theme","light");
//         setIsDarkMode(false);
//   }
// }, [])

//   const toggleTheme = () =>{
//     if(isDarkMode){
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme","light");
//         setIsDarkMode(false);
//     }else{
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme","dark");
//         setIsDarkMode(true);
//     }
//   }

//   return <button onClick={toggleTheme}>{""}{isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300" />) : (<Moon className="h-6 w-6 text-blue-900"/>)}</button>;
// };
// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ Sync theme on load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark"); // ✅ important
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  // ✅ Toggle theme
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};