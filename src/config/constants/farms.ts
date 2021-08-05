import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 2,
    lpSymbol: 'ZFAI',
    lpAddresses: {
      97: '0xd58bc8587535241FC1F66B28C06bbC4C263B0f2D',
      56: '0x03340dd153a27e16f3c79fa58b90f7fb13470902',
    },
    isTokenOnly: true,
    tokenSymbol: 'ZFAI',
    tokenAddresses: {
      97: '0xd58bc8587535241FC1F66B28C06bbC4C263B0f2D',
      56: '0x205cD59eEA8e8c5083f16D20e1050fD4a7d72037',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'ZAIF',
    lpAddresses: {
      97: '0xd614fa47af78087eff6cd439ceed0c5847e01834',
      56: '0x32C065Da7daFe3CFF90a5fE41FEC1e6D71473Cf8',
    },
    isTokenOnly: true,
    tokenSymbol: 'ZAIF',
    tokenAddresses: {
      97: '0xd614fa47af78087eff6cd439ceed0c5847e01834',
      56: '0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 

  {
    pid: 2,
    risk: 4,
    lpSymbol: 'ZFAI-BNB LP',
    lpAddresses: {
      97: '0x5f6Fb84EC254733013665097dA73407b1FA5d3A1',
      56: '0x03340dd153a27e16f3c79fa58b90f7fb13470902',
    },
    tokenSymbol: 'ZFAI',
    tokenAddresses: {
      97: '0xd58bc8587535241FC1F66B28C06bbC4C263B0f2D',
      56: '0x205cD59eEA8e8c5083f16D20e1050fD4a7d72037',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 
  {
    pid: 3,
    risk: 4,
    lpSymbol: 'ZAIF-BNB LP',
    lpAddresses: {
      97: '0x620d017bd536cd35d1cf57425e697042d008ba52',
      56: '0x32C065Da7daFe3CFF90a5fE41FEC1e6D71473Cf8',
    },
    tokenSymbol: 'ZAIF',
    tokenAddresses: {
      97: '0xd614fa47af78087eff6cd439ceed0c5847e01834',
      56: '0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
  {
    pid: 8,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  } 
 /* {
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
  }, */
  /*  {
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
  }, */
  {
    pid: 5,
    risk: 1,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    isTokenOnly: true,
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
   {
    pid: 6,
    risk: 1,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    isTokenOnly: true,
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    isTokenOnly: true,
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 
/*  {
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
