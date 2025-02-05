
// "use client";

// import React, { Dispatch, SetStateAction } from "react";
// import { FaBars } from "react-icons/fa";

// interface AdminNavbarProps {
//   setSidebarOpen: Dispatch<SetStateAction<boolean>>;
// }

// export default function AdminNavbar({ setSidebarOpen }: AdminNavbarProps) {
//   const handleLogout = async () => {
//     try {
//       await fetch("/api/auth/logout");
//       alert("Logged out successfully");
//       window.location.href = "/";
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-xl px-6 py-4 flex items-center justify-between">
//       {/* Sidebar Toggle Button */}
//       <button
//         onClick={() => setSidebarOpen(true)}
//         className="md:hidden text-white hover:text-gray-400 transition duration-300"
//       >
//         <FaBars className="h-6 w-6" />
//       </button>

//       {/* Title with a unique look */}
//       <div className="font-extrabold text-2xl tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
//         Admin Panel
//       </div>

//       {/* Logout Button with glowing effect */}
//       <button
//         onClick={handleLogout}
//         className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md relative overflow-hidden before:absolute before:inset-0 before:bg-red-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20"
//       >
//         Logout
//       </button>
//     </header>
//   );
// }



import React, { Dispatch, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";

interface AdminNavbarProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AdminNavbar({ setSidebarOpen }: AdminNavbarProps) {
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout");
      alert("Logged out successfully");
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="bg-black text-white shadow-lg px-6 py-4 flex items-center justify-between">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-white hover:text-gray-400 transition"
      >
        <FaBars className="h-6 w-6" />
      </button>

      {/* Title */}
      <div className="font-bold text-2xl tracking-wide">Admin Panel</div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md"
      >
        Logout
      </button>
    </header>
  );
}


// // "use client";

// // import React, { Dispatch, SetStateAction } from "react";
// // import { FaBars } from "react-icons/fa";

// // interface AdminNavbarProps {
// //   setSidebarOpen: Dispatch<SetStateAction<boolean>>;
// // }

// // export default function AdminNavbar({ setSidebarOpen }: AdminNavbarProps) {
// //   const handleLogout = async () => {
// //     try {
// //       await fetch("/api/auth/logout");
// //       alert("Logged out successfully");
// //       window.location.href = "/";
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <header className="bg-white shadow px-4 py-3 gap-2 flex items-center justify-between">
// //       <button
// //         onClick={() => setSidebarOpen(true)}
// //         className="md:hidden text-gray-600 hover:text-gray-800"
// //       >
// //         <FaBars className="h-6 w-6" />
// //       </button>
// //       <div className="font-semibold text-xl">Admin Panel</div>
// //       <div>
// //         <button
// //           onClick={handleLogout}
// //           className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }
