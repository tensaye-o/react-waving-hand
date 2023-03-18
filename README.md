# React Waving Hand

Add smoothly animated waving hand to your react project in just a minute.

## Installation

```sh
npm i @tensaye-o/react-waving-hand

# via yarn
yarn add @tensaye-o/react-waving-hand

# via pnpm
pnpm add @tensaye-o/react-waving-hand
```

## Example

```tsx
<WavingHand loop={2} motion={true} size='2.5rem' type={2} />
```

## Documentation

Check out the [live demo]().

### Properties

<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Remarks</th>
  </tr>
  <tr>
    <td><p>size</p></td>
    <td><p><code>string</code></p></td>
    <td>
      <p>Optional.</p>
      <p>Same as the css style property <code>fontSize</code>.</p>
      <p>Default value <code>"1rem"</code>.</p>
    </td>
  </tr>
  <tr>
    <td><p>type</p></td>
    <td><p><code>1 | 2 | 3 | 4 | 5 | 6</code></p></td>
    <td>
      <p>Optional.</p>
      <p>Based on <a href="https://en.wikipedia.org/wiki/Fitzpatrick_scale">Fitzpatrick scale</a>.</p>
      <p>Default value <code>3</code>.</p>
    </td>
  </tr>
  <tr>
    <td><p>motion</p></td>
    <td><p><code>boolean</code></p></td>
    <td>
      <p>Optional.</p>
      <p>When set to <code>true</code>, the animation will be turned on with <code>infinite</code> iteration.</p>
      <p>Default value <code>false</code>.</p>
    </td>
  </tr>
  <tr>
    <td><p>loop</p></td>
    <td><p><code>number && >=0</code></p></td>
    <td>
      <p>Optional.</p>
      <p><code>loop</code> needs to be an integer which is over -1, meanwhile it has runtime typechecking for number values. If the value is <code>0</code> and <code>motion</code> opened, animation iteration will be <code>infinite</code>.</p>
      <p>Default value <code>0</code>.</p>
    </td>
  </tr>
  <tr>
    <td><p>others</p></td>
    <td><p><code>HTMLAttributes&lt;HTMLSpanElement&gt;</code></p></td>
    <td>
      <p>Attributes inherit from <code>span</code> element.</p>
    </td>
  </tr>
</table>
