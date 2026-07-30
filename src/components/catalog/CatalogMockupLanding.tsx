export default function CatalogMockupLanding() {
  return (
    <div className="h-full w-full overflow-hidden bg-[linear-gradient(160deg,#080516,#110e2a)] p-3">
      <div className="mb-3 rounded-[10px] border border-indigo-500/20 bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(168,85,247,0.15))] p-5">
        <div className="mb-2 h-3 rounded-[5px] bg-white/35" />
        <div className="mb-2 h-[9px] w-3/5 rounded-[5px] bg-white/20" />
        <div className="flex gap-2">
          <div className="h-2.5 w-[70px] rounded-[5px] bg-indigo-500/80" />
          <div className="h-2.5 w-[70px] rounded-[5px] border border-white/30" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="h-[60px] rounded-lg border border-white/8 bg-white/6" />
        <div className="h-[60px] rounded-lg border border-white/8 bg-white/6" />
        <div className="h-[60px] rounded-lg border border-white/8 bg-white/6" />
      </div>
    </div>
  );
}
