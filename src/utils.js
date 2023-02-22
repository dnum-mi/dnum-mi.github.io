export const mail = {
  to: 'mailto:user@interieur.gouv.fr?subject=Sujet&body=Corps du courriel',
  label: 'Nous écrire',
}

export const sendEmail = () => {
  window.location = mail.to
}
