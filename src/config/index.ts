import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CAKE_PER_BLOCK = new BigNumber(0)
export const BLOCKS_PER_YEAR = new BigNumber(10512000)
export const CAKE_PER_YEAR = CAKE_PER_BLOCK.times(BLOCKS_PER_YEAR)
export const BSC_BLOCK_TIME = 3

export const CAKE_POOL_PID = 1
