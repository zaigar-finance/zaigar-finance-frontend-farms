import { MenuEntry } from '@zaigar-finance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "https://exchange.zaigar.finance/#/swap",
      },
      {
        label: "Liquidity",
        href: "https://exchange.zaigar.finance/#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
    //  {
     //   label: 'CoinMarketCap',
    //    href: 'https://coinmarketcap.com/currencies/zaigar-finance/',
    //  },     
      {
        label: 'Price Chart',
        href: 'https://goswapp-bsc.web.app/0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },      
      {
        label: 'Github',
        href: 'https://github.com/zaigar-finance/',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },
  //    {
 //       label: 'Add to Metamask',
 //       href: 'https://bit.ly/3sSDdrB',
 //     },    
    ],
  },
  {
    label: 'zaigar.com',
    icon:  'GroupsIcon',
    href: 'https://zaigar.com',
  },
 {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Buy ZAFI',
        href: 'https://exchange.zaigar.finance/#/swap?inputCurrency=ETH&outputCurrency=0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },
      {
        label: 'Whitepaper(EN)',
        href: 'https://zaigar.finance/ZaigarFinancewpenglish.',
      },
      {
        label: 'Whitepaper(PT)',
        href: 'https://zaigar.finance/ZaigarFinancewpportuguese.',
      },
    ],
  }, 
  /* {
    label: 'Audit By Certik',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/zcore',
  },  */
 /* {
    label: 'Docs',
    icon: 'GitbookIcon',
    href: 'https://docs.zcore.fi/',
  }, */
]

export default config
