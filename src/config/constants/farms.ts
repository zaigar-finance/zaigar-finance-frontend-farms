import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
 {
    pid: 0,
    risk: 2,
    lpSymbol: 'ZAIF',
    lpAddresses: {
      97: '0x4305a48AD5ed01F56038693De8d92E36E89588b4',
      56: '0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
    },
    tokenSymbol: 'ZAIF',
    tokenAddresses: {
      97: '0x4305a48AD5ed01F56038693De8d92E36E89588b4',
      56: '0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
    },
    isTokenOnly: true,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  /*
  {
    pid: 1,
    risk: 4,
    lpSymbol: 'ZAIF-BNB LP',
    lpAddresses: {
      97: '0x620d017bd536cd35d1cf57425e697042d008ba52',
      56: '',
    },
    tokenSymbol: 'ZAIF',
    tokenAddresses: {
      97: '0xD614Fa47Af78087eff6cd439CEed0C5847E01834',
      56: '0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 
  {
    pid: 2,
    risk: 4,
    lpSymbol: 'ZAIF-BUSD LP',
    lpAddresses: {
      97: '0x29b106bbd827cb11c03c5e7e54d797bcc759bde3',
      56: '',
    },
    tokenSymbol: 'ZAIF',
    tokenAddresses: {
      97: '0xD614Fa47Af78087eff6cd439CEed0C5847E01834',
      56: '0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
   {
    pid: 3,
    risk: 4,
    lpSymbol: 'ZAIF-USDT LP',
    lpAddresses: {
      97: '0x48eafadfd9d787816aa2464060c520e4e5c35194',
      56: '',
    },
    tokenSymbol: 'ZAIF',
    tokenAddresses: {
      97: '0xD614Fa47Af78087eff6cd439CEed0C5847E01834',
      56: '0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  }, 
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '0xf855e52ecc8b3b795ac289f85f6fd7a99883492b',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  }, 
  {
    pid: 5,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0x5126c1b8b4368c6f07292932451230ba53a6eb7a',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
    {
    pid: 6,
    risk: 1,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9c21123d94b93361a29b2c2efb3d5cd8b17e0a9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    isTokenOnly: true,
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x9c21123d94b93361a29b2c2efb3d5cd8b17e0a9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    isTokenOnly: true,
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
   {
    pid: 8,
    risk: 1,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    isTokenOnly: true,
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 9,
    risk: 1,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    isTokenOnly: true,
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  }, 
  {
    pid: 10,
    risk: 1,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '0x6ce8da28e2f864420840cf74474eff5fd80e65b8',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    isTokenOnly: true,
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0x6ce8da28e2f864420840cf74474eff5fd80e65b8',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, */

]

export default farms
