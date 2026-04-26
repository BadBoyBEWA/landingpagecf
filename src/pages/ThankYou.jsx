import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-surface-container-lowest border border-outline-variant/15 max-w-lg p-12 rounded-2xl space-y-8 shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-headline text-4xl font-black italic tracking-tighter text-on-background uppercase">
            Application <span className="text-primary">Received</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed font-medium">
            Thank you for applying for <span className="text-primary">ELITE ACCESS</span>. Our elite team is reviewing your profile. You will receive a confirmation email shortly.
          </p>
        </div>
        
        <div className="pt-4">
          <button
            onClick={() => navigate("/checkout")}
            className="w-full flex items-center justify-center gap-3 py-4 rounded bg-primary font-headline font-bold uppercase tracking-widest text-on-primary shadow-lg hover:scale-[1.02] transition-transform active:scale-95"
          >
            <span className="material-symbols-outlined">payments</span>
            Proceed to Payment
          </button>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
