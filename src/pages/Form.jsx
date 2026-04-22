import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

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
            Enter your information to proceed to secure checkout for <span className="text-primary font-bold">VIP ACCESS</span>.
          </p>
        </div>

        <form
          className="bg-surface-container-lowest border border-outline-variant/15 space-y-6 rounded p-8 lg:p-12 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/checkout");
          }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Full Name
              </label>
              <input
                required
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
                type="date"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background transition-all focus:border-primary focus:ring-0 outline-none text-on-surface-variant"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Occupation
              </label>
              <input
                required
                type="text"
                placeholder="Professional Athlete"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Phone Number
              </label>
              <input
                required
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                SSN / Tax ID
              </label>
              <input
                required
                type="password"
                placeholder="XXX-XX-XXXX"
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 font-headline tracking-wide text-on-background placeholder-on-surface-variant/40 transition-all focus:border-primary focus:ring-0 outline-none"
              />
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded bg-primary py-5 font-headline font-bold uppercase tracking-widest text-on-primary shadow-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined">payments</span>
              PROCEED TO SECURE PAYMENT
            </button>
          </div>

          <p className="text-center text-[9px] font-medium uppercase tracking-[0.2em] text-on-surface-variant/60">
            Your data is encrypted and protected by end-to-end security protocols.
          </p>
        </form>
      </main>
    </div>
  );
}
