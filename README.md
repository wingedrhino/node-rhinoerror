# RhinoError

The RhinoError constructor takes the following arguments:

1. `code`: A string that can be used to identify the error.
2. `message`: A string that can be used to provide an explanation to the user
3. `cause`: An Error object that caused the error, or null (optional).
4. `debugInfo`: debug information for developers (optional)
5. `userInfo`: debug information for users (optional)

```javascript
import RhinoError from 'rhinoerror';
try {
  JSON.parse(input)
} catch(error) {
  throw new RhinoError('UserInputError', 'you provided an invalid JSON file', error, null, {input});
}
```

The stack trace of the `cause` error is preserved when it is wrapped in a
`RhinoError`.

The `debugInfo` and `userInfo` properties are used to separate information
meant for internal use by developers to debug the error and information meant
for display to end users.

Typically, these are both arbitrary JSON objects. In the context of a web
application, `debugInfo` is logged for debugging later by the developers; and
`userInfo` is returned in the API's response to explain to the user what just
happened.

You wouldn't need to add any `debugInfo` for 400-class (user induced) errors,
whereas 500-class (application fault) errors usually need debugInfo to be
logged.

