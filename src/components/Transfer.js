import React from 'react'
import { useContract, useTransferToken, Web3Button } from "@thirdweb-dev/react";
import { useParams } from 'react-router-dom';

const contractAddress = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889";

export default function Transfer() {
    const { walletAddress } = useParams();
    const [ message, setMessage ] = React.useState('');
    const [ amount, setAmount ] = React.useState();
    const { contract } = useContract(contractAddress);
    const {
        mutate: transferTokens,
        isLoading,
        error,
    } = useTransferToken(contract);

    return (
        <div className='transfer-container'>
            <div className='transfer-container__card'>
                <div className='transfer-container__card__title'>
                    <h1>
                        Transfer WMATIC to Another User
                    </h1>
                </div>
                <div className='transfer-container__card__body'>
                    <form>
                        <div className='transfer-container__card__body__input'>
                            <input type='text' name='amount' id='amount' placeholder='Amount' onChange={(e)=>setAmount(e.target.value)} />
                        </div>
                        <div className='transfer-container__card__body__input'>
                            <input type='text' name='message' id='message' placeholder='Message' onChange={(e)=>setMessage(e.target.value)} />
                        </div>
                        {/* <div className='transfer-container__card__body__input'>
                        <input type='text' name='Amount' id='username' placeholder='Username'/>
                    </div> */}
                    </form>
                </div>
                <div className='transfer-container__card__footer'>
                    <div className='transfer-container__card__footer__button'>
                        <Web3Button
                            contractAddress={contractAddress}
                            action={() =>
                                transferTokens({
                                    to: walletAddress, // Address to transfer to
                                    amount: amount, // Amount to transfer
                                })
                            }
                        >
                            Transfer
                        </Web3Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
