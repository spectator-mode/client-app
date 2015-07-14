import React from 'react'

class CheckboxItem extends React.Component {

    render() {
        return (
            <li>
                <label>
                    <input type="checkbox"
                           name={this.props.name}
                           checked={this.props.checked}
                           value={this.props.id}
                           onChange={this.props.change} />

                    <span style={{paddingLeft: '1em'}}>{this.props.name}</span>
                </label>
            </li>
        )
    }
}

export default CheckboxItem