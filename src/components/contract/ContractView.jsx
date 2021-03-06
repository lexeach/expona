import React from 'react';
import {Tabs} from 'antd';
import ContractPropertiesView from './ContractPropertiesView.jsx';
import ContractGettersView from './ContractGettersView.jsx';
import ContractOperationsView from './ContractOperationsView.jsx';
import ContractEventsView from './ContractEventsView.jsx';

const TabPane = Tabs.TabPane;

const contractAddress = '0x6635f5E15cF561Da122DE75D65F3482aeF96778B';
const myContAbi = {
    "contractName" :  "EXPONA_RBCF",
    "abi": [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_tokenReward","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"str1","type":"string"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"uint256","name":"height","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"AutopoolIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"constant":true,"inputs":[],"name":"Autopool_Level_Income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"REGESTRATION_FESS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"changeToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"changeTokenReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentTokenAccepting","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRegistrationFess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fess","type":"uint256"}],"name":"setRegistrationFess","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"setTokenAcceptance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalFreeze","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"batchPaid","type":"uint256"},{"internalType":"uint256","name":"autoPoolPayReceived","type":"uint256"},{"internalType":"uint256","name":"missedPoolPayment","type":"uint256"},{"internalType":"address","name":"autopoolPayReciever","type":"address"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
}

class ContractView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.contract === undefined) {
            return <>
               
                    </>;
        } else {
                let contract = this.props.web3Provider.getContract(
                //this.props.contract.abi,
                myContAbi.abi,
				contractAddress
                //this.props.contract.address
            );
            return (
                <>
                    <Tabs defaultActiveKey="properties">
                        <TabPane tab="Properties" key="properties" >
                            <ContractPropertiesView contract={contract} />
                        </TabPane>
                        <TabPane tab="Dashboard" key="getters" >
                            <ContractGettersView contract={contract} />
                        </TabPane>
                        <TabPane tab="Registration" key="operations" >
                            <ContractOperationsView contract={contract} />
                        </TabPane>
                        <TabPane tab="Report" key="events" >
                            <ContractEventsView contract={contract} />
                        </TabPane>
                    </Tabs>
                </>
            );
        }
    }
}

export default ContractView;