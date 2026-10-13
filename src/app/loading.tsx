export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 w-full animate-pulse space-y-8">
      <div className="space-y-4 max-w-2xl">
        <div className="h-6 w-36 rounded-md bg-stone-200" />
        <div className="h-10 w-3/4 rounded-lg bg-stone-200" />
        <div className="h-5 w-full rounded-md bg-stone-200" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-72 rounded-2xl border border-[#e8ded3] bg-white p-6"
          >
            <div className="h-32 w-full rounded-xl bg-stone-200 mb-4" />
            <div className="h-5 w-2/3 rounded-md bg-stone-200 mb-2" />
            <div className="h-4 w-full rounded-md bg-stone-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
