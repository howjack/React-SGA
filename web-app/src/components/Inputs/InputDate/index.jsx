import React from "react";

class InputDate extends React.Component {
	render() {
		return (
			<>
				<label htmlFor="aniversario">Data de nascimento</label>
				<input
					type="date"
					name="aniversario"
					min="2005-01-01"
					max="2016-12-31"
					id="aniversario"
				/>
			</>
		);
	}
}

export default InputDate;