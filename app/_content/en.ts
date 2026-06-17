import type { Content } from './types'

export const en: Content = {
  nav: {
    projekte: 'Projects',
    stack: 'Stack',
    kontakt: 'Contact',
    logoAria: 'Nalu AI — Home',
    menuLabel: 'Open menu',
    langLabel: 'Select language',
  },

  hero: {
    eyebrow: 'PREDICTIVE & GENERATIVE AI',
    titleLine1: 'Ride the wave',
    titleLine2: 'of demand.',
    scrollAria: 'Scroll to next section',
  },

  name: {
    pronunciation: '[nah-loo]',
    metaText: 'Hawaiian for wave',
    paragraph1:
      'Born from a deep connection to the Pacific, years of experience underwater, and the conviction that data follows the same patterns as the ocean: seasonality, trends, noise — waves.',
    paragraph2:
      'Spotting the right patterns, forecasting the next wave and being ready for it — in the ocean as in the data.',
    authorLine1: 'Built by Maximilian Fischer',
    authorLine2: 'Physics & Meteorology (LMU Munich) · ML Engineering · Munich',
    authorLine3: 'Building data-driven systems since 2016.',
  },

  projects: {
    sectionLabel: 'PROJECTS',
    projects: [
      {
        id: 'meatmind',
        number: '01',
        title: 'MeatMind',
        subtitle: 'End-to-End ML & BI Platform',
        attribution: 'Independently developed · Full-time role · Müller Fleisch GmbH',
        paragraphs: [
          'Fully bespoke platform for demand forecasting, business intelligence and operational planning in meat processing. In production at a mid-sized manufacturer with 770+ customers and 900 SKUs.',
          'The platform processes more than 450,000 time series data points and combines ML-driven demand forecasts with classical BI — from SAP R/3 data ingestion to ready-to-act decision support for sales and procurement. Generative AI (Ollama, on-premise) powers automated report generation and a natural-language data chat. The architecture is designed for both on-premise and cloud environments.',
        ],
        blocks: [
          {
            type: 'modules',
            heading: 'Modules',
            items: [
              {
                name: 'Demand Forecasting',
                body: 'ML-driven demand forecasts at SKU and customer level. Models: Temporal Fusion Transformer (PyTorch), LightGBM. Cold-start handling for new SKUs via segmentation-based global models.',
              },
              {
                name: 'Production Planning',
                body: 'Automated planning based on forecasts. Integrates capacities, minimum lot sizes and production cycles.',
              },
              {
                name: 'Slaughter Analytics',
                body: 'Analysis of slaughter data to optimise purchasing and production. Links carcass weights, quality data and demand forecasts.',
              },
              {
                name: 'Procurement Forecasting',
                body: 'Forecast-driven purchasing for live cattle — which species, husbandry type and quantity to source, derived from demand forecasts and production capacity.',
              },
              {
                name: 'Customer Segmentation',
                body: 'ABC/XYZ analysis at customer and SKU level. Dynamic segmentation as the foundation for forecasting and sales steering.',
              },
              {
                name: 'SCM Module',
                body: 'Supply chain overview with inventory trends, supplier performance and bottleneck detection.',
              },
              {
                name: 'AI Chat',
                body: 'Natural-language access to platform data and analytics. LLM-driven queries on demand, customer and SKU data. Powered by Ollama (on-premise, no data leaves the server).',
              },
              {
                name: 'Automated Report Generation',
                body: 'LLM-generated reports based on current forecasts, segmentations and operational KPIs. Context-aware summaries instead of static templates.',
              },
            ],
          },
          {
            type: 'modules',
            heading: 'Further Developments',
            items: [
              {
                name: 'ETL & Data Automation',
                body: 'Fully automated pipelines (Dagster/Airflow) for SAP R/3 data extraction, transformation and loading into the analytical data warehouse.',
              },
              {
                name: 'Internal Tools',
                body: 'Cattle ear-tag lookup with API integration to Qualifood — real-time queries on origin and quality data directly from the platform.',
              },
            ],
          },
          {
            type: 'challenges',
            heading: 'Technical Challenges',
            items: [
              {
                name: 'SAP R/3 Data Quality',
                body: 'Automated detection and correction of mis-postings, inconsistent master data and duplicate entries.',
              },
              {
                name: 'Scale',
                body: 'Training and serving 450,000+ time series efficiently — solved via segmentation-based global models instead of one model per SKU.',
              },
              {
                name: 'Cold-Start Problem',
                body: 'Forecasting new SKUs with no historical data — handled via assignment to existing segments and transfer learning.',
              },
            ],
          },
          {
            type: 'quote',
            label: 'REFERENCE',
            quote:
              '"The applications built here are now a fixed part of our daily operations."',
            author: 'Managing Director · Food manufacturer · German mid-market',
          },
          {
            type: 'stats',
            heading: 'Numbers',
            items: [
              { value: '770+', label: 'customers' },
              { value: '900', label: 'SKUs' },
              { value: '450.000+', label: 'time series' },
              { value: '6', label: 'weeks to go-live' },
            ],
          },
          {
            type: 'stack',
            heading: 'Stack',
            items: [
              'PyTorch',
              'LightGBM',
              'FastAPI',
              'React',
              'TypeScript',
              'DuckDB',
              'Docker',
              'Nginx',
              'MLflow',
              'Dagster',
              'Airflow',
              'Celery',
              'Redis',
              'SAP R/3',
              'Microsoft Entra ID (SSO)',
              'RBAC',
              'CI/CD',
              'SHAP',
              'Ollama',
            ],
          },
        ],
      },
      {
        id: 'nalu-ai',
        number: '02',
        title: 'Nalu AI',
        subtitle: 'Demand Intelligence Platform — Next Generation',
        attribution: 'Independently developed',
        paragraphs: [
          'Generalisation of MeatMind into an industry-agnostic platform. Multi-tenant architecture with configuration-driven onboarding — no hard-coded industry assumptions in the core.',
          'Each customer receives a dedicated instance, deployed via Docker Compose on their own infrastructure. No customer data leaves the server.',
        ],
        blocks: [
          {
            type: 'mockup',
            mockup: 'dashboard',
            caption: 'Dashboard with KPIs, forecast chart and ABC/XYZ matrix.',
            rotate: 'left',
          },
          {
            type: 'highlights',
            heading: 'Architecture Highlights',
            items: [
              {
                name: 'Multi-Tenancy',
                body: 'Every customer is a dedicated instance with its own configuration. Onboarding through config.yaml — no code changes required.',
              },
              {
                name: 'Zero-Industry-Assumptions',
                body: 'Core code carries no industry logic. Column names, modules and features are fully configuration-driven.',
              },
              {
                name: 'On-Premise or Cloud',
                body: 'Docker Compose on own infrastructure or cloud deployment. Flexible per requirement — no vendor lock-in, full control over data and operations.',
              },
            ],
          },
          {
            type: 'mockup',
            mockup: 'forecasting',
            caption: 'SKU forecast with P10/P50/P90 intervals and model metrics.',
            rotate: 'right',
          },
          {
            type: 'mockup',
            mockup: 'scm',
            caption: 'Reorder alerts with severity classification and push notifications.',
            rotate: 'left',
          },
          {
            type: 'mockup',
            mockup: 'kunden',
            caption: 'Customer intelligence with purchase probability and churn risk.',
            rotate: 'right',
          },
          {
            type: 'stack',
            heading: 'Stack',
            items: [
              'Python',
              'FastAPI',
              'PyTorch',
              'LightGBM',
              'React',
              'TypeScript',
              'DuckDB',
              'PostgreSQL',
              'Docker',
              'Celery',
              'Redis',
              'Nginx',
              'MLflow',
              'Alembic',
              'structlog',
            ],
          },
        ],
      },
      {
        id: 'eon',
        number: '03',
        title: 'E.ON',
        subtitle: 'Data Quality & Risk Engineering',
        attribution: 'Independently developed · Full-time role',
        paragraphs: [
          'End-to-end quality assurance of calculated price data — fully automated in Python. Validation of regulatory price adjustments and procurement costs in energy trading.',
          'Analytical framework for risk assessment (Initial Margin) in commodity portfolio management.',
        ],
        blocks: [
          {
            type: 'stack',
            heading: 'Stack',
            items: ['Python', 'SQL'],
          },
        ],
      },
      {
        id: 'dive-ops',
        number: '04',
        title: 'Dive Operations Platform',
        subtitle: 'Full-Stack Web App',
        attribution: 'Independently developed · 2 years · Hawaii · PADI Dive Master',
        paragraphs: [
          'Full digitisation of a dive shop on Hawaii during a sabbatical. All operational processes — bookings, customer management, daily planning, certification tracking — migrated from paper and whiteboard to a single web application.',
        ],
        blocks: [
          {
            type: 'beforeAfter',
            vorherLabel: 'Before',
            vorher: 'Paper sheets, whiteboards, Excel, manual coordination',
            nachherLabel: 'After',
            nachher: 'One app for bookings, CRM, daily planning and certifications',
          },
        ],
      },
    ],
  },

  stack: {
    sectionLabel: 'STACK',
    groups: [
      {
        label: 'ML & Data Science',
        items: ['PyTorch', 'scikit-learn', 'LightGBM', 'SHAP', 'MLflow'],
      },
      { label: 'Generative AI', items: ['Ollama', 'LLM-driven report generation', 'AI chat'] },
      { label: 'Backend & APIs', items: ['Python', 'FastAPI', 'Flask', 'Celery', 'Redis'] },
      { label: 'Orchestration', items: ['Dagster', 'Airflow'] },
      {
        label: 'Data & Storage',
        items: ['DuckDB', 'PostgreSQL', 'Snowflake', 'SQL Server', 'Parquet'],
      },
      { label: 'Frontend', items: ['React', 'TypeScript'] },
      {
        label: 'Infrastructure',
        items: ['Docker', 'Kubernetes', 'Nginx', 'GitHub Actions', 'CI/CD', 'Prometheus', 'Grafana'],
      },
      {
        label: 'Cloud',
        items: ['Azure', 'Entra ID (SSO)', 'Azure Blob Storage'],
      },
      {
        label: 'Integration',
        items: ['SAP R/3', 'REST APIs', 'structlog', 'Custom Observability'],
      },
    ],
  },

  footer: {
    tagline: 'Ride the wave of demand.',
    email: 'aloha@nalu-ai.com',
    copyright: '© 2026 Nalu AI',
  },
}
