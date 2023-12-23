import PropTypes from "prop-types";
import styles from "./TooltipText.module.css";
import { useRef, useState } from "react";
import Tooltip from "./Tooltip";

const TooltipText = (props) => {
	const [tooltipText, setTooltipText] = useState("");
	const [showTooltip, setShowTooltip] = useState(false);
	const spanElement = useRef();
	const handleMouseOver = () => {
		const domData = spanElement.current.getBoundingClientRect();
		setTooltipText(domData);
		setShowTooltip(true);
	};

	return (
		<>
			<span
				className={styles.tooltipText}
				onMouseOver={handleMouseOver}
				onMouseLeave={() => setShowTooltip(false)}
				ref={spanElement}
			>
				{props.children}
			</span>
			{showTooltip && <Tooltip domRect={tooltipText} text={props.tooltip} />}
		</>
	);
};

TooltipText.propTypes = {
	children: PropTypes.string,
	tooltip: PropTypes.string,
};

export default TooltipText;
