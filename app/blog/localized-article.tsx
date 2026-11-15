'use client'

import { useEffect, type ReactNode } from 'react'
import { useLocale } from '@/lib/locale'

const englishMetadata = {
  'thinking-before-coding': {
    title: 'Building an App Isn’t Hard — Thinking It Through Is',
    description:
      'Modern tooling makes development faster than ever, but the real challenge is designing software that makes sense. Good apps start with clear thinking, not just good frameworks.',
  },
  'why-php-still-dominates': {
    title: 'Why PHP Still Powers a Large Part of the Web',
    description:
      'PHP remains widely used for server-side web development. A look at the data, its maintenance model, and where the ecosystem fits.',
  },
  'frontend-isnt-just-frontend': {
    title: 'Front-End Isn’t “Just” Front-End',
    description:
      'A short reflection on how front-end work is more connected to the whole system than people usually realize.',
  },
  'exploring-the-intersection-of-design-ai-and-design-engineering': {
    title: 'Design, AI, and the Work of Making Things Real',
    description:
      'AI can help explore interface ideas, but useful design still depends on context, implementation, and accessibility.',
  },
} as const

const portugueseMetadata = {
  'thinking-before-coding': {
    title: 'Criar um app não é difícil — difícil é pensar nele',
    description:
      'Ferramentas modernas aceleram o desenvolvimento, mas criar software duradouro exige clareza e compreensão do domínio.',
  },
  'why-php-still-dominates': {
    title: 'Por que o PHP ainda sustenta boa parte da web',
    description:
      'Uma análise do uso do PHP, das versões com suporte e do seu lugar no desenvolvimento web.',
  },
  'frontend-isnt-just-frontend': {
    title: 'Front-end não é “só” front-end',
    description:
      'Uma reflexão sobre como o trabalho de front-end se conecta ao sistema todo, muito além do visual.',
  },
  'exploring-the-intersection-of-design-ai-and-design-engineering': {
    title: 'Design, IA e o trabalho de tirar ideias do papel',
    description:
      'A IA pode sugerir interfaces, mas contexto, implementação e acessibilidade ainda exigem julgamento humano.',
  },
} as const

function ThinkingBeforeCoding() {
  return (
    <>
      <h1>Criar um app não é difícil — difícil é pensar nele</h1>
      <p>
        Nos últimos anos, ferramentas, frameworks e geradores de código
        evoluíram em um ritmo absurdo. Laravel, Filament, Rails, Nest, Django,
        Spring… todos oferecem atalhos poderosos.
      </p>
      <p>Mas há algo de que quase ninguém fala:</p>
      <p>
        <strong>
          Você não cria um bom software só porque escolheu a stack certa. O
          trabalho de verdade acontece antes mesmo de tocar no teclado: pensar.
        </strong>
      </p>
      <p>
        É isso que diferencia quem “sabe clicar nos botões” de quem realmente
        constrói sistemas sólidos.
      </p>
      <hr />
      <h2>O mais importante não é o framework — é o domínio</h2>
      <p>Se você sabe:</p>
      <ul>
        <li>quais entidades realmente existem no sistema;</li>
        <li>quais regras pertencem a cada uma;</li>
        <li>como elas se relacionam — e onde não deveriam se relacionar;</li>
        <li>onde cada responsabilidade deve ficar;</li>
        <li>como separar comportamento de dados;</li>
        <li>onde isolar efeitos colaterais;</li>
        <li>como reduzir o acoplamento e aumentar a coesão;</li>
      </ul>
      <p>
        então <strong>qualquer stack se torna uma aliada</strong>.
      </p>
      <p>
        Sem essa clareza, você pode usar a tecnologia mais popular do mundo e
        ainda criar um sistema que desmorona com o próprio peso.
      </p>
      <hr />
      <h2>Ferramentas modernas só funcionam quando o modelo está certo</h2>
      <p>
        Ferramentas como o Filament (ou qualquer gerador baseado em modelos)
        parecem mágicas porque a arquitetura subjacente{' '}
        <strong>reflete um domínio bem projetado</strong>.
      </p>
      <p>Ao definir entidades como:</p>
      <pre>
        <code>{`{
  "User": ["name", "email", "role"],
  "Order": ["status", "total", "created_at"]
}`}</code>
      </pre>
      <p>os resultados só são bons porque o próprio domínio já faz sentido.</p>
      <p>
        Blueprints não resolvem o caos conceitual — apenas aceleram o que já
        estava claro.
      </p>
      <hr />
      <h2>Arquitetura não são pastas bonitas — é separar responsabilidades</h2>
      <p>Muita gente confunde estrutura de pastas com arquitetura.</p>
      <p>Mas os fundamentos estão em conceitos como:</p>
      <ul>
        <li>baixo acoplamento;</li>
        <li>alta coesão;</li>
        <li>LSP, ISP, DIP (SOLID continua vivo);</li>
        <li>programar para interfaces, não implementações;</li>
        <li>entidades independentes da infraestrutura;</li>
        <li>casos de uso claros e explícitos;</li>
        <li>dependências apontando para fora, não para dentro.</li>
      </ul>
      <p>Quando esses princípios são respeitados:</p>
      <ul>
        <li>refatorar deixa de ser doloroso;</li>
        <li>funcionalidades deixam de quebrar tudo;</li>
        <li>componentes podem ser substituídos;</li>
        <li>
          dá para trocar banco, interface ou framework sem reescrever o
          universo.
        </li>
      </ul>
      <p>
        Arquitetura trata de <strong>longevidade</strong>, não de estética.
      </p>
      <hr />
      <h2>O que falta hoje não é tecnologia — é análise</h2>
      <p>Anos atrás, o fluxo de trabalho era mais ou menos assim:</p>
      <ol>
        <li>analistas pensam;</li>
        <li>o design é definido;</li>
        <li>desenvolvedores implementam;</li>
        <li>o front-end é refinado;</li>
        <li>o deploy acontece.</li>
      </ol>
      <p>Hoje, a primeira etapa praticamente desapareceu.</p>
      <p>Tudo vira:</p>
      <ul>
        <li>“entregue rápido”;</li>
        <li>“publique o MVP”;</li>
        <li>“a gente revisita depois”;</li>
        <li>“o cliente precisava disso para ontem”.</li>
      </ul>
      <p>O resultado? Sistemas frágeis e com vida curta.</p>
      <p>
        Não porque as ferramentas sejam ruins — mas porque ninguém parou para
        pensar.
      </p>
      <hr />
      <h2>Criar um app é fácil — o desafio é fazê-lo direito</h2>
      <p>
        Stacks modernas oferecem autenticação, painéis administrativos,
        scaffolds, ORMs, rotas, componentes, filas, cache… tudo.
      </p>
      <p>Mas nada disso substitui:</p>
      <ul>
        <li>limites bem definidos;</li>
        <li>bons modelos de domínio;</li>
        <li>camadas organizadas;</li>
        <li>compreensão das regras de negócio.</li>
      </ul>
      <p>Ferramentas podem acelerar a clareza — não podem criá-la do nada.</p>
      <hr />
      <h2>
        No fim das contas, programar envolve mais análise do que digitação
      </h2>
      <p>
        Se você entende o domínio, escolhe bons nomes, define responsabilidades
        claras, separa camadas e segue alguns princípios atemporais…
      </p>
      <p>
        …então sim: <strong>criar um app fica fácil</strong>.
      </p>
      <p>O resto são ferramentas. E boas ferramentas estão por toda parte.</p>
      <p>O segredo é simples:</p>
      <p>
        <strong>
          arquitetura antes da tecnologia,
          <br />
          domínio antes do framework,
          <br />
          pensamento antes do código.
        </strong>
      </p>
    </>
  )
}

function WhyPhpStillDominates() {
  return (
    <>
      <h1>Por que o PHP ainda sustenta boa parte da web</h1>
      <p>
        O PHP costuma ser tratado como uma tecnologia legada. Os dados de uso
        sugerem uma visão mais prática: ele continua sendo uma parte importante
        da infraestrutura da web.
      </p>
      <p>
        No momento em que este texto foi escrito, o{' '}
        <a href="https://w3techs.com/technologies/details/pl-php">
          W3Techs informa que o PHP está presente em 69,7% dos sites cuja
          linguagem de servidor consegue identificar
        </a>
        . Esse número descreve uma pesquisa e um denominador específicos; não
        significa que o PHP seja usado em 69,7% de todos os sites nem que seja a
        melhor escolha para todo projeto. Ele mostra que o PHP continua
        relevante em produção.
      </p>
      <h2>Uma linguagem que continua evoluindo</h2>
      <p>
        O PHP moderno oferece recursos como declarações de tipos para
        argumentos, valores de retorno e propriedades. A documentação oficial
        descreve como essas declarações são verificadas e onde estão
        disponíveis.
      </p>
      <p>
        Manutenção importa tanto quanto novidades. O PHP tem um ciclo de suporte
        definido: versões recebem suporte ativo e depois suporte apenas de
        segurança antes de chegar ao fim da vida útil. As equipes ainda precisam
        acompanhar a versão em uso e o plano de atualização; ser amplamente
        usado não torna segura uma instalação desatualizada.
      </p>
      <h2>Frameworks tornam o ecossistema prático</h2>
      <p>
        Para aplicações web, o Laravel reúne tarefas comuns — como rotas, acesso
        a banco de dados, filas, e-mail e autenticação — em um framework bem
        documentado. Isso pode tornar o PHP uma opção produtiva quando o
        framework combina com as habilidades da equipe e as necessidades da
        aplicação.
      </p>
      <p>
        Isso não significa que Laravel ou PHP sejam adequados para todo sistema.
        A pergunta útil é se a stack ajuda a equipe a entregar e manter o
        produto que realmente precisa construir.
      </p>
      <h2>Popularidade é contexto, não um veredito</h2>
      <p>
        A presença do PHP em sites existentes é um dos motivos pelos quais seu
        ecossistema continua importante. Seu desenvolvimento ativo e as
        ferramentas disponíveis fazem dele uma opção razoável para muitos
        projetos web. Popularidade e frameworks não substituem bons modelos de
        domínio, limites claros, testes e um plano de atualização.
      </p>
      <p>
        A ideia é mais simples do que dizer “PHP é o melhor” ou “PHP morreu”:
        ele ainda é muito usado, recebe manutenção e merece ser avaliado pelos
        próprios méritos.
      </p>
      <h2>Fontes</h2>
      <ul>
        <li>
          <a href="https://w3techs.com/technologies/details/pl-php">
            W3Techs: estatísticas de uso do PHP
          </a>{' '}
          (consulta em 10 de outubro de 2026; os dados são atualizados
          diariamente)
        </li>
        <li>
          <a href="https://www.php.net/supported-versions.php">
            PHP: versões com suporte
          </a>
        </li>
        <li>
          <a href="https://www.php.net/manual/en/language.types.declarations.php">
            PHP: declarações de tipo
          </a>
        </li>
        <li>
          <a href="https://laravel.com/docs">Documentação do Laravel</a>
        </li>
      </ul>
    </>
  )
}

function FrontendIsntJustFrontend() {
  return (
    <>
      <h1>Front-end não é “só” front-end</h1>
      <p>
        Esta é só uma reflexão breve — uma observação baseada na experiência.
      </p>
      <p>
        É comum iniciantes acreditarem que front-end é o lado “visual” do
        desenvolvimento, quase como design com um pouco de código. Mas, depois
        de trabalhar em projetos reais por algum tempo, uma coisa fica clara:
      </p>
      <p>
        <strong>
          Front-end não é um cantinho do desenvolvimento de software. É uma
          especialização que toca o sistema inteiro.
        </strong>
      </p>
      <p>
        Interfaces interagem com APIs. Lidam com estado, cache, desempenho,
        rotas, acessibilidade, erros e peculiaridades dos navegadores. Nada
        disso é “só visual”.
      </p>
      <p>
        Continua sendo software — software de verdade — voltado para quem usa,
        em vez de para o servidor.
      </p>
      <hr />
      <h2>Uma pequena observação sobre o todo</h2>
      <p>Com o tempo, outra coisa também fica clara:</p>
      <p>
        <strong>
          Um desenvolvedor ganha muito ao entender o que as outras pessoas da
          equipe fazem.
        </strong>
      </p>
      <p>Não precisa dominar tudo — basta entender o cenário.</p>
      <p>Backend, infraestrutura, nuvem, CI/CD, análise…</p>
      <p>Um pouco de contexto facilita o seu próprio trabalho:</p>
      <ul>
        <li>decisões melhores;</li>
        <li>limites mais claros;</li>
        <li>menos mal-entendidos;</li>
        <li>colaboração mais fluida.</li>
      </ul>
      <p>
        Você não precisa ser especialista em tudo. Só entender como o restante
        do sistema funciona já coloca você um passo à frente.
      </p>
      <hr />
      <h2>Em resumo</h2>
      <p>
        Front-end não é “só” front-end. É software conectado a todo o resto,
        guiado pelos mesmos princípios — apenas focado no lado do sistema que as
        pessoas usam.
      </p>
      <p>Sem drama, sem sermão. Só uma ideia que valia registrar.</p>
    </>
  )
}

function DesignAiAndEngineering() {
  return (
    <>
      <h1>Design, IA e o trabalho de tirar ideias do papel</h1>
      <p>
        A IA consegue produzir ideias de interface rapidamente. Uma tela gerada,
        porém, é apenas uma proposta: ela não sabe se o fluxo combina com o
        produto, com as pessoas usuárias ou com o sistema por trás dele.
      </p>
      <h2>Uma ideia ainda precisa de contexto</h2>
      <p>
        Por exemplo, uma ferramenta pode sugerir o layout de um painel. Ainda
        cabe a alguém decidir quais informações importam, o que acontece quando
        faltam dados, como explicar erros e como a tela funciona em um celular.
        Essas escolhas dependem das regras do produto e de restrições reais, não
        apenas da aparência.
      </p>
      <p>
        A IA pode ajudar a explorar alternativas ou criar textos provisórios.
        Trate o resultado como ponto de partida: compare-o com os requisitos
        reais, teste a interação e substitua suposições por decisões específicas
        do produto.
      </p>
      <h2>Design e engenharia conectam as partes</h2>
      <p>
        O trabalho não termina em um protótipo bem-acabado. Transformar uma
        ideia em interface significa conectar decisões visuais a componentes,
        estado da aplicação, APIs, comportamento responsivo e acessibilidade. É
        aí que design e engenharia se encontram: não em tornar a passagem para
        desenvolvimento “perfeita”, mas em fazer a intenção sobreviver à
        implementação.
      </p>
      <p>
        A acessibilidade é um exemplo de que um resultado aparentemente
        convincente não basta. As{' '}
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
          Diretrizes de Acessibilidade para Conteúdo Web (WCAG)
        </a>{' '}
        definem critérios verificáveis para conteúdo web acessível. Uma
        interface gerada ainda precisa ser avaliada segundo esses critérios e as
        necessidades de quem vai usá-la.
      </p>
      <h2>Um papel útil para a IA</h2>
      <p>
        O valor não está em a IA substituir o julgamento de design ou garantir
        experiências melhores. Ela pode ampliar o conjunto de ideias
        consideradas. Ainda cabe às pessoas escolher, validar e implementar a
        opção certa.
      </p>
      <p>
        Esse equilíbrio mantém a ferramenta no seu devido lugar: útil para
        explorar, mas não substituta de compreender o problema ou assumir
        responsabilidade pelo resultado.
      </p>
      <h2>Para saber mais</h2>
      <ul>
        <li>
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
            W3C: Diretrizes de Acessibilidade para Conteúdo Web (WCAG)
          </a>
        </li>
        <li>
          <a href="https://motion-primitives.com/">Motion Primitives</a> —
          componentes de interface e animações usados neste portfólio
        </li>
      </ul>
    </>
  )
}

const portugueseArticles = {
  'thinking-before-coding': ThinkingBeforeCoding,
  'why-php-still-dominates': WhyPhpStillDominates,
  'frontend-isnt-just-frontend': FrontendIsntJustFrontend,
  'exploring-the-intersection-of-design-ai-and-design-engineering':
    DesignAiAndEngineering,
} as const

type ArticleSlug = keyof typeof portugueseArticles

export function LocalizedCover({
  src,
  alt,
  altPtBR,
  caption,
}: {
  src: string
  alt: string
  altPtBR: string
  caption?: string
}) {
  const { locale } = useLocale()

  return (
    <figure>
      <div className="aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={src}
          alt={locale === 'pt-BR' ? altPtBR : alt}
          className="h-full w-full rounded-t-xl object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

export function LocalizedArticle({
  slug,
  children,
}: {
  slug: ArticleSlug
  children: ReactNode
}) {
  const { locale } = useLocale()

  useEffect(() => {
    const metadata =
      locale === 'pt-BR' ? portugueseMetadata[slug] : englishMetadata[slug]
    document.title = `${metadata.title} | Andre GB Farias`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', metadata.description)
  }, [locale, slug])

  const PortugueseArticle = portugueseArticles[slug]

  return (
    <article>{locale === 'pt-BR' ? <PortugueseArticle /> : children}</article>
  )
}
