#### 0.5.1 (2019-06-10)

##### Build System / Dependencies

*  build ([ac1bc408](https://github.com/no-chris/chord-mark/commit/ac1bc408051e4cfa1f3c5dea83cbb3b2e820bb3e))
*  Fix npm module ([918fb552](https://github.com/no-chris/chord-mark/commit/918fb552e73740e1ca384d60aeea1fdea42f21a7))

### 0.5.0 (2019-06-10)

##### Build System / Dependencies

*  Make build UMD compatible ([d7c3ff83](https://github.com/no-chris/chord-mark/commit/d7c3ff83c77eedfb052ad0671dd2ac6dfb7dce24))

### 0.4.0 (2019-06-10)

##### Build System / Dependencies

*  build ([e73b9de3](https://github.com/no-chris/chord-mark/commit/e73b9de312ceb71bfccac603461e743361d5ef5a))
*  Add scripts for changelog generation ([c434fd09](https://github.com/no-chris/chord-mark/commit/c434fd0983363da0b61299016e8f3c5bf4df7a9d))
*  Update dependencies ([4ba7a5c0](https://github.com/no-chris/chord-mark/commit/4ba7a5c05e9a4c134504f459ad0f290ff3502a0b))

##### New Features

* **parser-renderer:**
  *  Use Chord-Symbol for simplify and transpose ([def07105](https://github.com/no-chris/chord-mark/commit/def0710581c60c7e9e12655f2da9312c7237c0fe))
  *  Use Chord-Symbol for simplify and transpose ([300b0a93](https://github.com/no-chris/chord-mark/commit/300b0a932a3444771eb8b3442177c3315f0bf414))
  *  Replace MomoChord by ChordSymbol ([06a1fd3d](https://github.com/no-chris/chord-mark/commit/06a1fd3d5585efe0d665b16534e2f98ad8ba8a6d))

### 0.3.0 (2019-05-10)

##### Build System / Dependencies

*  Updated dependencies ([5a8f7850](https://github.com/no-chris/chord-mark/commit/5a8f7850425618f5f97006a3ea0a0d58b335019f))
*  updated nvm version ([eb84c280](https://github.com/no-chris/chord-mark/commit/eb84c2807fa1898e94f77a866e5274bb2c0e41d7))
*  build ([010a95a3](https://github.com/no-chris/chord-mark/commit/010a95a3bb00a03ec2c61c7160a18dbf6312c637))

##### Chores

*  Updated dependencies, fixed changelog ([1b6f50db](https://github.com/no-chris/chord-mark/commit/1b6f50db493a688e6e2c8f2e6460ae8d6d17f5ba))

##### Documentation Changes

*  Updated Readme ([9fb9e666](https://github.com/no-chris/chord-mark/commit/9fb9e6667e94944b9661b1357f14b69a489de4ec))

##### New Features

* **renderer:**
  *  Added line renderer so styling can target repeated lines ([acaa78f3](https://github.com/no-chris/chord-mark/commit/acaa78f35792735926859abbc09d1d96b842c343))
  *  Add autoRepeatChords option ([21d1304f](https://github.com/no-chris/chord-mark/commit/21d1304fc309ad5dee326f13f2510b545ea138cc))
  *  Section Label is only numbered if Label appears more than once in song ([40292bbf](https://github.com/no-chris/chord-mark/commit/40292bbf24119f72587886f634a18b0cacd96c71))
  *  Added expandSectionRepeats option to renderer ([7ca0a3eb](https://github.com/no-chris/chord-mark/commit/7ca0a3eb6835c48c19da9205a0d3dac8e2fc5ae9))
  *  Renders sections labels ([81b4c956](https://github.com/no-chris/chord-mark/commit/81b4c956cf87688e9d3e0596c292851635c1db0f))
* **parser:**
  *  Render time signature lines ([e03e26f5](https://github.com/no-chris/chord-mark/commit/e03e26f58feb2fb80cfb5464f0bdcd851d894c7c))
  *  Allow to identify repeated lines ([0cbe96bb](https://github.com/no-chris/chord-mark/commit/0cbe96bbde4e0bd0afcaa2b4ca7ceaf9b8cbfc50))
  *  Allow to repeat a section with a "times" notation repeater ([4825411a](https://github.com/no-chris/chord-mark/commit/4825411a6703986274c3f7180d40ae76dc642855))
  *  Added chord line repeat functionality ([8e09674e](https://github.com/no-chris/chord-mark/commit/8e09674ecfb6861501764a06dc3a31c5b2410206))
  *  implemented chords repeat based on section label definitions ([961c16c9](https://github.com/no-chris/chord-mark/commit/961c16c9df2ef3772cc8dd1063d2dafa49355bcf))
  *  handle parsing of sections Labels ([a580b2d2](https://github.com/no-chris/chord-mark/commit/a580b2d2dff8f2616c87c55771925618cd5898d8))
* **parser-renderer:**  Handle the "no-chord" symbol (NC) ([1d400327](https://github.com/no-chris/chord-mark/commit/1d4003274c20a337e18de85deeb5707a8e807803))

##### Bug Fixes

* **parser-renderer:**  Fixed incorrect numbering of section when combined with repeat directive (x3...) ([c8211bad](https://github.com/no-chris/chord-mark/commit/c8211badbd2463610314d03d958695c0b94be703))

##### Refactors

* **renderer:**  Changed interface of most renderers ([0f613ecd](https://github.com/no-chris/chord-mark/commit/0f613ecd7815f9905ccd39c25dcef728857c55f5))
* **parser-renderer:**
  *  Use of lineTypes enum all over ([c8f4080c](https://github.com/no-chris/chord-mark/commit/c8f4080ce7c0a4dd57b98d7292169f5313842898))
  *  Handle empty lines as first class citizens ([905fbfa9](https://github.com/no-chris/chord-mark/commit/905fbfa906506d6a37e6259c21ae69078c627de5))
* **parser:**
  *  Created SongLines stateful object ([9318537b](https://github.com/no-chris/chord-mark/commit/9318537bb711c37b2f0098e61c80f4ce3c7e5f1b))
  *  added parsing helpers ([1ab708c4](https://github.com/no-chris/chord-mark/commit/1ab708c428ff6c7c8ebada3059b1ddec2193236b))
  *  renamed time-signature to timeSignature ([c964863c](https://github.com/no-chris/chord-mark/commit/c964863c7a496b425b6680a33154584ffffe5f67))
  *  moved matchers to their own folder ([bb478bde](https://github.com/no-chris/chord-mark/commit/bb478bdee2e5e2632cb879fb0eb7b5a682024645))

##### Tests

*  Removed useless manual mocks ([6ee1b74a](https://github.com/no-chris/chord-mark/commit/6ee1b74a2c4020a4f1cc2b3f3de5f8724686d162))
* **parser:**  Completed section repeat tests, added integration tests for sectionLabel rendering ([cd35db48](https://github.com/no-chris/chord-mark/commit/cd35db489e34dacc2d34db86c262b4709f54f48b))


### v0.2.0 (28/04/2019)

#### New features:

- Removed editor
- Renamed to ChordMark

### v0.1.0 (26/03/2019)

#### New features:

- Imported libraries files from demo app
- Initialized fitness functions
