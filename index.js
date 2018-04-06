/*!
 * vx-snapshot
 * +v MIT 2018
 */
import _cloneDeep from 'lodash/cloneDeep'
import _last from 'lodash/last'
import { diff, formatters } from 'jsondiffpatch/dist/jsondiffpatch.esm'

// Every great magic trick consists of three parts or acts.
export default function (store) {
    // # the Pledge [][0]
    // The first part is called "The Pledge". The magician shows you something ordinary: a deck of cards, a bird or a man. He shows you this object. Perhaps he asks you to inspect it to see if it is indeed real, unaltered, normal. But of course... it probably isn't.
    window.__snapshot__ = [_cloneDeep(store.state)]
    store.subscribe((mutation, state) => {
        // # the Turn [][odd]
        // The second act is called "The Turn". The magician takes the ordinary something and makes it do something extraordinary. Now you're looking for the secret... but you won't find it, because of course you're not really looking. You don't really want to know. You want to be fooled.
        window.__snapshot__.push([mutation.type, _cloneDeep(mutation.payload)])
        // # the Prestige [][even]
        // But you wouldn't clap yet. Because making something disappear isn't enough; you have to bring it back. That's why every magic trick has a third act, the hardest part, the part we call "The Prestige".
        window.__snapshot__.push(diff(_cloneDeep(state), window.__snapshot_l__ || window.__snapshot__[0]) || {})
        //
        console.log(formatters.console.format(_last(window.__snapshot__)))
        //
        window.__snapshot_l__ = _cloneDeep(store.state)
    })
}
