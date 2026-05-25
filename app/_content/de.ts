import type { Content } from './types'

export const de: Content = {
  nav: {
    projekte: 'Projekte',
    stack: 'Stack',
    kontakt: 'Kontakt',
    logoAria: 'Nalu AI — Startseite',
    menuLabel: 'Menü öffnen',
    langLabel: 'Sprache wählen',
  },

  hero: {
    eyebrow: 'PREDICTIVE & GENERATIVE AI',
    titleLine1: 'Ride the wave',
    titleLine2: 'of demand.',
    scrollAria: 'Zum nächsten Abschnitt scrollen',
  },

  name: {
    pronunciation: '[nah-loo]',
    metaText: 'hawaiianisch für Welle',
    paragraph1:
      'Entstanden aus einer tiefen Verbindung zum Pazifik, jahrelanger Erfahrung unter Wasser und der Überzeugung, dass Daten denselben Mustern folgen wie das Meer: Saisonalität, Trends, Rauschen — Wellen.',
    paragraph2:
      'Die richtigen Muster erkennen, die nächste Welle vorhersagen und darauf vorbereitet sein — das ist der rote Faden.',
    authorLine1: 'Entwickelt von Maximilian Fischer',
    authorLine2: 'Physik & Meteorologie (LMU München) · ML Engineering · München',
    authorLine3: 'Baut seit 2016 datengetriebene Systeme.',
  },

  projects: {
    sectionLabel: 'PROJEKTE',
    projects: [
      {
        id: 'meatmind',
        number: '01',
        title: 'MeatMind',
        subtitle: 'End-to-End ML & BI Platform',
        attribution: 'Eigenständig entwickelt · Festanstellung · Müller Fleisch GmbH',
        paragraphs: [
          'Vollständig eigenentwickelte Plattform für Absatzprognosen, Business Intelligence und operative Planung in der Fleischverarbeitungsbranche. Produktiv im Einsatz bei einem mittelständischen Unternehmen mit 770+ Kunden und 900 Artikeln.',
          'Die Plattform verarbeitet über 450.000 Zeitreihen-Datenpunkte und kombiniert ML-gestützte Bedarfsprognosen mit klassischer BI — von der Datenintegration aus SAP R/3 bis zur fertigen Entscheidungsgrundlage für Vertrieb und Einkauf. Generative AI (Ollama, On-Premise) wird für automatisierte Reportgenerierung und einen KI-Chat zur natürlichsprachlichen Datenanalyse eingesetzt. Architektur ist sowohl für On-Premise als auch für Cloud-Umgebungen ausgelegt.',
        ],
        blocks: [
          {
            type: 'modules',
            heading: 'Module',
            items: [
              {
                name: 'Demand Forecasting',
                body: 'ML-basierte Absatzprognosen auf Artikel- und Kundenebene. Modelle: Temporal Fusion Transformer (PyTorch), LightGBM. Cold-Start-Lösung für neue Artikel über segmentierungsbasierte Global Models.',
              },
              {
                name: 'Produktionsplanung',
                body: 'Automatisierte Planung auf Basis der Forecasts. Integration von Kapazitäten, Mindestmengen und Produktionszyklen.',
              },
              {
                name: 'Schlachtanalyse',
                body: 'Auswertung von Schlachtdaten zur Optimierung von Einkauf und Produktion. Verknüpfung von Schlachtgewichten, Qualitätsdaten und Absatzprognosen.',
              },
              {
                name: 'Einkaufsforecasting',
                body: 'Prognosegestützte Einkaufsplanung für Lebendvieh — welche Tierarten in welcher Haltungsform und Menge eingekauft werden müssen, abgeleitet aus Absatzprognosen und Produktionskapazitäten.',
              },
              {
                name: 'Kundensegmentierung',
                body: 'ABC/XYZ-Analyse auf Kunden- und Artikelebene. Dynamische Segmentierung als Basis für Forecasting und Vertriebssteuerung.',
              },
              {
                name: 'SCM-Modul',
                body: 'Supply Chain Übersicht mit Bestandsentwicklung, Lieferperformance und Engpasserkennung.',
              },
              {
                name: 'KI-Chat',
                body: 'Natürlichsprachlicher Zugang zu Plattformdaten und Analysen. LLM-gestützte Abfragen auf Absatz-, Kunden- und Artikeldaten. Powered by Ollama (On-Premise, keine Daten an Dritte).',
              },
              {
                name: 'Automatisierte Reportgenerierung',
                body: 'LLM-generierte Berichte auf Basis aktueller Forecasts, Segmentierungen und operativer Kennzahlen. Kontextbezogene Zusammenfassungen statt statischer Templates.',
              },
            ],
          },
          {
            type: 'modules',
            heading: 'Weitere Entwicklungen',
            items: [
              {
                name: 'ETL & Datenautomatisierung',
                body: 'Vollautomatisierte Pipelines (Dagster/Airflow) für SAP R/3 Datenextraktion, Transformation und Laden ins analytische Data Warehouse.',
              },
              {
                name: 'Interne Tools',
                body: 'Rinder-Ohrmarkensuche mit API-Anbindung an Qualifood — Echtzeit-Abfrage von Herkunfts- und Qualitätsdaten direkt aus der Plattform.',
              },
            ],
          },
          {
            type: 'challenges',
            heading: 'Technische Herausforderungen',
            items: [
              {
                name: 'Datenqualität SAP R/3',
                body: 'Automatisierte Erkennung und Korrektur von Fehlbuchungen, inkonsistenten Artikelstammdaten und doppelten Einträgen.',
              },
              {
                name: 'Skalierung',
                body: '450.000+ Zeitreihen effizient trainieren und vorhersagen — gelöst über segmentierungsbasierte Global Models statt individueller Modelle pro Artikel.',
              },
              {
                name: 'Cold-Start-Problem',
                body: 'Neue Artikel ohne historische Daten — Prognose über Zuordnung zu bestehenden Segmenten und Transfer Learning.',
              },
            ],
          },
          {
            type: 'quote',
            label: 'REFERENZ',
            quote:
              '„Die entwickelten Anwendungen sind heute fester Bestandteil der täglichen Abläufe."',
            author: 'Geschäftsführer · Lebensmittelproduzent · Mittelstand DACH',
          },
          {
            type: 'stats',
            heading: 'Zahlen',
            items: [
              { value: '770+', label: 'Kunden' },
              { value: '900', label: 'Artikel' },
              { value: '450.000+', label: 'Zeitreihen' },
              { value: '6', label: 'Wochen bis Go-Live' },
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
        attribution: 'Eigenständig entwickelt · Eigenentwicklung',
        paragraphs: [
          'Weiterentwicklung und Generalisierung von MeatMind zu einer branchenunabhängigen Plattform. Mandantenfähige Architektur mit konfigurationsgetriebenem Onboarding — keine hartcodierten Branchenannahmen im Core.',
          'Jeder Kunde erhält eine eigene Instanz, deployed via Docker Compose auf der kundeneigenen Infrastruktur. Keine Kundendaten verlassen den jeweiligen Server.',
        ],
        blocks: [
          {
            type: 'mockup',
            mockup: 'dashboard',
            caption: 'Dashboard mit KPIs, Forecast-Chart und ABC/XYZ-Matrix.',
            rotate: 'left',
          },
          {
            type: 'highlights',
            heading: 'Architektur-Highlights',
            items: [
              {
                name: 'Multi-Tenancy',
                body: 'Jeder Kunde ist eine eigene Instanz mit eigener Konfiguration. Onboarding über config.yaml — keine Code-Änderungen nötig.',
              },
              {
                name: 'Zero-Industry-Assumptions',
                body: 'Core-Code enthält keine Branchenlogik. Spaltennamen, Module und Features komplett konfigurationsgetrieben.',
              },
              {
                name: 'On-Premise oder Cloud',
                body: 'Docker Compose auf eigener Infrastruktur oder Cloud-Deployment. Flexibel je nach Anforderung — keine Vendor-Lock-in, volle Kontrolle über Daten und Betrieb.',
              },
            ],
          },
          {
            type: 'mockup',
            mockup: 'forecasting',
            caption: 'Artikel-Forecast mit P10/P50/P90-Intervallen und Modell-Metriken.',
            rotate: 'right',
          },
          {
            type: 'mockup',
            mockup: 'scm',
            caption: 'Reorder Alerts mit Severity-Klassifikation und Push-Benachrichtigungen.',
            rotate: 'left',
          },
          {
            type: 'mockup',
            mockup: 'kunden',
            caption: 'Kunden-Intelligenz mit Kaufwahrscheinlichkeit und Churn-Risiko.',
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
        attribution: 'Eigenständig entwickelt · Festanstellung',
        paragraphs: [
          'End-to-End Qualitätssicherung kalkulierter Preisdaten — vollständig automatisiert in Python. Validierung regulatorischer Preisanpassungen und Beschaffungskosten im Energiehandel.',
          'Analytisches Framework zur Risikobewertung (Initial Margin) im Commodity Portfoliomanagement.',
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
        attribution: 'Eigenständig entwickelt · 2 Jahre · Hawaii · PADI Dive Master',
        paragraphs: [
          'Komplette Digitalisierung eines Tauchshops auf Hawaii während eines Sabbaticals. Alle operativen Prozesse — Buchungen, Kundenverwaltung, Tagesplanung, Zertifikatstracking — von Papier und Whiteboard auf eine zentrale Webanwendung migriert.',
        ],
        blocks: [
          {
            type: 'beforeAfter',
            vorherLabel: 'Vorher',
            vorher: 'Papierlisten, Whiteboards, Excel, manuelle Kommunikation',
            nachherLabel: 'Nachher',
            nachher: 'Eine App für Buchung, CRM, Tagesplanung, Zertifikate',
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
      { label: 'Generative AI', items: ['Ollama', 'LLM-gestützte Reportgenerierung', 'KI-Chat'] },
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
