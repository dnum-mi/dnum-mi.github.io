<script setup>

const knowMoreBtn = {
  label: 'En savoir plus',
}

const tabListName = 'benefitsTab'
const tabTitles = [
  {
    title: 'bénéfice 1',
    icon: 'ri-coins-fill',
  },
  {
    title: 'bénéfice 2',
    icon: 'ri-shield-check-fill',
  },
  {
    title: 'bénéfice 3',
    icon: 'ri-git-merge-fill',
  },
]
const tabContents = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem',
]

const useCases = [
  {
    title: 'Cas 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Cas 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Cas 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Cas 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]
</script>

<template>
  <section
    class="fr-py-2w container-for-two"
  >
    <DsfrCallout
      title="Description de l'offre Cloud PI Native"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      Cas d'usage
    </h2>
    <DsfrTiles :tiles="useCases" />
  </section>

  <hr class="section-separator">

  <section>
    <div
      class="container-for-two"
    >
      <DsfrTile
        class="fr-mt-2w"
        title="persona 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        @click="$router.push('/contact')"
      />
      <DsfrTile
        class="fr-mt-2w"
        title="persona 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        @click="$router.push('/contact')"
      />
    </div>
  </section>

  <hr class="section-separator">

  <section
    class="fr-mt-2w fr-pt-2w fr-background-contrast--grey container-for-two two-third"
  >
    <DsfrCallout
      title="Prix"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <div
      class="fr-summary"
    >
      <h2
        class="fr-summary__title"
      >
        Critères d'éligibilité
      </h2>
      <ul
        class="fr-summary__list"
      >
        <li>consectetur adipiscing elit</li>
        <li>consectetur adipiscing elit</li>
        <li>consectetur adipiscing elit</li>
      </ul>
    </div>
  </section>
</template>
