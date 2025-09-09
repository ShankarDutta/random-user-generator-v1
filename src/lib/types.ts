import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type UserDetailType = {
	name: {
		title: string;
		first: string;
		last: string;
	};

	gender: string;

	location: {
		city: string;
	};

	dob: {
		age: number;
	};

	phone: string;

	email: string;

	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
};

export type UserDetailResultsType = {
	results: UserDetailType[];
};
