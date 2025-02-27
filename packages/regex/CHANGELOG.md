### 3.0.1 - 2019-07-27

#### 🛠 Internals

- **[TS]** Refined types. Replaced `any` with `unknown`.

# 3.0.0 - 2019-05-09

#### 🎉 Release

- Updated to [Emoji 12](https://emojipedia.org/emoji-12.0/) and
  [Unicode 12](http://unicode.org/versions/Unicode12.0.0/).
  - Multi-person support, including multi-gender and multi-skin tone.
  - 72 new emoji (230 including skin tones variations).
  - New groups and subgroups.
- Updated to [CLDR 35.1](http://cldr.unicode.org/index/downloads/cldr-35-1).
- Updated shortcodes.

#### 🛠 Internals

- **[TS]** Each regex file now has an individual declaration file.

# 2.0.0 - 2018-06-23

#### 🎉 Release

- Updated to [Emoji 11](https://emojipedia.org/emoji-11.0/) and
  [Unicode 11](http://unicode.org/versions/Unicode11.0.0/).
  - 77 new emoji (157 including skin tones variations).
  - 4 new components (bald, curly hair, red hair, white hair).
- Updated to [CLDR 33.1](http://cldr.unicode.org/index/downloads/cldr-33-1).
  - Tons of new annotations and keywords.
- Updated shortcodes.

#### 💥 Breaking

- Changed the Ogre emoticon from `O)` to `>O)`.

### 1.1.1 - 2018-05-24

#### 🐞 Fixes

- Fixed invalid `index.d.ts` declaration.

## 1.1.0 - 2018-05-22

#### 🚀 Updates

- Updated to [CLDR 33](http://cldr.unicode.org/index/downloads/cldr-33).

#### 🛠 Internals

- Converted from Flow to TypeScript.

### 1.0.9 - 2017-11-10

#### 🚀 Updates

- Updated to [CLDR 32](http://cldr.unicode.org/index/downloads/cldr-32).

### 1.0.8 - 2017-10-11

#### 🐞 Fixes

- Improved the accuracy of `emoji` and `text` presentation specific patterns.

### 1.0.7 - 2017-10-10

#### 🐞 Fixes

- Emojis with newly added variation selectors will now properly match hexcodes without trailing
  `FE0E`/`FE0F` (their legacy variant).

### 1.0.6 - 2017-09-10

#### 🛠 Internals

- Updated to Yarn workspaces.

### 1.0.5 - 2017-09-05

#### 🛠 Internals

- Updated regex patterns.

### 1.0.4 - 2017-08-22

#### 🐞 Fixes

- Added missing emoticons to `emoticon` regex.
- Removed unwanted emoticon permutations from `emoticon` regex.

### 1.0.3 - 2017-08-21

#### 🛠 Internals

- Updated changelogs.

### 1.0.2 - 2017-08-19

#### 🐞 Fixes

- Removed tests from distribution files.

### 1.0.1 - 2017-08-18

#### 🐞 Fixes

- Fixed Flowtype definitions.

# 1.0.0 - 2017-08-17

#### 🎉 Release

- Initial release!
