"use client";

import { useMemo, useState } from "react";
import { getTemplate } from "@/lib/templates";
import CopyButton from "./CopyButton";

const defaultSteps = [
  { key: "goal", title: "Define goal and inputs", tip: "One sentence objective, required inputs, success criteria." },
  { key: "tools", title: "List tools", tip: "APIs, DB, search, file ops. Define schemas." },
  { key: "planner", title: "Choose planner", tip: "Static plan vs loop (ReAct), set max-steps/timeouts." },
  { key: "memory", title: "Context & memory", tip: "System prompt, scratchpad, caching, long-term store." },
  { key: "guardrails", title: "Guardrails", tip: "Schema validation, rate limits, red-team prompts." },
  { key: "observability", title: "Observability", tip: "Log tool calls, token usage, traces, metrics." },
];

type Lang = "node" | "python";

export default function AgentWorkshop() {
  const [lang, setLang] = useState<Lang>("node");
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [goal, setGoal] = useState("Summarize a URL with sources");
  const [tools, setTools] = useState("http_fetch, html_to_text, web_search");
  const [planner, setPlanner] = useState("react-loop");

  const code = useMemo(() => getTemplate({ lang, goal, tools, planner }), [lang, goal, tools, planner]);

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div className="row">
        <label className="small">Language</label>
        <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
          <option value="node">Node.js</option>
          <option value="python">Python</option>
        </select>
      </div>

      <div className="row">
        <input className="input" value={goal} onChange={(e)=>setGoal(e.target.value)} placeholder="Agent goal" />
      </div>
      <div className="row">
        <input className="input" value={tools} onChange={(e)=>setTools(e.target.value)} placeholder="Comma-separated tools" />
      </div>
      <div className="row">
        <select value={planner} onChange={(e)=>setPlanner(e.target.value)}>
          <option value="static-plan">static-plan</option>
          <option value="react-loop">react-loop</option>
          <option value="toolformer">toolformer</option>
        </select>
        <span className="small">Planner</span>
      </div>

      <div className="list">
        {defaultSteps.map((s) => (
          <label key={s.key} className="checkbox">
            <input
              type="checkbox"
              checked={!!checks[s.key]}
              onChange={(e) => setChecks((c) => ({ ...c, [s.key]: e.target.checked }))}
            />
            <div>
              <div style={{ fontWeight: 700 }}>{s.title}</div>
              <div className="small">{s.tip}</div>
            </div>
          </label>
        ))}
      </div>

      <div className="card" style={{ marginTop: 4 }}>
        <h3>Generated Starter Code</h3>
        <div className="section codewrap">
          <CopyButton text={code} />
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
