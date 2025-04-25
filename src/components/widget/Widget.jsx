import React from 'react'
import './widget.scss'
import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material'
const Widget = ({ type }) => {
    let data;

    switch(type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: <PersonOutline className='icon'/>
            }
            break;
            case "order":
                data = {
                    title: "ORDERS",
                    isMoney: false,
                    link: "see all oredrs",
                    icon: <ShoppingCartOutlined className='icon'/>
                }
                break;
                case "earning":
                    data = {
                        title: "EARNINGS",
                        isMoney: true,
                        link: "View net earnings",
                        icon: <MonetizationOnOutlined className='icon'/>
                    }
                    break;
                    case "balance":
                        data = {
                            title: "BALANCE",
                            isMoney: true,
                            link: "see details",
                            icon: <AccountBalanceWalletOutlined className='icon'/>
                        }
                        break;
            default:
                break;
    }
    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>USERS</span>
                <span className='counter'>21312</span>
                <span className='link'>See all users</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                <KeyboardArrowUp />
                    20%
                </div>
                <PersonOutline className='icon' />
            </div>
        </div>
    )
}

export default Widget