import { memo } from "react";
import PreviewStyles from "./preview.styles";
import Icon from "../Icon/icon.component";

interface IPreviewProps {
	data: {
		publisher: string;
		title: string;
		image_url: string;
		id: string;
	};
	handleClick: (e: any) => void;
}

function Preview({ data, handleClick }: IPreviewProps) {
	console.log("Preview component");

	return (
		<PreviewStyles.PreviewItem onClick={handleClick}>
			<PreviewStyles.PreviewLink
				// className={isActive ? "active" : ""}
				to={`/${data.id}`}
			>
				<PreviewStyles.PreviewFigure>
					<PreviewStyles.PreviewImg
						src={data.image_url}
						alt={data.title.toUpperCase()}
					/>
				</PreviewStyles.PreviewFigure>
				<PreviewStyles.PreviewContent>
					<PreviewStyles.PreviewTitle>{data.title}</PreviewStyles.PreviewTitle>
					<PreviewStyles.PreviewPublisher>
						{data.publisher}
					</PreviewStyles.PreviewPublisher>
					<PreviewStyles.PreviewUser>
						<Icon name="user" color="currentColor" size={20} />
					</PreviewStyles.PreviewUser>
				</PreviewStyles.PreviewContent>
			</PreviewStyles.PreviewLink>
		</PreviewStyles.PreviewItem>
	);
}

export default memo(Preview);
