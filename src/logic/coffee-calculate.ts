import { CoffeeFormData } from "@/components/coffe-form/CoffeeForm";
import { MESSAGE_TEMPLATES, MessageParams } from "./message";

const STRENTGH_MULTIPLIERS: Record<string, number> = {
    FORTE: 1.5,
    SUAVE: 1,
    BEM_FRACO: 0.75,
} as const;


export function calculateCoffee(data: CoffeeFormData) {

    const baseMl = Math.max(200, (data.duration / 60) * 200);
    const adjustedMl = baseMl * STRENTGH_MULTIPLIERS[data.strength];

    const grams = adjustedMl * 0.05;

    const description = buildDescription(data);

    return {
        ml: Math.round(adjustedMl),
        g: Math.round(grams),
        description,
    }
}

function getRandomMessage(params: MessageParams): string {
  const index = Math.floor(Math.random() * MESSAGE_TEMPLATES.length)
  return MESSAGE_TEMPLATES[index](params)
}

function getDurationEmoji(duration: number): string {
  if (duration <= 30) {
    return "☕"
  }

  if (duration <= 90) {
    return "🚀☕"
  }

  return "⚠️☕😅"
}

function buildDescription(data: CoffeeFormData) {
  const strengthText = {
    FORTE: "um café bem forte",
    SUAVE: "um café equilibrado",
    BEM_FRACO: "um café bem leve",
  }[data.strength]

  const sugarText =
    data.sugar === "ACUCAR" ? "com açúcar" : "sem açúcar"

  const baseMessage = getRandomMessage({
    activity: data.activity,
    strengthText,
    sugarText,
  })

  const durationEmoji = getDurationEmoji(data.duration)

  return `${baseMessage} ${durationEmoji}`
}

