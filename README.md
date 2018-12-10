# vx-snapshot

[![Greenkeeper badge](https://badges.greenkeeper.io/chiaweilee/vx-snapshot.svg)](https://greenkeeper.io/)

snapshot plugin for Vuex

### Install
```cmd
npm install vx-snapshot
```

### Usage
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import snapshot from 'vx-snapshot'
const store = new Vuex.Store({
  plugins: process.env.NODE_ENV !== 'production'
    ? [snapshot]
    : []
})

// ...
```

### Console
> In browser's console, you will find like this when Vuex mutation happened..
> see more in https://github.com/benjamine/jsondiffpatch/blob/master/docs/formatters.md#console
```
// change
{
  system: {
    loading: false => true
  }
}
// add
{
  system: {
    version: "1441a7909c087dbbe7ce59881b9df8b9"
  }
}
```

### Dependencies
- lodash/cloneDeep
- lodash/last
- https://github.com/lodash/lodash
- jsondiffpatch/diff
- jsondiffpatch/formatters
- https://github.com/benjamine/jsondiffpatch
