"use client";
import { useRouter } from "next/navigation";
import { Button } from "../shadcnui/button";

const RefetchBtn = () => {
	const router = useRouter();
	return (
		<>
			<Button
				aria-label="Refresh-button"
				className="cursor-pointer"
				onClick={router.refresh}>
				Refetch
			</Button>
		</>
	);
};

export default RefetchBtn;
