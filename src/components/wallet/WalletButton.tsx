'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function WalletButton() {
  return (
    <WalletMultiButton className="!bg-primary-500 hover:!bg-primary-600 !text-dark-primary !font-bold !rounded-lg !transition-all" />
  );
}