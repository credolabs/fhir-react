import React from 'react'

class Address extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<span className='text-muted'>
				<div>{`${(_.get(this.props.fhirData, 'line') || []).join(' ')}`}</div>
				<div>{`
					${(_.get(this.props.fhirData, 'city')+',' || '')}
					${(_.get(this.props.fhirData, 'state') || '')}
					${(_.get(this.props.fhirData, 'postalCode') || '')}
					${(_.get(this.props.fhirData, 'country') || '')}
					`}
				</div>
			</span>
		);
	}
}

export default Address