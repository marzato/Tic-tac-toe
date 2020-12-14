import React, { useState } from "react";

const Start = () => {
	const [status, setStatus] = useState({
		status: "init",
		winner: null
	});
	return (
		<>
			<div className="Title">
				<div>
					<h1>Tic Tact Toe with react</h1>
				</div>
				<div>
					<h3>Pick a weappon</h3>
				</div>

				<div>
					<span>CHOOSE YOUR WEAPON</span>
				</div>
				<div>
					<input placeholder="Player 1 username" />
					<input placeholder="Player 2 username" />
				</div>
				<div className="Suits">
					<span>❌</span>
					<span>⭕</span>
				</div>
			</div>
		</>
	);
};

export default Start;
