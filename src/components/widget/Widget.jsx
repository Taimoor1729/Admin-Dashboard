import React from 'react'
import './widget.scss'
import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material'
import { red } from '@mui/material/colors';

const Widget = ({ type }) => {
    let data;

    // temporary
    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: <PersonOutline className='icon' style={{ color: "crimson", backgroundColor: "rgba(0, 128, 0, 0.2" }} />
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "see all oredrs",
                icon: <ShoppingCartOutlined className='icon' style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2" }} />
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlined className='icon' style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2" }} />
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "see details",
                icon: <AccountBalanceWalletOutlined className='icon' style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2" }} />
            }
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.money && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardArrowUp />
                    {diff}%
                </div>
                {/* <PersonOutline className='icon' /> */}
                {data.icon}
            </div>
        </div>
    )
}

export default Widget