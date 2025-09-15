import UserCard from "@/components/FetchElements/UserCard";
import { UserDetailResultsType } from "@/lib/types";
import ky from "ky";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = async () => {
	const { results } = await ky
		.get(
			"https://randomuser.me/api/?inc=gender,dob,name,location,email,phone,picture",
			{
				searchParams: {
					inc: "name,location,phone,email,picture,dob,gender",
				},
			},
		)
		.json<UserDetailResultsType>();
	return (
		<>
			<section className="flex h-[80dvh] items-center justify-center">
				{results.map((result) => {
					return (
						<UserCard
							key={result.email}
							info={result}
						/>
					);
				})}
			</section>
		</>
	);
};

export default page;
