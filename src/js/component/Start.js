import React, { useState } from "react";

const Start = () => {
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
				<div>
					<span>❌</span>
					<span>⭕</span>
				</div>
			</div>
		</>
	);
};

export default Start;
