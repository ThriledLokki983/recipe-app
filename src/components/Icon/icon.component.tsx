import { memo } from "react";
import Icons from "../../img/icons.svg";

interface IconProps {
	name: string;
	color: string;
	size: number;
	height?: number | string;
}

const Icon = ({ name, color, size, height }: IconProps) => (
	<svg
		className={`icon icon-${name}`}
		fill={color}
		width={size}
		height={height ? height : size}
	>
		<use xlinkHref={`${Icons}#icon-${name}`} />
	</svg>
);

export default memo(Icon);
