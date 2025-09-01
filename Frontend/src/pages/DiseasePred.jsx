// HealthPredictor.jsx
import React, { useState } from "react";

const FASTAPI_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:5000";
const PRIMARY_PREFIX = "/api/predict";

function NumberInput({ label, value, onChange }) {
  return (
    <label className="block text-sm">
      <div className="mb-1 text-xs font-medium text-slate-700">{label}</div>
      <input
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0"
        className="w-full px-3 py-2 rounded-lg bg-white text-slate-900 border border-slate-200 focus:ring-1 focus:ring-amber-200 outline-none text-sm"
        aria-label={label}
      />
    </label>
  );
}

export default function HealthPredictor() {
  const [tab, setTab] = useState("diabetes");

  const [diabetes, setDiabetes] = useState({
    Pregnancies: "", Glucose: "", BloodPressure: "", SkinThickness: "",
    Insulin: "", BMI: "", DiabetesPedigreeFunction: "", Age: ""
  });

  const [heart, setHeart] = useState({
    age: "", sex: "", cp: "", trestbps: "", chol: "", fbs: "",
    restecg: "", thalach: "", exang: "", oldpeak: "", slope: "", ca: "", thal: ""
  });

  const [parkinsons, setParkinsons] = useState({
    fo: "", fhi: "", flo: "", Jitter_percent: "", Jitter_Abs: "",
    RAP: "", PPQ: "", DDP: "", Shimmer: "", Shimmer_dB: "",
    APQ3: "", APQ5: "", APQ: "", DDA: "", NHR: "",
    HNR: "", RPDE: "", DFA: "", spread1: "", spread2: "",
    D2: "", PPE: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function validateNumbers(obj) {
    const numeric = {};
    for (const key of Object.keys(obj)) {
      const v = (obj[key] + "").trim();
      if (v === "") return { ok: false, message: `Please enter ${key}` };
      const n = Number(v);
      if (Number.isNaN(n)) return { ok: false, message: `${key} must be a number` };
      numeric[key] = n;
    }
    return { ok: true, numeric };
  }

  function loadExample(model) {
    setError(null);
    setResult(null);
    if (model === "diabetes") {
      setDiabetes({ Pregnancies: "2", Glucose: "120", BloodPressure: "70", SkinThickness: "20", Insulin: "79", BMI: "26.6", DiabetesPedigreeFunction: "0.351", Age: "29" });
    } else if (model === "heart") {
      setHeart({ age: "54", sex: "1", cp: "0", trestbps: "130", chol: "250", fbs: "0", restecg: "1", thalach: "150", exang: "0", oldpeak: "1.2", slope: "2", ca: "0", thal: "1" });
    } else {
      setParkinsons({
        fo: "119.992", fhi: "157.302", flo: "74.997", Jitter_percent: "0.00784", Jitter_Abs: "0.00007",
        RAP: "0.00345", PPQ: "0.00554", DDP: "0.02", Shimmer: "0.00784", Shimmer_dB: "0.248",
        APQ3: "0.003", APQ5: "0.005", APQ: "0.004", DDA: "0.02", NHR: "0.02",
        HNR: "21.0", RPDE: "0.34", DFA: "1.05", spread1: "-4.3", spread2: "0.27", D2: "2.2", PPE: "0.22"
      });
    }
  }

  async function tryFetch(url, body, timeoutMs = 20000) {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal
      });
      clearTimeout(tid);
      return res;
    } catch (err) {
      clearTimeout(tid);
      throw err;
    }
  }

  async function submitModel(model) {
    setError(null);
    setResult(null);

    let payload;
    if (model === "diabetes") {
      const validated = validateNumbers(diabetes);
      if (!validated.ok) { setError(validated.message); return; }
      payload = { inputs: validated.numeric };
    } else if (model === "heart") {
      const validated = validateNumbers(heart);
      if (!validated.ok) { setError(validated.message); return; }
      payload = { inputs: validated.numeric };
    } else {
      const validated = validateNumbers(parkinsons);
      if (!validated.ok) { setError(validated.message); return; }
      payload = { inputs: validated.numeric };
    }

    setLoading(true);
    try {
      const primaryUrl = `${PRIMARY_PREFIX}/${model}`;
      let res = null;
      try { res = await tryFetch(primaryUrl, payload); } catch (_) { res = null; }

      if (res && res.ok) {
        const j = await res.json();
        if (!j.ok) throw new Error(j.error || "Prediction failed");
        setResult({ label: j.label || (j.prediction === 1 ? "Positive" : "Negative"), prediction: j.prediction, raw: j });
        return;
      }

      if (res && res.status !== 404) {
        const txt = await res.text().catch(() => "");
        throw new Error(`Primary server ${res.status}: ${txt || res.statusText}`);
      }

      const secondaryUrl = `${FASTAPI_BASE}/predict/${model}`;
      let res2 = null;
      try { res2 = await tryFetch(secondaryUrl, payload); } catch (_) { res2 = null; }

      if (res2 && res2.ok) {
        const j = await res2.json();
        if (!j.ok) throw new Error(j.error || "Prediction failed");
        setResult({ label: j.label || (j.prediction === 1 ? "Positive" : "Negative"), prediction: j.prediction, raw: j });
        return;
      }

      if (res2 && !res2.ok) {
        const txt = await res2.text().catch(() => "");
        throw new Error(`Secondary server ${res2.status}: ${txt || res2.statusText}`);
      }

      throw new Error("Both endpoints unreachable.");
    } catch (err) {
      setError(String(err.message || err));
    } finally {
      setLoading(false);
    }
  }

  function resetFields() {
    setError(null);
    setResult(null);
    setDiabetes({ Pregnancies: "", Glucose: "", BloodPressure: "", SkinThickness: "", Insulin: "", BMI: "", DiabetesPedigreeFunction: "", Age: "" });
    setHeart({ age: "", sex: "", cp: "", trestbps: "", chol: "", fbs: "", restecg: "", thalach: "", exang: "", oldpeak: "", slope: "", ca: "", thal: "" });
    setParkinsons(Object.fromEntries(Object.keys(parkinsons).map(k => [k, ""])));
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl bg-white shadow p-6 border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Pharma ML Console</h1>
              <p className="text-sm text-slate-500">Minimal & professional — enter values and predict.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => loadExample(tab)} className="px-3 py-2 rounded bg-emerald-500 text-white text-sm">Example</button>
              <button onClick={resetFields} className="px-3 py-2 rounded bg-white border text-sm">Reset</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <aside className="md:col-span-1">
              <div className="space-y-2">
                <button onClick={() => setTab("diabetes")} className={`w-full text-left px-3 py-2 rounded ${tab === "diabetes" ? "bg-amber-600 text-white" : "bg-white border text-slate-700"}`}>Diabetes</button>
                <button onClick={() => setTab("heart")} className={`w-full text-left px-3 py-2 rounded ${tab === "heart" ? "bg-amber-600 text-white" : "bg-white border text-slate-700"}`}>Heart</button>
                <button onClick={() => setTab("parkinsons")} className={`w-full text-left px-3 py-2 rounded ${tab === "parkinsons" ? "bg-amber-600 text-white" : "bg-white border text-slate-700"}`}>Parkinsons</button>
              </div>
            </aside>

            <main className="md:col-span-3">
              <div className="rounded-lg bg-white p-4 border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-slate-800">
                    {tab === "diabetes" ? "Diabetes" : tab === "heart" ? "Heart Disease" : "Parkinson's"}
                  </h2>
                  <div className="text-xs text-slate-400">API: {PRIMARY_PREFIX}/{tab} → fallback {FASTAPI_BASE}/predict/{tab}</div>
                </div>

                <div className="space-y-4">
                  {tab === "diabetes" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <NumberInput label="Pregnancies" value={diabetes.Pregnancies} onChange={(v) => setDiabetes(s => ({ ...s, Pregnancies: v }))} />
                      <NumberInput label="Glucose" value={diabetes.Glucose} onChange={(v) => setDiabetes(s => ({ ...s, Glucose: v }))} />
                      <NumberInput label="Blood Pressure" value={diabetes.BloodPressure} onChange={(v) => setDiabetes(s => ({ ...s, BloodPressure: v }))} />
                      <NumberInput label="Skin Thickness" value={diabetes.SkinThickness} onChange={(v) => setDiabetes(s => ({ ...s, SkinThickness: v }))} />
                      <NumberInput label="Insulin" value={diabetes.Insulin} onChange={(v) => setDiabetes(s => ({ ...s, Insulin: v }))} />
                      <NumberInput label="BMI" value={diabetes.BMI} onChange={(v) => setDiabetes(s => ({ ...s, BMI: v }))} />
                      <NumberInput label="Diabetes Pedigree" value={diabetes.DiabetesPedigreeFunction} onChange={(v) => setDiabetes(s => ({ ...s, DiabetesPedigreeFunction: v }))} />
                      <NumberInput label="Age" value={diabetes.Age} onChange={(v) => setDiabetes(s => ({ ...s, Age: v }))} />
                    </div>
                  )}

                  {tab === "heart" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <NumberInput label="Age" value={heart.age} onChange={(v) => setHeart(s => ({ ...s, age: v }))} />
                      <NumberInput label="Sex (1=male,0=female)" value={heart.sex} onChange={(v) => setHeart(s => ({ ...s, sex: v }))} />
                      <NumberInput label="Chest pain (cp)" value={heart.cp} onChange={(v) => setHeart(s => ({ ...s, cp: v }))} />
                      <NumberInput label="Resting BP" value={heart.trestbps} onChange={(v) => setHeart(s => ({ ...s, trestbps: v }))} />
                      <NumberInput label="Cholesterol" value={heart.chol} onChange={(v) => setHeart(s => ({ ...s, chol: v }))} />
                      <NumberInput label="Fasting BS (fbs)" value={heart.fbs} onChange={(v) => setHeart(s => ({ ...s, fbs: v }))} />
                      <NumberInput label="Rest ECG" value={heart.restecg} onChange={(v) => setHeart(s => ({ ...s, restecg: v }))} />
                      <NumberInput label="Max HR (thalach)" value={heart.thalach} onChange={(v) => setHeart(s => ({ ...s, thalach: v }))} />
                      <NumberInput label="Exang" value={heart.exang} onChange={(v) => setHeart(s => ({ ...s, exang: v }))} />
                      <NumberInput label="Oldpeak" value={heart.oldpeak} onChange={(v) => setHeart(s => ({ ...s, oldpeak: v }))} />
                      <NumberInput label="Slope" value={heart.slope} onChange={(v) => setHeart(s => ({ ...s, slope: v }))} />
                      <NumberInput label="Ca" value={heart.ca} onChange={(v) => setHeart(s => ({ ...s, ca: v }))} />
                      <NumberInput label="Thal" value={heart.thal} onChange={(v) => setHeart(s => ({ ...s, thal: v }))} />
                    </div>
                  )}

                  {tab === "parkinsons" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {Object.entries(parkinsons).map(([k, v]) => (
                        <NumberInput key={k} label={k} value={v} onChange={(val) => setParkinsons(s => ({ ...s, [k]: val }))} />
                      ))}
                    </div>
                  )}

                  {error && <div className="text-sm text-rose-600">{error}</div>}

                  <div className="flex items-center gap-3 mt-3">
                    <button onClick={() => submitModel(tab)} disabled={loading} className="px-4 py-2 rounded bg-amber-600 text-white font-medium">
                      {loading ? "Predicting..." : "Predict"}
                    </button>

                    <div className="ml-auto">
                      {result ? (
                        <div className={`px-4 py-2 rounded ${result.prediction === 1 ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-800"}`}>
                          <div className="text-xs">Result</div>
                          <div className="text-sm font-semibold">{result.label}</div>
                        </div>
                      ) : (
                        <div className="text-xs text-slate-400">No result</div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </main>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            Note: UI tries <code className="font-mono">{PRIMARY_PREFIX}/&lt;model&gt;</code>, then falls back to <code className="font-mono">{FASTAPI_BASE}/predict/&lt;model&gt;</code>.
          </div>
        </div>
      </div>
    </div>
  );
}
