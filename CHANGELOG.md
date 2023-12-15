## Unreleased

### UI

- **components/ThemeSelector**: increase font size for label <code>[9ed28a4](https://github.com/Norviah/portfolio/commit/9ed28a448bcd69d4ba18d19caef37ac825e0d2b3)</code>

- **mdx**: set the theme of codeblocks to reflect the site's theme <code>[edaed47](https://github.com/Norviah/portfolio/commit/edaed479ce2ab8536267c0c5d1efbcd6dc9cbd60)</code>

- **components/BlogTable**: render the `date` header in a `span` element <code>[1579e4e](https://github.com/Norviah/portfolio/commit/1579e4e9280281c9f108060e00f9c4ebbdbf3af1)</code>

- **components/UnorderedList**: mute the color of the marker <code>[c892b60](https://github.com/Norviah/portfolio/commit/c892b603fbe48ee2c4857169a76e099700e6de00)</code>

- **components/Button**: brighten icon buttons text color on hover <code>[fefb7ac](https://github.com/Norviah/portfolio/commit/fefb7ac42fc5e594f9a6540a23967e8afc0b67f6)</code>

- use the `Header` component when rendering headers <code>[6648cdb](https://github.com/Norviah/portfolio/commit/6648cdb086b7e95ebaf340f5f8af9f2d5f6e75f1)</code>

- darken foreground for themes <code>[3dc8d49](https://github.com/Norviah/portfolio/commit/3dc8d4910f47b2631d30a2ce651d84da66d378dd)</code>

- **page/blog**: don't tighten blog titles <code>[ace37d6](https://github.com/Norviah/portfolio/commit/ace37d658b1455730d0cc1b7097b7ee70e12b31a)</code>

- lessen padding for smaller screens <code>[03539ce](https://github.com/Norviah/portfolio/commit/03539cea44d25877826b2e0a3721dfd14a401262)</code>

- **theme**: lighten the muted foreground color for light mode <code>[0b35033](https://github.com/Norviah/portfolio/commit/0b35033eeb0b429df90778040b9e4c7b859c1ae6)</code>

### Build System

- **contentlayer**: make the `publishedAt` property required and set the type to `date` <code>[ed8faad](https://github.com/Norviah/portfolio/commit/ed8faad6ac35a28452bf4f2d29edbf3f4f37b536)</code>

- **contentlayer**: add a new property to reference when a blog has been updated <code>[4785903](https://github.com/Norviah/portfolio/commit/478590309764e81f70191dba90b03ed7feacb0fe)</code>

### Bug Fixes

- **components/DynamicLink**: remove the `href` property when extending the base `Link` props <code>[02cb397](https://github.com/Norviah/portfolio/commit/02cb39737c20aa32ba1c9abcc84cada2f923d9a0)</code>

- render a blog's date on the client for accurate information <code>[e4c87ff](https://github.com/Norviah/portfolio/commit/e4c87ff0fa8f6e501484cd71f3385975ea5108c5)</code>

### Features

- **pages/blog**: render blogs within a table <code>[c3959e2](https://github.com/Norviah/portfolio/commit/c3959e20cd186e680e6b1a5209a0df6268b5ef3b)</code>

- **components/ThemeSelector**: set the tooltip's state to reflect if the mouse is hovering over the element <code>[385fb31](https://github.com/Norviah/portfolio/commit/385fb311b68343a0b0b1a2beee2fa63e94b7f945)</code>

- **components**: implement a `Link` component to dynamically use the correct component <code>[2970629](https://github.com/Norviah/portfolio/commit/2970629d5479566f49ebd3d9233e3991b6aa22ad)</code>

- **layout**: add link to github repo on navbar <code>[10e608a](https://github.com/Norviah/portfolio/commit/10e608a69c61944580320c2d476fd939406a78b3)</code>

### Refactored

- set mdx component to use shadcn components <code>[c611233](https://github.com/Norviah/portfolio/commit/c611233361416fc8b034d7083d1b013d8a771381)</code>

- **components/ThemeSelector**: refactor component to a toggle button <code>[3f02bb9](https://github.com/Norviah/portfolio/commit/3f02bb90c4a7751d68ef6a8160a899bdfa9719d2)</code>

### Init

- add template <code>[0ad9c57](https://github.com/Norviah/portfolio/commit/0ad9c575ba3e07de2d8c78b54b27ca43f8e7c657)</code>