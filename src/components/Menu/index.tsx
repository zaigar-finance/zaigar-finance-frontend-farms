import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd, usePriceZaifBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@zaigar-finance/uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const zaifPriceUsd = usePriceZaifBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd} // {cakePriceUsd.toNumber()}
      zaifPriceUsd={zaifPriceUsd} // {zaifPriceUsd.toNumber()}
      links={config}
      priceLinkZaif="https://bscscan.com/token/0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5"
      priceLinkZfai="https://bscscan.com/token/0x205cD59eEA8e8c5083f16D20e1050fD4a7d72037"
      {...props}
    />
  )
}

export default Menu
