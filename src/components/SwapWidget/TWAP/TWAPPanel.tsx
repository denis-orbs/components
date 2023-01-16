import { TWAP as PangolinTwap } from '@orbs-network/twap-ui-pangolin';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SwapTypes, ZERO_ADDRESS } from 'src/constants';
import { useChainId, usePangolinWeb3 } from 'src/hooks';
import { useAllTokens } from 'src/hooks/Tokens';
import { useWalletModalToggle } from 'src/state/papplication/hooks';
import SelectTokenDrawer from '../SelectTokenDrawer';
import TradeOption from '../TradeOption';
import { Root } from '../styled';

export interface SwapWidgetProps {
  defaultInputAddress?: string;
  defaultOutputAddress?: string;
  swapType: string;
  setSwapType: (value: SwapTypes) => void;
  isLimitOrderVisible: boolean;
  isTWAPOrderVisible: boolean;
  partnerDaaS: string;
}

function Twap({
  defaultInputAddress,
  defaultOutputAddress,
  swapType,
  setSwapType,
  isLimitOrderVisible,
  isTWAPOrderVisible,
  partnerDaaS,
}: SwapWidgetProps) {
  const { account, library } = usePangolinWeb3();
  const chainId = useChainId();
  const theme = useContext(ThemeContext);
  const toggleWalletModal = useWalletModalToggle();
  const allTokens = useAllTokens();

  return (
    <Root>
      <TradeOption
        isTWAPOrderVisible={isTWAPOrderVisible}
        swapType={swapType}
        setSwapType={setSwapType}
        isLimitOrderVisible={isLimitOrderVisible}
      />
      <PangolinTwap
        connect={toggleWalletModal}
        connectedChainId={chainId}
        provider={library?.provider}
        account={account}
        dappTokens={allTokens}
        srcToken={defaultInputAddress}
        dstToken={defaultOutputAddress}
        TokenSelectModal={SelectTokenDrawer}
        theme={theme}
        partnerDaas={partnerDaaS === ZERO_ADDRESS ? undefined : partnerDaaS}
      />
    </Root>
  );
}

export default Twap;
