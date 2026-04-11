export const SITE = {
  name: "FairCareAI",
  version: "0.2.7",
  tagline: "Python fairness auditing for clinical AI — two audiences, one run",
  description:
    "Point it at your model's predictions and get two tailored outputs: a full 15–20 page technical report for your data scientists, and a streamlined 3–5 page governance summary for your committee. One run, two audiences, everything needed for deployment approval.",
  github: "https://github.com/riccc-rush-lab/faircareai",
  pypi: "https://pypi.org/project/faircare/",
  license: "Apache-2.0",
  python: "3.10+",
  installCmd: "pip install faircare",
  installExportCmd: 'pip install "faircare[export]"',
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features", external: false },
  { label: "Quick Start", href: "#quickstart", external: false },
  { label: "Who It's For", href: "#audiences", external: false },
  {
    label: "Docs",
    href: "https://github.com/riccc-rush-lab/faircareai/blob/main/docs/USAGE.md",
    external: true,
  },
] as const;

export const FEATURES = [
  {
    icon: "Users",
    title: "Two Personas, One Run",
    description:
      "Call audit.run() once, get two tailored outputs: a 15–20 page technical report (all metrics, bootstrap CIs, every figure) for data scientists, and a streamlined 3–5 page governance summary for committees — same data, right level of detail for each audience.",
  },
  {
    icon: "BarChart3",
    title: "Discrimination, Calibration & Clinical Utility",
    description:
      "AUROC, calibration curves, Brier score, DCA, and classification metrics, all with bootstrap confidence intervals. The full clinical validation stack in one call.",
  },
  {
    icon: "GitBranch",
    title: "Subgroup Fairness Analysis",
    description:
      "Auto-detects race, sex, insurance, age, and language columns via suggest_attributes(). Computes equalized odds, demographic parity, equal opportunity, predictive parity, and calibration per subgroup.",
  },
  {
    icon: "MessageSquareText",
    title: "Plain-Language Explanations",
    description:
      "Every metric and visualization includes clear explanations of what it means and why it matters — written for governance committees, not statisticians. Active voice, defined jargon, concrete examples.",
  },
  {
    icon: "FileOutput",
    title: "Multiple Export Formats",
    description:
      "HTML, PDF (via Playwright), PowerPoint decks, PNG bundles, JSON, structured model cards, responsible AI checklists, and reproducibility bundles — everything IRB, ethics boards, and journals need.",
  },
  {
    icon: "Eye",
    title: "Publication-Ready Visualizations",
    description:
      "WCAG 2.1 AA compliant, colorblind-safe Okabe-Ito palette, minimum 14px fonts. The same figures go into the data scientist report and the boardroom deck.",
  },
  {
    icon: "ShieldCheck",
    title: "HIPAA-Friendly Local Processing",
    description:
      "All computation runs locally. No cloud dependencies, no data leaves your machine. Air-gap compatible — point it at a CSV or Parquet file and get your audit.",
  },
  {
    icon: "LayoutDashboard",
    title: "4-Step Streamlit Dashboard",
    description:
      "Upload predictions → Analyze fairness → Review governance summary → Export. No code required. Or use the CLI for scripted pipelines and CI/CD automation.",
  },
] as const;

export const AUDIENCES = [
  {
    title: "Hospital Data Scientists",
    description:
      "Full 15–20 page technical reports: AUROC, calibration, DCA, bootstrap confidence intervals, all subgroup figures. Export as HTML, PDF, or PNG bundles. Auto-detected sensitive attributes.",
  },
  {
    title: "Clinical Informaticists",
    description:
      "Governance-ready reports with plain-language explanations suitable for IRB, ethics committees, or C-suite review. Pass/warning/flag indicators at a glance.",
  },
  {
    title: "Governance Committees",
    description:
      "3–5 page summaries with 8 key figures, clear pass/warning/flag indicators, sign-off workflows, and audit trail documentation. Readable without a statistics background.",
  },
  {
    title: "Health Equity Researchers",
    description:
      "Publication-ready figures — WCAG 2.1 AA, colorblind-safe Okabe-Ito palette, 14px minimum — with full methodology citations.",
  },
  {
    title: "Regulatory & Compliance Teams",
    description:
      "Structured model cards, responsible AI checklists, XML compliance validation, and reproducibility bundles. Everything needed for regulatory submission or internal audit trails.",
  },
] as const;

export const FRAMEWORKS = [
  "CHAI RAIC",
  "TRIPOD+AI",
  "Van Calster et al. 2025",
  "WCAG 2.1 AA",
  "HIPAA-friendly",
] as const;

export const LAB = {
  name: "RICCC Lab",
  url: "https://www.riccc-lab.com/",
  lead: "J.C. Rojas, MD, MS",
  leadTitle: "Assistant Professor · Associate Chief Medical Information Officer",
  blurb:
    "Developed by practitioners who deploy clinical AI at health-system scale — and who needed this tool to exist.",
} as const;

export const FUNDING = {
  statement:
    "This project was supported by the Institute for Translational Medicine (ITM) at the University of Chicago and Rush University, funded by the National Center for Advancing Translational Sciences (NCATS) of the National Institutes of Health (NIH) through Grant Number UL1TR002389 (Clinical and Translational Science Award).",
  disclaimer:
    "The content is solely the responsibility of the authors and does not necessarily represent the official views of the NIH.",
  grant: "UL1TR002389",
  institutions: [
    "Institute for Translational Medicine (ITM)",
    "University of Chicago",
    "Rush University",
  ],
  funder: "NIH / NCATS",
} as const;

export const CODE_EXAMPLE = `from faircareai import FairCareAudit, FairnessConfig, FairnessMetric

# Point at your model's predictions (CSV, Parquet, Pandas, or Polars)
audit = FairCareAudit(
    data="predictions.parquet",
    pred_col="risk_score",
    target_col="readmit_30d",
)

# Auto-detect demographic columns (race, sex, insurance, language…)
audit.suggest_attributes()
audit.accept_suggested_attributes([1, 2, 3])

audit.config = FairnessConfig(
    model_name="Readmission Risk Model v2",
    primary_fairness_metric=FairnessMetric.EQUALIZED_ODDS,
    fairness_justification=(
        "Model triggers intervention; equal TPR/FPR "
        "ensures equitable access to care management."
    ),
)

results = audit.run()

# Data scientist persona — full technical report (15–20 pages)
results.to_html("technical_report.html")
results.to_pdf("technical_report.pdf")    # pip install "faircare[export]"

# Governance persona — streamlined summary (3–5 pages)
results.to_governance_pdf("governance.pdf")
results.to_pptx("committee_deck.pptx")   # pip install "faircare[export]"`;
