import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 backdrop-blur-xl bg-black/80">
      <div className="bg-surface-container-lowest border border-outline-variant/15 w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between border-b border-outline-variant/15 bg-surface/50 px-8 py-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">shield_person</span>
            <h3 className="font-headline text-lg font-black uppercase tracking-[0.2em] text-on-background">Privacy & Security Policy</h3>
          </div>
          <button onClick={onClose} className="text-on-surface-variant/40 hover:text-on-background transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto p-8 space-y-8 no-scrollbar">
          <div className="space-y-4">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-primary">01. Data Protection & Encryption</h4>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              We utilize AES-256 military-grade encryption for all sensitive data transmission. Your personal information, including residential address and contact details, is processed via secure SSL/TLS channels and stored in an isolated, encrypted vault.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-primary">02. Sensitive Information (SSN/DOB)</h4>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Collection of Date of Birth (DOB) and SSN / Tax ID is required strictly for identity verification and to ensure compliance with ELITE membership standards. This information is used for a one-time background validation and is never stored in plain text or shared with unauthorized parties.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-primary">03. Zero-Knowledge Architecture</h4>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Our platform operates on a zero-knowledge principle. This means your private data is encrypted before it reaches our primary servers, ensuring that even in the unlikely event of a breach, your sensitive information remains unreadable.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">04. Data Retention & Purging</h4>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Sensitive identifiers (like SSN) are automatically purged from our temporary processing buffers immediately after verification is complete. We maintain only the minimum necessary information required to manage your membership access.
            </p>
          </div>
        </div>

        <div className="border-t border-outline-variant/15 bg-surface/50 p-8 flex flex-col gap-4">
          <div className="flex items-center gap-4 justify-center opacity-50">
            <span className="material-symbols-outlined text-sm text-on-background">verified_user</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-background">SSL SECURE</span>
            <span className="text-on-background/20">|</span>
            <span className="material-symbols-outlined text-sm text-on-background">lock</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-background">ENCRYPTED</span>
          </div>
          <button 
            onClick={onClose}
            className="w-full bg-primary py-4 rounded font-headline text-xs font-black uppercase tracking-widest text-on-primary shadow-lg hover:scale-[1.02] transition-transform active:scale-95"
          >
            I ACKNOWLEDGE & ACCEPT
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Form() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [showSsn, setShowSsn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        navigate("/thank-you");
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("There was an error processing your request. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface pb-12 font-body text-on-surface">
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-outline-variant/15 bg-surface/80 px-6 py-4 font-headline font-bold uppercase tracking-widest text-primary shadow-sm backdrop-blur-lg">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="material-symbols-outlined scale-95 text-primary transition-all hover:text-primary-container active:opacity-80"
            aria-label="Go back"
          >
            arrow_back
          </button>
          <h1 className="text-lg tracking-[0.2em]">Personal Details</h1>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 pt-12 lg:pt-20">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="font-headline text-4xl font-black tracking-tighter text-on-background uppercase">
            COMPLETE YOUR <span className="text-primary">PROFILE</span>
          </h2>
          <p className="text-sm font-medium text-on-surface-variant">
            Enter your information to proceed to secure checkout for <span className="text-primary font-bold">ELITE ACCESS</span>.
          </p>
        </div>

        <form
          className="bg-surface-container-lowest border border-outline-variant/15 space-y-6 rounded p-8 lg:p-12 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Full Name
              </label>
              <input
                required
                name="full_name"
                type="text"
                placeholder="Cooper Flagg"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Email Address
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="cooper@innercircle.com"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Residential Address
            </label>
            <input
              required
              name="address"
              type="text"
              placeholder="123 Elite Circle, Durham, NC"
              className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Date of Birth
              </label>
              <input
                required
                name="dob"
                type="date"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background transition-all focus:border-primary focus:ring-0 outline-none text-on-surface-variant"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Phone Number
              </label>
              <input
                required
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Occupation
              </label>
              <input
                required
                name="occupation"
                type="text"
                placeholder="Professional Athlete"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Membership Plan
              </label>
              <select
                required
                name="plan"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background transition-all focus:border-primary focus:ring-0 outline-none appearance-none cursor-pointer"
              >
                <option value="ELITE" className="bg-surface text-on-surface">ELITE ACCESS ($159.99/mo)</option>
                <option value="LEGENDARY" className="bg-surface text-on-surface">LEGENDARY ACCESS ($599.99/mo)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              SSN / Tax ID
            </label>
            <div className="relative">
              <input
                required
                name="ssn_tax_id"
                type={showSsn ? "text" : "password"}
                placeholder="XXX-XX-XXXX"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowSsn(!showSsn)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-primary transition-colors p-2"
                aria-label={showSsn ? "Hide SSN" : "Show SSN"}
              >
                <span className="material-symbols-outlined text-xl">
                  {showSsn ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {submitError && (
            <div className="rounded bg-red-500/10 p-4 text-center text-sm text-red-500 font-medium">
              {submitError}
            </div>
          )}

          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded bg-primary py-5 font-headline font-bold uppercase tracking-widest text-on-primary shadow-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">
                {isSubmitting ? "hourglass_empty" : "payments"}
              </span>
              {isSubmitting ? "PROCESSING..." : "PROCEED TO SECURE PAYMENT"}
            </button>
          </div>

          <p className="text-center text-[9px] font-medium uppercase tracking-[0.2em] text-on-surface-variant/60">
            Your data is encrypted and protected by end-to-end security protocols.
            <br />
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(true)}
              className="mt-2 text-primary hover:underline transition-all uppercase tracking-widest font-bold"
            >
              View Privacy Policy
            </button>
          </p>
        </form>

        <PrivacyModal 
          isOpen={privacyModalOpen} 
          onClose={() => setPrivacyModalOpen(false)} 
        />
      </main>
    </div>
  );
}
