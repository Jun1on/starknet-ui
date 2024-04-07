
import Link from "next/link"

export default function Component() {
	return (
		<div className="h-full container flex flex-col items-center justify-center gap-12">
			<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
				<span className="moving-gradient">FYND</span> your community
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="flex flex-col items-center space-y-4">
					<div className="overflow-hidden rounded-xl">
						<img
							alt="App"
							className="object-cover"
							src="/app.png"
							style={{
								aspectRatio: "100/60",
							}}
						/>
					</div>
					<div className="flex items-center space-x-4">
						<div className="space-y-1">
							<h3 className="text-xl font-semibold">Download our app</h3>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center space-y-4">
					<div className="overflow-hidden rounded-xl">
						<img
							alt="Woman hiking"
							className="object-cover"
							src="/hobby.jpg"
							style={{
								aspectRatio: "100/60",
							}}
						/>
					</div>
					<div className="flex items-center space-x-4">
						<div className="space-y-1">
							<h3 className="text-xl font-semibold">Share your interests and passions</h3>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center space-y-4">
					<div className="overflow-hidden rounded-xl">
						<img
							alt="Group of friends around a campfire"
							className="object-cover"
							src="/campfire.jpg"
							style={{
								aspectRatio: "100/60",
							}}
						/>
					</div>
					<div className="flex items-center space-x-4">
						<div className="space-y-1">
							<h3 className="text-xl font-semibold">Find friends who vibe with you</h3>
						</div>
					</div>
				</div>
			</div>
			<Link
				className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm py-3 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
				href="/"
			>
				Get started
			</Link>
		</div>
	)
}

