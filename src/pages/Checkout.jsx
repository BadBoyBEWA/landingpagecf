import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const trustBadges = [
  { icon: 'verified_user', label: 'SSL Secure' },
  { icon: 'lock_person', label: 'Encrypted' },
  { icon: 'payments', label: 'PCI Compliant' },
]

function PaymentModal({ isOpen, onClose, method }) {
  if (!isOpen) return null

  const details = {
    PayPal: {
      icon: 'account_balance_wallet',
      color: 'text-[#0070ba]',
      instruction: 'Please send the total amount to our verified PayPal address:',
      value: 'payments@innercircle.com',
      note: 'Include your full name in the transaction notes for faster verification.'
    },
    CashApp: {
      icon: 'attach_money',
      color: 'text-[#00d084]',
      instruction: 'Scan or use the Cashtag below to complete your payment:',
      value: '$InnerCircleVIP',
      note: 'Payments are typically verified within 15-30 minutes.'
    },
    Bitcoin: {
      icon: 'currency_bitcoin',
      color: 'text-[#f7931a]',
      instruction: 'Transfer the equivalent BTC amount to the following secure wallet:',
      value: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      note: 'Ensure you account for network fees to avoid payment delays.'
    },
    'Wire Transfer': {
      icon: 'account_balance',
      color: 'text-on-background',
      instruction: 'Our banking coordinates for international wire transfers:',
      value: 'Request via support@innercircle.com',
      note: 'Wire transfers can take 1-3 business days to clear.'
    }
  }

  const current = details[method] || details['Wire Transfer']

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-on-background/60">
      <div className="bg-surface-container-lowest w-full max-w-md overflow-hidden rounded border border-outline-variant/15 shadow-2xl">
        <div className="flex items-center justify-between border-b border-outline-variant/15 bg-surface-container-low px-6 py-4">
          <div className="flex items-center gap-3">
            <span className={`material-symbols-outlined ${current.color}`}>{current.icon}</span>
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-background">{method} Payment</h3>
          </div>
          <button onClick={onClose} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-8 space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-xs font-medium text-on-surface-variant">{current.instruction}</p>
            <div className="rounded bg-surface-container-low border border-outline-variant/15 p-4 font-headline text-lg font-bold tracking-tight text-primary break-all">
              {current.value}
            </div>
          </div>
          
          <div className="rounded border border-primary/20 bg-primary/5 p-4">
            <p className="text-[10px] leading-relaxed text-primary italic font-body">
              {current.note}
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-primary py-4 rounded font-headline text-xs font-bold uppercase tracking-widest text-on-primary shadow-sm hover:brightness-110 transition-all cursor-pointer"
          >
            I Have Sent Payment
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')

  const selectedTier = {
    title: 'ELITE ACCESS',
    price: '$29.99',
    perks: [
      { text: 'Everything in VIP' },
      { text: 'Monthly live Q&A sessions' },
      { text: 'Exclusive physical member box (annual)' },
      { text: 'Voting rights on community impact projects' },
    ]
  }

  const handlePaymentClick = (method) => {
    setPaymentMethod(method)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-surface pb-12 font-body text-on-surface">
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-outline-variant/15 bg-surface/80 px-6 py-4 font-headline font-bold uppercase tracking-widest text-primary shadow-sm backdrop-blur-lg">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/form')}
            className="material-symbols-outlined scale-95 text-primary transition-all hover:text-primary-container active:opacity-80 cursor-pointer"
            aria-label="Go back"
          >
            arrow_back
          </button>
          <h1 className="text-lg">SECURE CHECKOUT</h1>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 pt-12 lg:grid-cols-12 lg:pt-20">
        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-2">
            <h2 className="font-headline text-4xl font-black uppercase tracking-[-0.04em] text-on-background">
              SECURE YOUR
              <br />
              <span className="text-primary">SPOT</span>
            </h2>
            <p className="text-sm font-medium text-on-surface-variant">
              Complete your membership enrollment to access the inner circle.
            </p>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/15 group relative overflow-hidden rounded p-8 shadow-sm">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
            <div className="mb-8 flex items-start justify-between">
              <div>
                <span className="rounded bg-primary/10 px-2 py-1 font-label text-[10px] font-bold uppercase tracking-widest text-primary">
                  Premium Tier
                </span>
                <h3 className="mt-2 font-headline text-2xl font-bold text-on-background uppercase">{selectedTier.title}</h3>
              </div>
              <div className="text-right">
                <div className="font-headline text-3xl font-black text-on-background tracking-tighter">{selectedTier.price}</div>
                <div className="text-[10px] font-bold uppercase text-on-surface-variant">Per Month</div>
              </div>
            </div>

            <ul className="space-y-4">
              {selectedTier.perks.map((perk) => (
                <li key={perk.text} className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-sm text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                  <span className="text-sm font-medium text-on-surface-variant">{perk.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center justify-between border-t border-outline-variant/15 pt-6">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Total Due Today
              </span>
              <span className="font-headline text-xl font-bold text-primary">
                {selectedTier.price}
              </span>
            </div>
          </div>

          <div className="hidden border-l-2 border-primary bg-surface-container-low p-6 lg:block">
            <p className="text-xs leading-relaxed text-on-surface-variant font-medium">
              &quot;The inner circle is about building a community that shares the drive. Unseen content, exclusive access, and real impact.&quot;
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-tighter text-on-background">
                Cooper Flagg
              </span>
            </div>
          </div>
        </div>

        <div className="rounded bg-surface-container-lowest border border-outline-variant/15 p-8 shadow-sm lg:col-span-7 lg:p-12">
          <h4 className="mb-8 flex items-center gap-2 font-headline text-lg font-bold text-on-background uppercase">
            <span className="material-symbols-outlined text-primary">shield_lock</span>
            SECURE CHECKOUT
          </h4>

          <div className="mb-10 grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handlePaymentClick('PayPal')}
              className="flex items-center justify-center gap-2 rounded border border-outline-variant/15 bg-[#0070ba] py-4 font-bold text-white transition-colors hover:bg-[#005ea6] cursor-pointer"
            >
              <span className="material-symbols-outlined">account_balance_wallet</span>
              PayPal
            </button>
            <button
              type="button"
              onClick={() => handlePaymentClick('CashApp')}
              className="flex items-center justify-center gap-2 rounded border border-outline-variant/15 bg-[#00d084] py-4 font-bold text-white transition-colors hover:bg-[#00b371] cursor-pointer"
            >
              <span className="material-symbols-outlined">attach_money</span>
              CashApp
            </button>
            <button
              type="button"
              onClick={() => handlePaymentClick('Bitcoin')}
              className="flex items-center justify-center gap-2 rounded border border-outline-variant/15 bg-[#f7931a] py-4 font-bold text-white transition-colors hover:bg-[#e17e07] cursor-pointer"
            >
              <span className="material-symbols-outlined">currency_bitcoin</span>
              Bitcoin
            </button>
            <button
              type="button"
              onClick={() => handlePaymentClick('Wire Transfer')}
              className="flex items-center justify-center gap-2 rounded border border-outline-variant/15 bg-[#2c2c2c] py-4 font-bold text-white transition-colors hover:bg-black cursor-pointer"
            >
              <span className="material-symbols-outlined">account_balance</span>
              Wire Transfer
            </button>
          </div>

          <div className="relative mb-10 flex items-center justify-center">
            <div className="h-px w-full bg-outline-variant/30" />
            <span className="absolute bg-surface-container-lowest px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Or pay with card
            </span>
          </div>

          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault()
              // Handle credit card payment success
              navigate('/')
            }}
          >
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Card Number
              </label>
              <div className="relative">
                <input
                  required
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="w-full border-b border-outline-variant/30 bg-surface-container-low px-4 py-4 font-headline tracking-widest text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  credit_card
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Expiry Date
                </label>
                <input
                  required
                  type="text"
                  placeholder="MM / YY"
                  className="w-full border-b border-outline-variant/30 bg-surface-container-low px-4 py-4 font-headline tracking-widest text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  CVV
                </label>
                <input
                  required
                  type="text"
                  placeholder="123"
                  className="w-full border-b border-outline-variant/30 bg-surface-container-low px-4 py-4 font-headline tracking-widest text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded bg-primary py-5 font-headline font-bold uppercase text-on-primary shadow-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
                COMPLETE ACCESS
              </button>
            </div>
          </form>

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-8 opacity-60">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">{badge.icon}</span>
                  <span className="text-[9px] font-bold uppercase tracking-tighter">{badge.label}</span>
                </div>
              ))}
            </div>
            <p className="max-w-sm text-center text-[10px] leading-relaxed text-on-surface-variant">
              By completing your purchase, you agree to our Terms of Service. Your access renews automatically at {selectedTier.price}/month until cancelled in your profile settings.
            </p>
          </div>
        </div>
      </main>

      <PaymentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        method={paymentMethod} 
      />
    </div>
  )
}
