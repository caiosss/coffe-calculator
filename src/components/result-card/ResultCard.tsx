import { motion } from "framer-motion";
import { Card } from "../ui/card";

interface ResultProps {
    ml: number;
    g: number;
    description: string;
}

export default function ResultCard({ ml, g, description }: ResultProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <Card className="mt-4 p-4 space-y-3">
                <p className="text-sm text-muted-foreground">
                    Resultado sugerido
                </p>

                <div className="flex gap-8">
                    <div>
                        <p className="text-2xl font-semibold">{ml}ml</p>
                        <p className="text-xs text-muted-foreground">
                            Volume total
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">{g}g</p>
                        <p className="text-xs text-muted-foreground">
                            Café moído
                        </p>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </Card>
        </motion.div>
    )
}