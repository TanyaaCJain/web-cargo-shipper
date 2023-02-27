Package used: [Nuxt Icons](https://github.com/gitFoxCode/nuxt-icons)

## Implementation Explained for Developers

### Setup

In nuxt.config.ts, add the following:

```typescript
modules: ['nuxt-icons'],
```

### Usage

SVG icons need to be stored in the `assets/icons` directory.

Example,

The code to add icon saved as `assets/icons/file_name.svg` will be:

```typescript
<nuxt-icon name="file_name">
```

### Customisation

To customize it, change the stylesheet such that the svg icon is treated like a font instead of an image.
Use `font-size` to alter dimensions.
Use `color` to modify the color of svg.

Example,

```vue
<template>
   <div class="svg-icon">
      <nuxt-icon name="file_name">
   </div>
</template>

<style scoped>
.svg-icon {
  color: #ffffff;
  font-size: 20px;
}
</style>
```
