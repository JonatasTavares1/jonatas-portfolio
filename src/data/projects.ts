export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  image: string[]
  stack: string[]
  highlights: string[]
  links?: ProjectLink[]
}

export type ProjectLink = {
  label: string
  url: string
}



/*import img1 from "./public/projetos/sistema-veiculacoes/veiculacoes-1.png"
import img2 from "./public/projetos/sistema-veiculacoes/veiculacoes-2.png"
import img3 from "./public/images/projetos/sistema-veiculacoes/veiculacoes-3.png"
import img4 from "./public/images/projetos/dash-financeiro/dash-financeiro.png"
import img5 from "./public/images/projetos/Dash-omni/dash-omni.png"*/

export const projects: Project[] = [
{
    slug: "dashboard-financeiro",
    title: "Dashboard Financeiro",
    subtitle: "Gestão de receitas por área de atuação, visualizações inteligentes de gastos e DRE consolidado",
    description:
      "Dashboard com visões detalhadas acerca das finanças da empresa, com base nos custos e receitas orçadas e realizadas, além de um DRE Consolidado do faturamento x lucro",
    image: ["/projetos/dash-financeiro/dash-financeiro.png"],
    stack: ["Power BI", "Excel", "Python", "Figma & Design System", "SQL"],
    highlights: [
      "O dashboard foi estruturado para oferecer uma análise financeira dinâmica e executiva, com foco em desempenho, comparativos e tomada de decisão.",

        "Filtros permitem segmentação por mês, unidade (Sales/Service) e tipo de valor (Realizado/Orçado), garantindo flexibilidade analítica.",

        "KPIs no topo apresentam Receita Bruta e Líquida, Orçada e Realizada, oferecendo leitura rápida dos principais números do negócio.",

        "Gráfico de Receita Líquida por Unidade evidencia evolução mensal, sazonalidade e desempenho comparativo entre Sales e Service.",

        "Treemap de Custos destaca visualmente as categorias com maior impacto financeiro, facilitando a identificação de oportunidades de otimização.",

        "DRE Consolidada organiza os resultados por Receita, Custos, EBITDA, Impostos e Lucro, com visão mensal e acumulada, permitindo análise de desvios, impacto financeiro e comportamento por área."
    ],
    links: [
    {
      label: "Dashboard",
      url: "https://app.powerbi.com/groups/me/reports/51e96053-e27d-4245-ad0f-912e21132fb2/12f17a9677d7807690ae?experience=power-bi",
    },
  ],
  },

  {
    slug: "dash-omni",
    title: "Dashboard de produtividade operacional",
    subtitle: "Gestão de PIs, anunciantes, agências, filtros e exportação",
    description:
      "Painel interativo para análise de vendas e seguros, com KPIs de penetração, prêmio, ticket médio e comissões, além de comparativos por produto, agente e período. Desenvolvido com foco em tomada de decisão executiva.",
    image: ["/projetos/Dash-omni/dash-omni.png"],
    stack: ["Power BI", "Excel", "Figma & Design System"],
    highlights: [
      "KPIs estratégicos de performance comercial e financeira",
      "Análise de penetração, ticket médio e comissões",
      "Comparativos dinâmicos por período, produto e agente",
      "Modelagem de dados e medidas DAX personalizadas",
      "Dashboard orientado à tomada de decisão executiva"
    ],
    links: [
    {
      label: "Dashboard",
      url: "https://app.powerbi.com/groups/me/reports/544e7669-98a7-434d-884e-b2949c687992/e7fa15023150840225c1?experience=power-bi",
    },
  ],
  },


  {
    slug: "sistema-veiculacoes",
    title: "Sistema de Veiculações Comerciais",
    subtitle: "Gestão de PIs, anunciantes, agências, filtros e exportação",
    description:
      "Sistema full stack voltado ao fluxo comercial, com regras de negócio, modelagem relacional e recursos analíticos (filtros, exportações e painéis).",
    image: [
      "/projetos/sistema-veiculacoes/veiculacoes-1.png",
      "/projetos/sistema-veiculacoes/veiculacoes-2.png",
      "/projetos/sistema-veiculacoes/veiculacoes-3.png",
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "SQL"],
    highlights: [
      "CRUDs com regras de negócio e validações",
      "Filtros avançados e exportação (.xlsx)",
      "Estrutura escalável (controllers/services)",
      "Foco em dados e rastreabilidade",
    ],
    links: [
    {
      label: "GitHub",
      url: "https://golive-veiculacoes.vercel.app/login",
    },
  ],
  },
]



