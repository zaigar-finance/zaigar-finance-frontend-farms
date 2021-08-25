import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@zaigar-finance/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const Airdrop = () => {
  const TranslateString = useI18n()

  return (
    
    <Page>
        <Heading size="xxl" text-align="center" ml="5px"><LogoIcon width="64px" /> ZFAI Airdrop Raffle</Heading>
        <iframe height="1000" title="airdrop" src="https://gleam.io/0lX4g/zaigar-finance" frameBorder="0" frame-src="https://gleam.io/0lX4g/zaigar-finance" />
    </Page>
  )
}

export default Airdrop
