<script setup>

const knowMoreBtn = {
  label: 'En savoir plus',
}

const tabListName = 'benefitsTab'
const tabTitles = [
  {
    title: '1',
    icon: 'ri-mail-line',
  },
  {
    title: '2',
    icon: 'ri-mail-line',
  },
]
const tabContents = [
  'blabla 1',
  'blabla 2',
]
</script>

<template>
  <div
    class="fr-py-2w flex justify-around items-center w-full"
  >
    <DsfrCallout
      title="Description de l'offre Cloud PI Native"
      content="blabla"
      :button="knowMoreBtn"
    />
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
    />
  </div>

  <div
    class="w-full flex flex-col justify-center align-center"
  >
    <h2
      class="fr-h2 fr-text-title--blue-france text-center"
    >
      Cas d'usage
    </h2>

    <div
      class="flex justify-around"
    >
      <DsfrTile
        class="fr-mt-2w"
        title="persona 1"
        description="blablabla"
      />
      <DsfrTile
        class="fr-mt-2w"
        title="persona 2"
        description="blablabla"
      />
    </div>
  </div>

  <div
    class="fr-mt-2w fr-pt-2w fr-background-contrast--grey w-full flex justify-around"
  >
    <DsfrCallout
      title="Prix"
      content="blabla"
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
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>
