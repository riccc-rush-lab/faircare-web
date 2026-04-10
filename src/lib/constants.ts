export const SITE = {
  name: "FairCareAI",
  version: "0.2.1",
  tagline: "Fairness auditing for healthcare AI",
  description:
    "From model predictions to governance-ready reports in minutes. Detect, quantify, and present demographic disparities in clinical ML models to the committees that make deployment decisions.",
  github: "https://github.com/riccc-rush-lab/faircareai",
  pypi: "https://pypi.org/project/faircare/",
  license: "Apache-2.0",
  python: "3.10+",
  installCmd: "pip install faircare",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Quick Start", href: "#quickstart" },
  { label: "Who It's For", href: "#audiences" },
] as const;

export const FEATURES = [
  {
    icon: "BarChart3",
    title: "Discrimination, Calibration & Clinical Utility",
    description:
      "AUROC, calibration curves, Brier score, DCA, and classification metrics per Van Calster et al. (2025), all with bootstrap confidence intervals.",
  },
  {
    icon: "GitBranch",
    title: "Subgroup Fairness Analysis",
    description:
      "Performance broken down by race, sex, insurance, age, language, and custom attributes. Equalized odds, demographic parity, equal opportunity, predictive parity, and calibration.",
  },
  {
    icon: "Users",
    title: "Two Output Personas",
    description:
      "Full technical reports (15-20 pages) for data scientists, and streamlined 3-5 page governance summaries for committees and clinical leadership.",
  },
  {
    icon: "MessageSquareText",
    title: "Plain-Language Explanations",
    description:
      "Every metric and visualization includes clear explanations of what it means and why it matters. Active voice, defined jargon, concrete examples.",
  },
  {
    icon: "FileOutput",
    title: "Multiple Export Formats",
    description:
      "HTML, PDF, PowerPoint, PNG bundles, JSON, structured model cards, responsible AI checklists, and reproducibility bundles.",
  },
  {
    icon: "Eye",
    title: "Publication-Ready Visualizations",
    description:
      "WCAG 2.1 AA compliant, colorblind-safe Okabe-Ito palette, minimum 14px fonts. Ready for journals and board presentations.",
  },
  {
    icon: "ShieldCheck",
    title: "HIPAA-Friendly Local Processing",
    description:
      "All computation runs locally. No cloud dependencies, no data leaves your machine. Air-gap compatible.",
  },
  {
    icon: "LayoutDashboard",
    title: "Interactive Dashboard + CLI",
    description:
      "Streamlit UI for upload, analysis, and export without writing code. CLI for scripted pipelines and automation.",
  },
] as const;

export const AUDIENCES = [
  {
    title: "Hospital Data Scientists",
    description:
      "Automated fairness metrics (AUROC, calibration, DCA) with bootstrap confidence intervals, exportable as HTML/PDF/PPTX.",
  },
  {
    title: "Clinical Informaticists",
    description:
      "Governance-ready reports with plain-language explanations suitable for IRB, ethics committees, or C-suite review.",
  },
  {
    title: "Governance Committees",
    description:
      "Clear pass/warning/flag indicators, sign-off workflows, and audit trail documentation.",
  },
  {
    title: "Health Equity Researchers",
    description:
      "Publication-ready figures (WCAG 2.1 AA, colorblind-safe, 14px minimum) with full methodology citations.",
  },
  {
    title: "Regulatory & Compliance Teams",
    description:
      "Structured model cards, responsible AI checklists, and reproducibility bundles.",
  },
] as const;

export const FRAMEWORKS = [
  "CHAI RAIC",
  "TRIPOD+AI",
  "Van Calster et al. 2025",
  "WCAG 2.1 AA",
  "HIPAA-friendly",
] as const;

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

audit = FairCareAudit(
    data="predictions.parquet",
    pred_col="risk_score",
    target_col="readmit_30d",
)

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
results.to_html("report.html")
results.to_governance_pdf("governance_report.pdf")`;
