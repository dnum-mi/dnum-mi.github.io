<script setup>
import { ref } from 'vue'
import { sendEmail } from '@/utils.js'

const knowMoreBtn = ref({
  label: 'En savoir plus',
  onClick: () => sendEmail(),
})

const tabListName = 'benefitsTab'
const tabTitles = [
  {
    title: 'Qualité',
    icon: 'ri-award-fill',
  },
  {
    title: 'Déploiement continu',
    icon: 'ri-git-merge-fill',
  },
  {
    title: 'Sécurité',
    icon: 'ri-shield-check-fill',
  },
]
const tabContents = [
  'Bénéficier d\'un socle technique et organisationnel, ainsi que des moyens de formation nécessaire à la production de services numériques aux standards de qualité, de sureté et de sécurité des grands industriels du numérique',
  'Passer du développement, à l\'intégration, au déploiement à l\'échelle « sans friction »',
  'L\'agilité dans un cadre souverain sécurisé, compatible avec les normes existantes',
]

const useCases = [
  {
    title: 'Cas 1',
    description: 'La refonte du programme ERPC (éducation routière et permis de conduire)',
    to: '#cas-usage',
  },
  {
    title: 'Cas 2',
    description: 'Le projet SELFIM (détection de fraudes lors de l\'émission des titres sécurisés)',
    to: '#cas-usage',
  },
  {
    title: 'Cas 3',
    description: 'Le ministère de la Justice',
    to: '#cas-usage',
  },
  {
    title: 'Cas 4',
    description: 'Démarches-Simplifiées et Mon France Connect',
    to: '#cas-usage',
  },
]
</script>

<template>
  <h1
    id="top"
    class="fr-h1 fr-text-title--blue-france text-center"
  >
    Cloud π Native
  </h1>
  <section
    class="fr-py-2w container-for-two"
  >
    <DsfrCallout
      title="Description de l'offre Cloud π Native"
      content="L'offre à visée interministérielle Cloud π Native s'appuie sur l'écosystème de ressources Cloud π du Ministère de l'Intérieur et des Outre-mer, pour proposer une usine logicielle DevSecOps afin de produire et opérer des services numériques au meilleurs standards de qualité, sureté et sécurité."
      :button="knowMoreBtn"
    />
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
    />
  </section>

  <hr class="section-separator">

  <section
    class="w-full flex flex-col justify-center align-center"
  >
    <h2
      id="cas-usage"
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      <a href="#cas-usage">
        Cas d'usage
      </a>
    </h2>
    <DsfrTiles :tiles="useCases" />
  </section>

  <hr class="section-separator">

  <section>
    <h2
      id="personas"
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      <a href="#personas">
        À qui s'adresse l'offre Cloud π Native ?
      </a>
    </h2>
    <div
      class="container-for-two"
    >
      <DsfrTile
        class="fr-mt-2w"
        title="Contexte interministériel"
        description="En tant qu'acteur de la transformation numérique sur un secteur ministériel ou interministériel, vous souhaitez produire et gérer des produits numériques aux meilleurs standards de qualité, sureté et sécurité ? Rejoignez la communauté des partenaires-clients afin de consommer l'offre tout contribuant à son évolution."
        to="#personas"
      />
      <DsfrTile
        class="fr-mt-2w"
        title="Contexte partenaires (ESN/SSII, contributeurs du libre, …)"
        description="En tant que producteur de produits numériques, industriel, freelance ou contributeur communautaire de l'Open Source, vous jouez un rôle de contributeur, de conseil/accompagnement ou d'appui au numérique public ? Rejoignez la communauté des partenaires-fournisseurs afin de contribuer avec faire émerger les meilleurs standards du numérique public et favoriser son interopérabilité, dans le respect de ses valeurs."
        to="#personas"
      />
    </div>
  </section>

  <hr class="section-separator">

  <section>
    <h2
      id="consommation"
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      <a href="#consommation">
        Comment consommer Cloud π Native ?
      </a>
    </h2>
    <DsfrCallout
      title="Une offre en co-construction"
      content="L'offre Cloud π native est actuellement en co-construction en agilité, avec nos partenaires clients, le soutien financier du plan de relance et l'appui de la DINUM. Afin de vous accompagner dans son expérimentation et sa construction, nous vous invitons à prendre contact avec nos équipes via l'adresse ci-dessous."
    />
  </section>
</template>
