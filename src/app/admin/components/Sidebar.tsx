"use client";

import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineHome, HiOutlineChartBar, HiOutlineShoppingCart } from "react-icons/hi";
import { FaUsers, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-20 bg-black/50 transition-opacity md:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed z-30 inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:static md:inset-0"
        )}
      >
        <div className="flex items-center justify-center mt-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-10">
          <Link
            href="/admin/dashboard"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <HiOutlineHome className="mr-3 h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <HiOutlineShoppingCart className="mr-3 h-5 w-5" />
            <span>Orders</span>
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <HiOutlineChartBar className="mr-3 h-5 w-5" />
            <span>Products</span>
          </Link>
          <Link
            href="/admin/dashboard"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <FaUsers className="mr-3 h-5 w-5" />
            <span>Users</span>
          </Link>
          <Link
            href="/admin/dashboard" // optionally
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <FaShieldAlt className="mr-3 h-5 w-5" />
            <span>Roles</span>
          </Link>
          <Link
            href="/admin/dashboard"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <FaMoneyBillWave className="mr-3 h-5 w-5" />
            <span>Revenue</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
