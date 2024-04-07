
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
							alt="Reels"
							className="object-cover"
							src="/reels.png"
							style={{
								aspectRatio: "100/60",
							}}
						/>
					</div>
					<div className="flex items-center space-x-4">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold">Share your favorite videos</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Express yourself through the power of video. Show the world your talent, share your stories, and
								connect with the community.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center space-y-4">
					<div className="overflow-hidden rounded-xl">
						<img
							alt="Reels"
							className="object-cover"
							src="/reels.png"
							style={{
								aspectRatio: "100/60",
							}}
						/>
					</div>
					<div className="flex items-center space-x-4">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold">Get matched with a group of people</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Discover new friends who share your interests. Our algorithm will connect you with like-minded
								individuals for engaging conversations and fun activities.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center space-y-4">
					<div className="overflow-hidden rounded-xl">
						<img
							alt="Reels"
							className="object-cover"
							src="/reels.png"
							style={{
								aspectRatio: "100/60",
							}}
						/>
					</div>
					<div className="flex items-center space-x-4">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold">Find friends who vibe with you</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Connect with your tribe. Whether you're into music, movies, or memes, you'll find your people here.
								Join the conversation and let your personality shine.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Link
				className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm py-3 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
				href="https://instagram.com"
				target="_blank"
			>
				DM us to get started
			</Link>
		</div>
	)
}

