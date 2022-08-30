class Validator {

    #props = {}
    #errors = []
    #currentValidation = null

    constructor(props = {}) {
        this.props = Object.freeze( { ...props } )
        return this
    }

    set props (props = {}){
        this.#props = Object.freeze( { ...props } )
    }

    check(propName) {
        if( Object.keys( this.#props ).findIndex(p => p === propName) === -1 ) throw new Error(`Property ${propName} was not found in the given props.`)
        this.#currentValidation = propName
        return this
    }

    rule(callback,message) {
        if( Object.keys( this.#props ).length === 0 ) throw new Error("Props haven't been provided, must set props")
        const value = this.#props[ this.#currentValidation ]
        if ( callback(value) ) {
            this.#errors.push(message)
        }
        return this
    }

    validate (errorMessage) {
        if(this.errors.length > 0) {
            const error = new Error(errorMessage)
            error.errors(this.errors)
            throw error
        }
    }

    get errors() {
        return this.#errors
    }

}

export default Validator;