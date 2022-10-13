import { ChainId } from '@pangolindex/sdk';
import { useHederaToken, useHederaTokens, useNearToken, useNearTokens, useToken, useTokens } from './Tokens';
import {
  useApproveCallback,
  useApproveCallbackFromNearTrade,
  useApproveCallbackFromTrade,
  useNearApproveCallback,
} from './useApproveCallback';
import { useNearSwapCallback, useSwapCallback } from './useSwapCallback';
import { useFlareUSDPrice, useNearUSDCPrice, useSongBirdUSDPrice, useUSDCPrice } from './useUSDCPrice';
import { useWrapCallback, useWrapNearCallback } from './useWrapCallback';

export type UseWrapCallbackHookType = {
  [chainId in ChainId]: typeof useWrapCallback | typeof useWrapNearCallback;
};

export const useWrapCallbackHook: UseWrapCallbackHookType = {
  [ChainId.FUJI]: useWrapCallback,
  [ChainId.AVALANCHE]: useWrapCallback,
  [ChainId.WAGMI]: useWrapCallback,
  [ChainId.COSTON]: useWrapCallback,
  [ChainId.SONGBIRD]: useWrapCallback,
  [ChainId.FLARE_MAINNET]: useWrapCallback,
  [ChainId.HEDERA_TESTNET]: useWrapCallback,
  [ChainId.NEAR_MAINNET]: useWrapNearCallback,
  [ChainId.NEAR_TESTNET]: useWrapNearCallback,
};

export type UseTokenHookType = {
  [chainId in ChainId]: typeof useToken | typeof useNearToken | typeof useHederaToken;
};

export const useTokenHook: UseTokenHookType = {
  [ChainId.FUJI]: useToken,
  [ChainId.AVALANCHE]: useToken,
  [ChainId.WAGMI]: useToken,
  [ChainId.COSTON]: useToken,
  [ChainId.SONGBIRD]: useToken,
  [ChainId.FLARE_MAINNET]: useToken,
  [ChainId.HEDERA_TESTNET]: useHederaToken,
  [ChainId.NEAR_MAINNET]: useNearToken,
  [ChainId.NEAR_TESTNET]: useNearToken,
};

export type UseApproveCallbackFromTradeHookType = {
  [chainId in ChainId]: typeof useApproveCallbackFromTrade | typeof useApproveCallbackFromNearTrade;
};

export const useApproveCallbackFromTradeHook: UseApproveCallbackFromTradeHookType = {
  [ChainId.FUJI]: useApproveCallbackFromTrade,
  [ChainId.AVALANCHE]: useApproveCallbackFromTrade,
  [ChainId.WAGMI]: useApproveCallbackFromTrade,
  [ChainId.COSTON]: useApproveCallbackFromTrade,
  [ChainId.SONGBIRD]: useApproveCallbackFromTrade,
  [ChainId.FLARE_MAINNET]: useApproveCallbackFromTrade,
  [ChainId.HEDERA_TESTNET]: useApproveCallbackFromTrade,
  [ChainId.NEAR_MAINNET]: useApproveCallbackFromNearTrade,
  [ChainId.NEAR_TESTNET]: useApproveCallbackFromNearTrade,
};

export type UseSwapCallbackHookType = {
  [chainId in ChainId]: typeof useSwapCallback | typeof useNearSwapCallback;
};

export const useSwapCallbackHook: UseSwapCallbackHookType = {
  [ChainId.FUJI]: useSwapCallback,
  [ChainId.AVALANCHE]: useSwapCallback,
  [ChainId.WAGMI]: useSwapCallback,
  [ChainId.COSTON]: useSwapCallback,
  [ChainId.SONGBIRD]: useSwapCallback,
  [ChainId.FLARE_MAINNET]: useSwapCallback,
  [ChainId.HEDERA_TESTNET]: useSwapCallback,
  [ChainId.NEAR_MAINNET]: useNearSwapCallback,
  [ChainId.NEAR_TESTNET]: useNearSwapCallback,
};

export type UseApproveCallbackHookType = {
  [chainId in ChainId]: typeof useApproveCallback | typeof useNearApproveCallback;
};

export const useApproveCallbackHook: UseApproveCallbackHookType = {
  [ChainId.FUJI]: useApproveCallback,
  [ChainId.AVALANCHE]: useApproveCallback,
  [ChainId.WAGMI]: useApproveCallback,
  [ChainId.COSTON]: useApproveCallback,
  [ChainId.SONGBIRD]: useApproveCallback,
  [ChainId.FLARE_MAINNET]: useApproveCallback,
  [ChainId.HEDERA_TESTNET]: useApproveCallback,
  [ChainId.NEAR_MAINNET]: useNearApproveCallback,
  [ChainId.NEAR_TESTNET]: useNearApproveCallback,
};

export type UseUSDCPriceHookType = {
  [chainId in ChainId]: typeof useUSDCPrice | typeof useNearUSDCPrice | typeof useSongBirdUSDPrice;
};

export const useUSDCPriceHook: UseUSDCPriceHookType = {
  [ChainId.FUJI]: useUSDCPrice,
  [ChainId.AVALANCHE]: useUSDCPrice,
  [ChainId.WAGMI]: useUSDCPrice,
  [ChainId.COSTON]: useUSDCPrice,
  [ChainId.SONGBIRD]: useSongBirdUSDPrice,
  [ChainId.FLARE_MAINNET]: useFlareUSDPrice,
  [ChainId.HEDERA_TESTNET]: useUSDCPrice,
  [ChainId.NEAR_MAINNET]: useNearUSDCPrice,
  [ChainId.NEAR_TESTNET]: useNearUSDCPrice,
};

export type UseTokensHookType = {
  [chainId in ChainId]: typeof useTokens | typeof useNearTokens | typeof useHederaTokens;
};

export const useTokensHook: UseTokensHookType = {
  [ChainId.FUJI]: useTokens,
  [ChainId.AVALANCHE]: useTokens,
  [ChainId.WAGMI]: useTokens,
  [ChainId.COSTON]: useTokens,
  [ChainId.SONGBIRD]: useTokens,
  [ChainId.FLARE_MAINNET]: useTokens,
  [ChainId.HEDERA_TESTNET]: useHederaTokens,
  [ChainId.NEAR_MAINNET]: useNearTokens,
  [ChainId.NEAR_TESTNET]: useNearTokens,
};
