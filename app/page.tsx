"use client";

import AgentWorkshop from "@/components/AgentWorkshop";

export default function Page() {
  return (
    <div className="container">
      <div className="header">
        <div>
          <span className="badge">Agent Workshop</span>
          <h1 className="h1">An agent that shows how to build an agent</h1>
          <div className="sub">Follow a practical blueprint, then export working starter code.</div>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Interactive Builder</h3>
          <div className="section">
            <AgentWorkshop />
          </div>
        </div>
        <div className="card">
          <h3>Tips</h3>
          <div className="section">
            <ul className="list">
              <li>Keep tools pure and idempotent; avoid side-effects in reasoning.</li>
              <li>Prefer deterministic plans; only loop when new info is needed.</li>
              <li>Log every tool call with inputs/outputs for audits.</li>
              <li>Implement guardrails: timeouts, schema validation, and retries.</li>
              <li>Cache context; stream outputs for better UX.</li>
            </ul>
            <hr />
            <div className="small">
              This app generates starter code?you'll still need to add your API keys
              and wire tools to your own systems.
            </div>
          </div>
        </div>
      </div>
      <footer>Built for Vercel deployment ? Next.js App Router</footer>
    </div>
  );
}
