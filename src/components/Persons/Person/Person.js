import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import Classes from './Person.css'
import WithClass from '../../hoc/WithClass'
import Aux from '../../hoc/Aux'
import {AuthContext} from '../../../containers/App'

class person extends PureComponent {

    constructor(props){
        super(props)
        this.inputElement = React.createRef()
    }

    componentDidMount() {
        if (this.props.position === 0)
            this.inputElement.current.focus()
    }

    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>Authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.clicked}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <div>
                    <input
                        ref={this.inputElement}
                        placeholder="Name"
                        type="text"
                        onChange={this.props.changeName}/>
                </div>
                <div>
                    <input placeholder="Age" type="number" onChange={this.props.changeAge}/>
                </div>
            </Aux>
        )
    }
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeName: PropTypes.func,
    changeAge: PropTypes.func
}

export default WithClass(person, Classes.Person);
