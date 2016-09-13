# Number Types

## Feature Overview

Although languages interact with numbers in mostly the same ways, there are various ways of storing them.
Some languages (e.g. TypeScript) have only one generic "Number" type implemented as a float, while others have varying interpretations of integers, doubles, floats, and others.

GLS supports all standard number types that are supported in both Java and .NET.
Those are:

* **`byte`**
* **`short`**
* **`int`**
* **`long`**
* **`float`**
* **`double`**

Number types not supported in an output language will be treated as the closest known type in that language.
For example, TypeScript treats all numbers as `number`.
