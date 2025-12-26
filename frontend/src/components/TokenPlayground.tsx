export function TokenPlayground() {
  return (
    <section className="mt-10 rounded-brandCard border border-border-primaryBorder bg-surface-subtle p-6">
      <h2 className="text-[28px] font-bold text-text-primaryText">Token Playground</h2>
      <p className="mt-2 text-text-muted">
        This section exists to visually verify design tokens (colours, spacing, typography, radius, focus).
      </p>

      <div className="mt-6 grid gap-4">
        <div className="rounded-brandCard bg-surface-page p-4">
          <div className="font-semibold text-text-primaryText">Surface + Text</div>
          <div className="text-text-muted">Muted text example for descriptions.</div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-brandButton bg-brand-primary px-4 py-2 font-semibold text-text-inverse focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2">
            Primary action
          </button>

          <button className="rounded-brandButton border border-border-primaryBorder bg-surface-page px-4 py-2 font-semibold text-text-primaryText focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2">
            Secondary action
          </button>
        </div>

        <div className="grid gap-2">
          <div className="text-[44px] font-bold text-text-primaryText">Heading 1</div>
          <div className="text-[30px] font-bold text-text-primaryText">Heading 2</div>
          <div className="text-[18px] text-text-primaryText">
            Body text size is controlled and consistent.
          </div>
        </div>
      </div>
    </section>
  );
}
