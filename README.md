# Repeater

## Meta

- **State**: production
- **Production**:
  - **URL**: https://repeater.work.damonzucconi.com/
  - **URL**: https://damonzucconi-repeater.netlify.app/
- **Host**: https://app.netlify.com/sites/damonzucconi-repeater/overview
- **Deploys**: Merged PRs to `dzucconi/repeater#master` are automatically deployed to production. [Manually trigger a deploy](https://app.netlify.com/sites/damonzucconi-repeater/deploys)

## Parameters

| Param  | Description                | Type             | Default      |
| ------ | -------------------------- | ---------------- | ------------ |
| `size` | Width of colored line      | `number`         | `2`          |
| `gap`  | Width of gap between lines | `number`         | `2`          |
| `axes` | Which axis to run on       | `("x" or "y")[]` | `["x", "y"]` |
