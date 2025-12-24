import Link from "next/link";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Download, Eye } from "lucide-react";

interface PreviewCVProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onClose: () => void;
}

export default function PreviewCV({ open, onOpenChange, onClose }: PreviewCVProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="h-[90vh] w-screen flex flex-col max-w-none">
                <DialogHeader>
                    <DialogTitle>Preview do currículo</DialogTitle>
                    <DialogDescription>Um pequeno preview para o meu currículo caso você não queira baixar o arquivo diretamente.</DialogDescription>
                </DialogHeader>

                <iframe
                    src="/caio_barros_cv.pdf"
                    className="flex-1 w-full rounded-md border"
                />

                <DialogFooter>
                    <Button variant={"ghost"} onClick={onClose} className="cursor-pointer">
                        Voltar
                    </Button>
                    <Button className="cursor-pointer">
                        <Link className="flex items-center" href="/caio_barros_cv.pdf" target="_blank" rel="noopener noreferrer" download={true}>
                            <Download size={16} className="mr-2" />
                            Baixar Currículo
                        </Link>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
