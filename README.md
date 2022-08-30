# mini-validator
Mini validator helper package

## Usage
```
import Validator from 'mini-validator'

const myObject = {
    name: "foo",
}

const validator = new Validator(myObject)

validator
.check("name")
.rule((valueKey) => (!valueKey), `name should not be falsy`)
.validate()

```