require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strategy razor noise hole good end army gasp'; 
let testAccounts = [
"0xbf40c04e7c4b1d7a4b8b90c836201bc25226b70671b99af656178fe6c15e978f",
"0xd00c4aa4f2b1f2b1efc7eddcf4f2eb5458784dc28344db77149aebca28b34279",
"0xfe4694bb0a6509e5b85b717cf044babf5e1a6108a9740607e5094201ee380133",
"0xf24249584e8449b3beab62281fa206c872f40d7c74fb4dd77514064c48b24479",
"0x615757550fc52eae980e3ab1c8b77fe1fbb00b2b0534db68492ba7319934a3ae",
"0x052b597954e30982cd71e52b9ab84d7d6fb18f1afeecc8d9e82e64971da133a5",
"0xfb07247ffefdf19e8259623d599c188fbb6a7b4e5a65fc174e46759d25e7c7e3",
"0x6769578e703657218fa31860d90dbbae256fb36b23a971c488995ab08c0b7224",
"0x43aec2e49c5064b0b574247eec01e269253a7760d9bcb11c3b41d89f857da71e",
"0xe2581c6961b6a4eda9cf16b64fd7ce5732da73cddca8159950649e31a66e7e0e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
