import { memo } from "react";
import HeaderStyles from "./header.styles";
import CommonStyles from "../Common/common.styles";
import Icon from "../Icon/icon.component";
import Preview from "../Preview/preview.component";

import { useAppSelector } from "../../redux/app/hooks";

interface BookMarkProps {
	isActive: boolean;
}

function BookMarks({ isActive }: BookMarkProps) {
	const allBookmarks = useAppSelector((state) => state.bookmark.bookmarks);
	console.log("BookMarks component");

	return (
		<HeaderStyles.BookMark className={isActive === true ? "show" : "hidden"}>
			<HeaderStyles.BookMarkList>
				{allBookmarks!.length > 0 ? (
					allBookmarks!.map((bookmark) => (
						<Preview key={bookmark.id} data={bookmark} handleClick={() => {}} />
					))
				) : (
					<CommonStyles.Message>
						<Icon name="smile" color="currentColor" size={20} />
						<p> No bookmarks yet. Find a nice recipe and bookmark it :</p>
					</CommonStyles.Message>
				)}
			</HeaderStyles.BookMarkList>
		</HeaderStyles.BookMark>
	);
}

export default memo(BookMarks);
