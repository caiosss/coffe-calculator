'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import ResultCard from "../result-card/ResultCard";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateCoffee } from "@/logic/coffee-calculate";

const coffeeSchema = z.object({
    activity: z.string().min(1, "Atividade é obrigatória"),
    duration: z.number().min(1, "Duração deve ser maior que 0"),
    strength: z.enum(["FORTE", "SUAVE", "BEM_FRACO"]),
    sugar: z.enum(["ACUCAR", "ADOCANTE", "NENHUM"]),
});


export type CoffeeFormData = z.infer<typeof coffeeSchema>;

export default function CoffeeForm() {
    const [result, setResult] = useState<null | {
        ml: number;
        g: number;
        description: string;
    }>(null);

    const form = useForm<CoffeeFormData>({
        resolver: zodResolver(coffeeSchema),
        defaultValues: {
            activity: "",
            duration: 0,
            strength: "SUAVE",
            sugar: "ACUCAR",
        },
    });

    const onSubmit = (data: CoffeeFormData) => {
        const coffee = calculateCoffee(data)
        setResult(coffee)

        form.reset({
            ...data,
        })
    }

    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>
                    Monte sua xícara!
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <Label>Qual a sua atividade?</Label>
                        <Input {...form.register("activity")} placeholder="Ex.: programar, estudar, ler" />
                        {form.formState.errors.activity && (
                            <p className="text-sm text-destructive">
                                {form.formState.errors.activity.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Quanto tempo em média levará sua atividade? (min)</Label>
                        <Input
                            type="number"
                            {...form.register("duration", { valueAsNumber: true })}
                            placeholder="Ex.: 30, 60, 90"
                        />
                        {form.formState.errors.duration && (
                            <p className="text-sm text-destructive">
                                {form.formState.errors.duration.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Controller
                            control={form.control}
                            name="strength"
                            render={({ field }) => (
                                <div className="space-y-2">
                                    <Label>Gosto do café</Label>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="FORTE">Forte</SelectItem>
                                            <SelectItem value="SUAVE">Suave</SelectItem>
                                            <SelectItem value="BEM_FRACO">Bem fraco</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        />
                    </div>

                    <div className="space-y-2">
                        <Controller
                            control={form.control}
                            name="sugar"
                            render={({ field }) => (
                                <div className="space-y-2">
                                    <Label>Açúcar ou adoçante?</Label>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ACUCAR">Açúcar</SelectItem>
                                            <SelectItem value="ADOCANTE">Adoçante</SelectItem>
                                            <SelectItem value="NENHUM">Nenhum</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        />

                    </div>

                    <Button type="submit" className="w-full transition-all active:scale-[0.98] cursor-pointer">
                        Calcular café ☕
                    </Button>

                    {result && <ResultCard {...result} />}
                </form>
            </CardContent>
        </Card >
    )
}