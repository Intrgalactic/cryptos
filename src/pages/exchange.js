import Header from "layouts/header";
import { Theme, SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { CtaBtn } from "components/cta-btn";
import { ethers } from "ethers";
import ExchangeNav from "layouts/exchange-nav";
import SwapWidgets from "layouts/swap-widgets";
import Loader from "layouts/loader";
import useLoader from "hooks/useLoader";
import { useEffect, useState, useReducer } from "react";
import setLocalStorageItem from "utils/utilities";
import useLocalStorage from "hooks/useLocalStorage";
import { SwapWidgetBox } from "components/swap-widget-box";
import { LockedBox } from "components/locked-box";
import { ErrorPopup } from "components/error-popup";


export default function Exchange({ isLoading, setIsLoading }) {
    const initialErrState = {
        errorReason: '',
        errorDescription: '',
        isError: false
    }
    const [provider, setProvider] = useState();
    const [accounts, setAccounts] = useState(useLocalStorage("eth_accounts"));
    const [signer, setSigner] = useState();
    const [network, setNetwork] = useState({
        networkName: '',
        chainId: 1,
    })
    const [isProviderMissing, setIsProviderMissing] = useState();
    const [error, dispatch] = useReducer(errorReducer, initialErrState);

    useLoader(setIsLoading);

    useEffect(() => {

        try {
            const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
            if (!provider) {
                setProvider(web3Provider);
                getNetwork();
            }
            setSigner(web3Provider.getSigner());
            window.ethereum.on("accountsChanged", refreshAccounts);
            window.ethereum.on("chainChanged", getNetwork);
            return () => {
                window.ethereum.removeListener("chainChanged", getNetwork);
                window.ethereum.removeListener("accountsChanged", refreshAccounts);
            }
        }
        catch (err) {
            setIsProviderMissing(true);
            dispatch({ type: err.reason });
        }

    }, [provider]);
    async function getNetwork() {
        try {
            const networkProvider = new ethers.providers.Web3Provider(window.ethereum);
            const network = await networkProvider.getNetwork();
            if (network.name !== "homestead") {
                dispatch({ type: "wrong network" });
            }
            else if (network.name === "homestead") {
                dispatch({ type: "no error" });
            }
            setNetwork({
                networkName: network.name,
                chainId: network.chainId
            })
        }
        catch (err) {
            dispatch({type:err.code});
        }
    }
    async function connectWallet() {
        try {
            const accounts = await provider.send("eth_requestAccounts", []);
            refreshAccounts(accounts);
        }
        catch (err) {
            dispatch({ type: err.code });
        }
    }
    function refreshAccounts(accounts) {
        try {
            if (accounts.length > 0) {
                setLocalStorageItem('set', "eth_accounts", JSON.stringify({ accounts }));
                setAccounts({
                    accounts: accounts
                });
                dispatch({ type: "no error" });
                getBalance(accounts);
            }
            else {
                setLocalStorageItem('delete', "eth_accounts");
                setAccounts(null);
            }
        }
        catch (err) {
            dispatch({type:err.code});
        }
    }
    async function getBalance(accounts) {
        try {
            var balance = await provider.getBalance(accounts[0]);
            balance = ethers.utils.formatEther(balance);
            console.log(balance);
            setAccounts({
                ...accounts,
                balance: balance
            })
        }
        catch (err) {
            dispatch({type:err.code});
        }
    }
    function errorReducer(state, action) {
        switch (action.type) {
            case 'missing provider':
                return { errorReason: "The provider is missing", errorDescription: "Please download wallet extension (e.g metamask or walletConnect)", isError: true }
            case "wrong network":
                return { errorReason: "The network is not main ERC-20", errorDescription: "Please change your network to mainnet", isError: true }
            case -32002:
                return { errorReason: "The request is already pending", errorDescription: "Please accept connection in your wallet", isError: true }
            case "no error":
                return initialErrState
            case 4001:
                return initialErrState
            default:
                return { errorReason: "Something went wrong", errorDescription: "Please try again", isError: true }
        }
    }
    return (
        <>
            <Header />
            <div className="exchange-app">
                {!isProviderMissing && !error.isError &&
                    <>
                        <ExchangeNav>
                            {accounts === null && <CtaBtn btnText="connect" action={connectWallet} />}
                        </ExchangeNav>
                        <SwapWidgets>
                            <SwapWidgetBox>
                                {accounts !== null && <SwapWidget hideConnectionUI={true} width="20vw" />}
                                {accounts === null &&
                                    <LockedBox>
                                        <CtaBtn btnText="connect" action={connectWallet} />
                                    </LockedBox>}
                            </SwapWidgetBox>
                        </SwapWidgets>
                    </>
                }
            </div>
            {isProviderMissing || error.isError ?
                <ErrorPopup errReason={error.errorReason} errDescription={error.errorDescription} /> : null
            }
            {isLoading &&
                <Loader />}

        </>
    )
}