module.exports = {
    //network selected by default if user's active network wasn't saved
    network: {
        defaultNodeKey: 'BNB_O'
    },

    //defines which elements will be loaded from storage
    storage: {
        nodeList: true,
        activeNode: true,
        contractList: true,
        activeContract: true
    },

    stub: {
        contracts: {
            path: '../stubs/contractListStub.js', //TO DO
            use: false
        }
    },

    //wallets for donations
    donations: {
        eth: '0xF01Acbaf3e5d2403015ac6E8C2518EfEDdaBC699',
        btc: '1JMpxB35CQvhxGmrhqbh5dbe9LwJT8tU3q'
    },

    contacts: {
        email: 'contact@justsmartcontracts.dev',
        github: 'https://github.com/olekon/justsmartcontracts'
    },

    server: {
        url: 'https://data-seed-prebsc-1-s1.binance.org:8545'
        //url: 'https://justsmartcontracts.dev/jscapi'
        //url: 'http://localhost:3000'
    }
}