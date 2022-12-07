function ProgressBar(props) {
    let progress = props.progress;
    let color = props.color;
    let percentage = "M20 55 l" + progress * 4 + " 0";
    return (
        <div className="progress-bar">
            <svg height="80" width="400">
                <g fill="none" stroke="lightgrey" stroke-width="25">
                    <path stroke-linecap="round" d="M20 55 l360 0" />
                </g>
                <g fill="none" stroke={color} stroke-width="25">
                    <path stroke-linecap="round" d={percentage} />
                </g>
                <text x="180" y="25" fill="green">{progress} %</text>
            </svg>
        </div>
    );
}
export default ProgressBar;