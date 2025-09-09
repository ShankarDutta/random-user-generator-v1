import { UserDetailType } from "@/lib/types";
import Image from "next/image";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Card, CardContent } from "../shadcnui/card";
import { Separator } from "../shadcnui/separator";

type CardPropsType = {
	info: UserDetailType;
};

const UserCard = ({ info }: CardPropsType) => {
	return (
		<Card className="w-full max-w-sm space-y-4 rounded-2xl p-4 shadow-md">
			{/* Avatar + Name */}
			<div className="flex flex-col items-center gap-3">
				<Image
					src={info.picture.medium}
					alt={`${info.name.first} ${info.name.last}`}
					height={100}
					width={100}
					priority
					className="h-[100px] w-[100px] rounded-full p-1 ring-2 ring-blue-400"
				/>
				<div className="text-center text-2xl font-semibold">
					{info.name.first}
				</div>
			</div>

			<Separator />

			{/* Details */}
			<CardContent className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 text-sm">
				<ImProfile className="" />
				<div className="font-medium capitalize">{info.gender}</div>

				<IoCalendarNumberSharp className="text-lg" />
				<div className="font-medium">{info.dob.age} years</div>

				<FaPhone className="text-lg" />
				<div className="font-medium">{info.phone}</div>

				<MdMail className="text-lg" />
				<div className="truncate font-medium">{info.email}</div>

				<FaLocationDot className="text-lg" />
				<div className="font-medium">{info.location.city}</div>
			</CardContent>
		</Card>
	);
};

export default UserCard;
