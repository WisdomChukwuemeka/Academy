"use client";

import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { Code, Palette, Database } from 'lucide-react';


/* ------------------ LONG REAL-WORLD CONTENT ------------------ */

const FULL_CODE = `
<main>
  <section class="hero">
    <div class="container grid">
      <div>
        <h1>
          Learn Real Skills.
          <span>Build Real Projects.</span>
          Get Job-Ready.
        </h1>

        <p>
          Master in-demand tech skills through hands-on courses designed
          by industry professionals. Learn by building, not by watching.
        </p>

        <div class="actions">
          <a href="#" class="primary">Browse Courses</a>
          <a href="#" class="secondary">How It Works</a>
        </div>

        <div class="badges">
          <span>✔ Beginner friendly</span>
          <span>✔ Project-based</span>
          <span>✔ Career focused</span>
        </div>
      </div>
    </div>
  </section>

  <section class="paths">
    <h2>Choose a Learning Path</h2>
    <div class="cards">
      <div class="card">
        <h3>Full-Stack Web Development</h3>
        <p>Build complete modern web applications.</p>
        <a href="#">View course →</a>
      </div>

      <div class="card">
        <h3>Data Analysis</h3>
        <p>Analyze and visualize real-world data.</p>
        <a href="#">View course →</a>
      </div>

      <div class="card">
        <h3>UI / UX Design</h3>
        <p>Design beautiful and usable interfaces.</p>
        <a href="#">View course →</a>
      </div>
    </div>
  </section>

  <section class="cta">
    <h2>Start Learning Today</h2>
    <p>Build skills that actually get you hired.</p>
    <a href="#" class="primary">Explore Courses</a>
  </section>
</main>
`;

const FULL_CSS = `
body {
    margin: 0;
    font-family: Inter, system-ui, sans-serif;
    background: #f9fafb;
    color: #111;
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 80px 24px;
}

.hero h1 {
    font-size: 48px;
    line-height: 1.1;
}

.hero h1 span {
    display: block;
    color: #4f46e5;
}

.actions {
    margin-top: 24px;
    display: flex;
    gap: 12px;
}

.primary {
    background: #4f46e5;
    color: white;
    padding: 14px 28px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
}

.secondary {
    border: 1px solid #d1d5db;
    padding: 14px 28px;
    border-radius: 10px;
    text-decoration: none;
    color: #111;
}

.badges {
    margin-top: 16px;
    display: flex;
    gap: 16px;
    font-size: 14px;
    color: #6b7280;
}

.paths {
    padding: 80px 24px;
    background: white;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    margin-top: 32px;
}

.card {
    border: 1px solid #e5e7eb;
    padding: 24px;
    border-radius: 16px;
}

.cta {
    background: #4f46e5;
    color: white;
    padding: 80px 24px;
    text-align: center;
}
`;

const FULL_DESIGN = `
<style>
body { 
  margin: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  background: #f9fafb; 
  font-family: Inter, system-ui, sans-serif;
}

.button {
  display: inline-flex;
  align-items: center;
  padding: 14px 32px;
  border-radius: 24px;
  background-color: #ff0000;
  color: #fffafa ;
  border: 1px solid #e5e7eb;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>

<button class="button" id="btn">Get Started</button>
`;

const FULL_DATA = `
import pandas as pd

data = {
    'channel': ['email', 'social', 'search', 'email', 'social'],
    'spend': [100, 200, 300, 150, 250],
    'clicks': [1000, 2000, 3000, 1500, 2500],
    'conversions': [100, 250, 400, 180, 300]
}

df = pd.DataFrame(data)

# Preview data
print(df.head())

# Feature engineering
df["conversion_rate"] = df["conversions"] / df["clicks"]

# Filter high performing campaigns
top_campaigns = df[df["conversion_rate"] > 0.12]

# Group by channel
summary = (
    top_campaigns
    .groupby("channel")
    .agg({
        "spend": "sum",
        "conversions": "sum",
        "conversion_rate": "mean"
    })
    .reset_index()
)

print(summary)
`;

const HEAD_OUTPUT = `  channel  spend  clicks  conversions
0   email    100    1000          100
1  social    200    2000          250
2  search    300    3000          400
3   email    150    1500          180
4  social    250    2500          300
`;

const SUMMARY_OUTPUT = `  channel  spend  conversions  conversion_rate
0  search    300          400         0.133333
1  social    200          250         0.125000
`;


const icons = {
    code: Code,
    design: Palette,
    data: Database,
  };
/* ------------------ TYPEWRITER HOOK ------------------ */

function useInfiniteTypewriter(fullText, baseSpeed = 50) {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeout;

    const type = () => {
      if (index >= fullText.length) {
        setTimeout(() => {
          index = 0;
          setText("");
          type();
        }, 3000);
        return;
      }

      setText(fullText.slice(0, index + 1));
      const char = fullText[index];

      index++;

      let delay = baseSpeed;

      if (char === "\n") delay = baseSpeed * 6;
      if ("{}();<>".includes(char)) delay = baseSpeed * 1.5;

      timeout = setTimeout(type, delay);
    };

    type();
    return () => clearTimeout(timeout);
  }, [fullText, baseSpeed]);

  return text;
}


/* ------------------ COMPONENT ------------------ */

export default function CodePlayground() {
  const [activeTab, setActiveTab] = useState("code");

  const code = useInfiniteTypewriter(FULL_CODE, 0);
  const designText = useInfiniteTypewriter(FULL_DESIGN, 40);
  const data = useInfiniteTypewriter(FULL_DATA, 0);

  const codeLineCountRef = useRef(0);
  const designLineCountRef = useRef(0);

  const [previewCode, setPreviewCode] = useState("");
  const [previewDesign, setPreviewDesign] = useState("");
  const [previewOutput, setPreviewOutput] = useState("");

  const iframeRef = useRef(null);

  useEffect(() => {
    const lineCount = (code.match(/\n/g) || []).length;
    if (
      lineCount > codeLineCountRef.current ||
      code === FULL_CODE ||
      code === ""
    ) {
      setPreviewCode(code);
      codeLineCountRef.current = lineCount;
    }
  }, [code]);

  useEffect(() => {
    const lineCount = (designText.match(/\n/g) || []).length;
    if (
      lineCount > designLineCountRef.current ||
      designText === FULL_DESIGN ||
      designText === ""
    ) {
      setPreviewDesign(designText);
      designLineCountRef.current = lineCount;
    }
  }, [designText]);

  useEffect(() => {
    if (data === "") {
      setPreviewOutput("");
      return;
    }

    let newOutput = "";
    if (data.includes("print(df.head())")) {
      newOutput += HEAD_OUTPUT;
    }
    if (data.includes("print(summary)")) {
      newOutput += "\n" + SUMMARY_OUTPUT;
    }
    if (newOutput !== previewOutput) {
      setPreviewOutput(newOutput);
    }
  }, [data]);

  useEffect(() => {
    const currentSrcDoc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <style>
          ${activeTab === "code" ? FULL_CSS : activeTab === "design" ? '' : `
            body {
              margin: 0;
              padding: 20px;
              font-family: monospace;
              font-size: 14px;
              line-height: 1.5;
              color: #333;
              background: #fff;
              white-space: pre;
            }
          `}
        </style>
      </head>
      <body>
        ${activeTab === "code" ? 
          (previewCode || `<div style="display: flex; justify-content: center; align-items: center; height: 100%; color: #999;">Typing preview…</div>`) :
          activeTab === "design" ? 
          (previewDesign || `<div style="display: flex; justify-content: center; align-items: center; height: 100%; color: #999;">Typing preview…</div>`) : 
          (previewOutput ? `<pre>${previewOutput}</pre>` : `<div style="display: flex; justify-content: center; align-items: center; height: 100%; color: #999;">Typing code…</div>`)}
      </body>
      </html>
    `;

    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument) {
      const doc = iframe.contentDocument;
      doc.open();
      doc.write(currentSrcDoc);
      doc.close();
    }
  }, [activeTab, previewCode, previewDesign, previewOutput]);

  return (
    <div className="space-y-4">
        <section className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center gap-4 mb-2">
            <div className="flex flex-col gap-2 space-y-2 ml-2 text-center md:text-left">
        <div>
            <span className="px-3 py-2 w-fit h-fit rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wide uppercase">
                Interactive Demo
            </span>
            </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-cal-sans">
            Learn by
            <span className="text-red-600 ml-2">Doing</span>
            .
        </h2>
        <p className=" text-gray-600 w-90 md:w-150 text-md md:text-lg">
            Experience a real-world development environment. Write code, see results instantly.
        </p>

        </div>

            <div className="flex justify-center ">
                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">
            {["code", "design", "data"].map((tab) => {
              const Icon = icons[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex justify-center items-center px-4 py-2 rounded-md text-sm capitalize transition
                    ${
                      activeTab === tab
                        ? "bg-white shadow text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab}
                </button>
              );
            })}
            </div>
          </div>
        </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="h-130 border rounded-xl overflow-hidden bg-neutral-900">
          {activeTab === "code" && (
            <Editor
              height="100%"
              defaultLanguage="html"
              value={code}
              theme="vs-dark"
              options={{ readOnly: true }}
            />
          )}

          {activeTab === "design" && (
            <Editor
              height="100%"
              defaultLanguage="html"
              value={designText}
              theme="vs-dark"
              options={{ readOnly: true }}
            />
          )}

          {activeTab === "data" && (
            <Editor
              height="100%"
              defaultLanguage="python"
              value={data}
              theme="vs-dark"
              options={{ readOnly: true }}
            />
          )}
        </div>

        {/* Preview */}
        <div className="h-130 border rounded-xl bg-white flex items-center justify-center overflow-hidden">
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            sandbox="allow-same-origin allow-scripts"
          />

          
        </div>
      </div>
    </div>
  );
}