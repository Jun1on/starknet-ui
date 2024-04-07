
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export default function Component() {
    return (
        <div className="flex flex-col">
            <main className="flex-1 py-6 lg:py-12">
                <div className="container grid max-w-3xl gap-6 px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Claim Your Rewards</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Points will be redeemable for <Link href="#">██████</Link> soon.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="grid w-full grid-cols-2 gap-2 text-xs">
                            <div className="font-semibold">Signup Bonus</div>
                            <div className="text-right">500 POINTS</div>
                            <div className="font-semibold">Activity Score</div>
                            <div className="text-right">2200 POINTS</div>
                            <div className="font-semibold">Referral Reward</div>
                            <div className="text-right">50 POINTS</div>
                        </div>
                        <Button disabled> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Redeem Points</Button>
                    </div>
                </div>
            </main>
            <div className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-center p-4">
                <div className="w-full max-w-sm p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <p className="text-xs text-center dark:text-gray-400">
                        Your rewards will be added to your wallet after processing.
                    </p>
                </div>
            </div>
        </div>
    )
}