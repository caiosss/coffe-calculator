export interface MessageParams {
  activity: string
  strengthText: string
  sugarText: string
}

export const MESSAGE_TEMPLATES = [
  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Para ${activity}, nada melhor do que ${strengthText} ${sugarText}. Produtividade garantida ☕🚀`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `${activity}? Isso claramente pede ${strengthText} ${sugarText}. Confia no processo 🤝☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Encarar ${activity} sem café é ousadia. Ainda bem que você escolheu ${strengthText} ${sugarText} 😌☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `${capitalize(strengthText)} ${sugarText} para enfrentar ${activity}. Boa sorte 🍀☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Café na medida certa para ${activity}: ${strengthText}, ${sugarText} e zero arrependimentos 😎☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `${activity} merece respeito. E respeito começa com ${strengthText} ${sugarText} 💼☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Se ${activity} está no plano, ${strengthText} ${sugarText} está na xícara 📋☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Nada como ${strengthText} ${sugarText} para sobreviver a ${activity}. Você vai precisar 😅☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `${activity} ativado. Café recomendado: ${strengthText} ${sugarText} 🔥☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Esse ${strengthText} ${sugarText} foi cuidadosamente calculado para ${activity}. Ciência pura 🧪☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Para ${activity}, sugerimos ${strengthText} ${sugarText}. O resto é força de vontade 💪☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `${capitalize(strengthText)}, ${sugarText}, pronto para ${activity}. Que comece o jogo 🎮☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Você não escolheu ${strengthText} ${sugarText}. Ele escolheu você para ${activity} 🧠☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `Preparado para ${activity}? ${strengthText} ${sugarText} está do seu lado 🤜🤛☕`,

  ({ activity, strengthText, sugarText }: MessageParams) =>
    `${activity} + ${strengthText} ${sugarText} = combinação perigosa de produtividade ⚠️☕`,
] as const

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

