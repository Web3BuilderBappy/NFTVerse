import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, polygon } from 'wagmi/chains'

const config = getDefaultConfig({
  appName: 'RainbowKit Demo',
  projectId: '95aa494d2d9779d40f20df19249e25bd',
  chains: [mainnet, sepolia, polygon],
  ssr: true,
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
          accentColor: '#e91e8c',
          accentColorForeground: 'white',
          borderRadius: 'large',
        })}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
