# node-frequency
----------------

Super simple node module for transforming frequencies into time.

We only support a single expression, such as *5 minutes*. Not *5 minutes 15 seconds*

The parser returns a object with three methods:

  * moment() -> A moment object {type: digit}, e.g. {minutes: 5}

  * ms() -> Milliseconds for this expression

  * seconds() -> Seconds for this expression
