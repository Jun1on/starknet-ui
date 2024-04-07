"use client";

import { useConnect, Connector } from "@starknet-react/core";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function ConnectModal() {
	const { connect, connectors } = useConnect();
	return (
		<div className="">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Connect Wallet</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>Connect a wallet</DialogHeader>
					<div className="flex flex-col gap-4">
						{connectors.map((connector: Connector) => (
							<Button
								key={connector.id}
								onClick={() => connect({ connector })}
							// disabled={!connector.available()}
							>
								{/* <img
									src={connector.icon.dark}
									className="w-4 h-4 mr-2"
								/> */}
								{capFirst(connector.id)}
							</Button>
						))}
					</div>
					<div>
						Need help connecting a wallet? <Link href="https://www.starknet.io/en/content/getting-started-using-starknet-setting-up-a-starknet-wallet"><u>Learn more here.</u></Link>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
function capFirst(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}