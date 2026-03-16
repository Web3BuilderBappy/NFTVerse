import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance } from 'wagmi'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({ address })

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a0a12, #0d0d1a)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: 'sans-serif', color: 'white', gap: '24px', padding: '20px'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>
        RainbowKit Demo
      </h1>
      <p style={{ color: '#94a3b8', margin: 0 }}>
        Click the button to connect your wallet
      </p>

      {/* RainbowKit Connect Button */}
      <ConnectButton />

      {/* Show info after connect */}
      {isConnected && (
        <div style={{
          background: 'rgba(233,30,140,.1)', border: '1px solid rgba(233,30,140,.3)',
          borderRadius: '16px', padding: '20px 28px', textAlign: 'center', marginTop: '8px'
        }}>
          <div style={{ color: '#f472b6', fontWeight: 700, marginBottom: '8px' }}>
            Connected!
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '.85rem', color: '#e2e8f0', marginBottom: '6px' }}>
            {address}
          </div>
          {balance && (
            <div style={{ color: '#94a3b8', fontSize: '.82rem' }}>
              Balance: {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
