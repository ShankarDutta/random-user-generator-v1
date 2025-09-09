import Link from "next/link";
import RefetchBtn from "../customui/RefetchBtn";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import { AuroraText } from "../magicui/aurora-text";

const Header = () => {
	return (
		<header
			className="border-b-2"
			aria-label="app-header">
			<nav className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<div className="flex items-center gap-3">
					<Link href={"/"}>
						<AuroraText
							className="text-2xl font-bold italic lg:text-3xl"
							aria-label="App Name">
							RANDOMUSER
						</AuroraText>
					</Link>
					<div className="mt-1">
						<ThemeToggleButton />
					</div>
				</div>
				<RefetchBtn />
			</nav>
		</header>
	);
};

export default Header;
