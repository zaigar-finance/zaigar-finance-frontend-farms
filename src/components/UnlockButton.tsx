import React from 'react'
import { Button, useWalletModal } from '@zaigar-finance/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <Button disabled {...props}>
      {TranslateString(999, 'Coming Soon')}
    </Button>
  )
}

export default UnlockButton
