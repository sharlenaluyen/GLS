# For Each
A loop that iterates over all elements of an array. This loop does not use an explicit index.

## Commands

### `for each start`

`for each start : array type iterator`

This command will be used to start a for each code block. The first parameter is the array to be iterated over.
The second command is the type of the array. The third parameter is the iterator variable.

### `for each end`

This command ends a for each code block.

## Usage

```
for each start : arrayvar int item
for each end
```

### CSharp

```csharp
foreach (int item in arrayvar)
{
}
```

### Java

```java
for (int item : arrayvar) 
{
}
```

### Python

```python
for item in arrayvar:

```

### Ruby

```ruby
for item in arrayvar
end
```

### TypeScript

```typescript
for (let item of arrayvar) {
}
```

## Implementation

### Properties

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>ForEachStartLeft</td>
            <td><code>string</code></td>
            <td>Starts first line of for each code block</td>
        </tr>
        <tr>
            <td><code>string</code></td>
        </tr>
        <tr>
            <td>ForEachStartSeparator</td>
            <td><code>string</code></td>
            <td>Links iterator variable and array</td>
        </tr>     
        <tr>
            <td>ForEachStartRight</td>
            <td><code>string</code></td>
            <td>Ends first line of for each code block</td>
        </tr>     
        <tr>
            <td>ForEachEnd</td>
            <td><code>string</code></td>
            <td>End of for each code block.</td>
        </tr>
    </tbody>
</table>

### Langauge Values

<table>
    <thead>
        <th>Language</th>
        <th>ForEachStartLeft</th>
        <th>ForEachStartSeparator</th>
        <th>ForEachStartRight</th>
        <th>ForEachEnd</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td><code>"foreach"</code></td>
            <td><code>"("</code></td>
            <td><code>"in"</code></td>
            <td><code>")\n{"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
        <tr>
            <th>Java</th>
            <td><code>"for"</code></td>
            <td><code>"("</code></td>
            <td><code>":"</code></td>
            <td><code>")\n{"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td><code>"for"</code></td>
            <td><code>""</code></td>
            <td><code>"in"</code></td>
            <td><code>"\n"</code></td>
            <td><code>"end"</code></td>
        </tr>
        <tr>
            <th>Python</th>
            <td><code>"for"</code></td>
            <td><code>""</code></td>
            <td><code>"in"</code></td>
            <td><code>":\n"</code></td>
            <td><code>""</code></td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td><code>"for"</code></td>
            <td><code>"(let"</code></td>
            <td><code>"of"</code></td>
            <td><code>") {\n"</code></td>
            <td><code>"\n}"</code></td>
        </tr>
    </tbody>
</table>

### Errata
