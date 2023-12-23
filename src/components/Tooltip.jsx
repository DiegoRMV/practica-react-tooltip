import PropTypes from "prop-types";
import styles from "./Tooltip.module.css";
import { useEffect, useRef, useState } from "react";

const Tooltip = ({ text, domRect }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const tooltipElement = useRef();
	useEffect(() => {
		const { width, height } = tooltipElement.current.getBoundingClientRect();
		const coords = {};

		if (domRect.y < height) {
			coords.y = domRect.y + height;
		} else {
			coords.y = domRect.y - height;
		}
		coords.x = domRect.x + domRect.width / 2 - width / 2;
		setPosition(coords);
	}, [domRect]);

	return (
		<span
			ref={tooltipElement}
			style={{ left: position.x, top: position.y }}
			className={styles.tooltip}
		>
			{text}
		</span>
	);
};

Tooltip.propTypes = {
	text: PropTypes.string,
	domRect: PropTypes.object,
};

export default Tooltip;
