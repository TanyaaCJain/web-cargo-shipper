# Dotenv

## Setup

Create a `.env` file in the root of your project and add the following:

```
GOOGLE_MAPS_TOKEN= <your token>
```

## Implementation Explained for Developers

### In nuxt.config.ts

Make sure that you have the variables defined above in your `nuxt.config.ts` file as shown below:
```
runtimeConfig: {
    public: {
      googleMapsToken: process.env.GOOGLE_MAPS_TOKEN || ""
    }
}
```

Note:
- `public` helps to make the variables available to the client side.
- Ensure that the variable name does not include the word `API` or `key` as this will not be available to the client side.


### In the component

You can access the variables in the component inside the `setup` function as shown below:

```
const config = useRuntimeConfig();
const googleMapsToken = ref(config.public.googleMapsToken).value;
```
