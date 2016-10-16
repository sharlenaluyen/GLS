# Native List Commands

## Feature Overview

All supported languages provide some amount of built-in support to interact with the contents of a list.


## Commands

### `list pop`

`list pop : name`

The `list pop` command removes the last element of a list.

## Usage

```gls
list pop : foo
```

### CSharp

```csharp
foo.RemoveAt(foo.Count - 1);
```

### Java

```java
foo.remove(foo.size() - 1);
```

### Python

```python
foo.pop()
```

### Ruby

```ruby
foo.pop
```

### TypeScript

```typescript
foo.pop();
```

## Implementation

### Properties

These commands will be implemented as native calls.

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Pop</td>
            <td><em>(native call properties)</em></td>
            <td>Method properties to remove the last element of a list.</td>
        </tr>
    </tbody>
</table>

### Language Values

<table>
    <thead>
        <th>Language</th>
        <th>Pop</th>
    </thead>
    <tbody>
        <tr>
            <th>CSharp</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"RemoveAt"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["{0}.Count - 1"]</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Java</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"remove"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td><code>["{0}.size() - 1"]</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Python</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>Ruby</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <th>TypeScript</th>
            <td>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><code>"pop"</code></td>
                    </tr>
                    <tr>
                        <td>Scope</td>
                        <td><code>Static</code></td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td><code>Function</code></td>
                    </tr>
                </table>
            </td>
        </tr>
    </tbody>
</table>

### `list clear`

`list clear : name`

The `list clear` command clears the entire list.

## Usage

```gls
list clear : foo
```
