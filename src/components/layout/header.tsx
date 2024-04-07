"use client"

import { Disclosure } from "@headlessui/react";
import { X, Menu } from "lucide-react";
import ConnectWallet from "@/components/layout/connect";
import ToggleDark from "@/components/layout/toggle-dark";
import { navigation } from '@/lib/constants/misc';
import { cn } from "@/lib/utils";


export default function Header() {
	return (
		<Disclosure
			as="nav"
			className="border-b border-gray-200 bg-white"
		>
			{({ open }) => (
				<>
					<div className="mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block h-8 w-auto"
										src="./logo.svg"
										alt="logo"
									/>
								</div>
								<div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={cn(
												window && window.location.pathname === item.href
													? "border-[#5aa5ff] text-gray-900"
													: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
												"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
											)}
											aria-current={window && window.location.pathname === item.href ? "page" : undefined}
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
							<div className="hidden sm:flex visible ml-6 items-center gap-4">
								<ConnectWallet />
								<ToggleDark />
							</div>
							<div className="-mr-2 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<X
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Menu
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={cn(
										window && window.location.pathname === item.href
											? "border-indigo-500 bg-indigo-50 text-indigo-700"
											: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
										"block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
									)}
									aria-current={window && window.location.pathname === item.href ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
						<div className="border-t border-gray-200 pb-3 pt-4">
							<div className="mx-4 flex gap-4">
								<ConnectWallet />
								<ToggleDark />
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};