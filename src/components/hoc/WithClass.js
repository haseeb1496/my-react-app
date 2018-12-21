import React from 'react'

const withClass = (WrappedClass, className) => (props) => (
        <div className = {className}>
            <WrappedClass {...props}/>
        </div>
    )

export default withClass;