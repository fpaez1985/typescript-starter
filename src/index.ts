// eslint-disable-next-line no-console
import {createKeyMulti, } from '@polkadot/util-crypto';
import {u8aToHex} from '@polkadot/util';
import { encodeAddress } from '@polkadot/util-crypto';

let multi = createKeyMulti(
    [
        'E7e1c9i3ZGkFjtX553SHPhANJVz8MdQcMX84hS2UsecZqZx',
        'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'
    ],
    2);

console.log(encodeAddress(u8aToHex(multi),42))



