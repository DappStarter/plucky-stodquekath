require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rifle spider uncle imitate private food section'; 
let testAccounts = [
"0xeaccd78df7bd7ab8b85c8dc2db79178e2336d63e6242377bb00aab875963b6eb",
"0xc00bfd3be2cbd4f15f74d0c6783e67f2b08aec584cf27cc14c9191464f916984",
"0xac884e661de9ba16ba1c9f6dc52712cd4bbb73044df679e395292a753b6d55ad",
"0x10771b4bdfa4b84711c4913bdd94c76eb2fb8cc95a674a0a87836d07cd1d1d61",
"0x5d356b6d93e607af304debbfa2b48f98a7c0284f836ac7c0a280ca8059f82688",
"0x47839b5af318ece834339de65d467fdee620e3f66e74be8f0cb891f50c47f04e",
"0x0e2692bc705339c321baa3028c538d348322080a5eae559de1127a3535a9fb31",
"0x6177e6c302d5b40d79b58025497d51fc96ec721417b85a3fb7685c03819a4f24",
"0x9a642cc7e3d1b943df0ab120b0ea851024342105ae79331799dee2ed68a6f144",
"0x4042800f06e4c5aea0426cf66549550348cbf7d5fd609b5acc30a51be6199d39"
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
