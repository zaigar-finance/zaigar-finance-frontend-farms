import React from 'react'
import { Card, CardBody, Heading, Text } from '@zaigar-finance/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useZaifTotalSupply, useZaifBurnedBalance,useMaxSupply } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getZaifAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceZaifBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const ZaifStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useZaifTotalSupply()
  const maxSupply = 10000000 // useMaxSupply()
  const burnedBalance = useZaifBurnedBalance(getZaifAddress())
  const farms = useFarms();
  const zaifPrice =  usePriceZaifBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const zaifSupply = getBalanceNumber(circSupply);
  const marketCap =  zaifPrice.times(circSupply);

  let zfaiPerBlock = 3;
  if(farms && farms[0] && farms[0].zfaiPerBlock){
    zfaiPerBlock = new BigNumber(farms[0].zfaiPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  // value={getBalanceNumber(marketCap)}
  // value={getBalanceNumber(burnedBalance)} 

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'ZAIF Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Max Supply')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={maxSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Circulating Supply')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Tax Fee')}</Text>
          <Text fontSize="14px">{TranslateString(999, '5%')}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default ZaifStats
