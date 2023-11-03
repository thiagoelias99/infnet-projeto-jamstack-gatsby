import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import React from 'react'
import { Button } from "../ui/button"
import SubscriptionForm from "./SubscriptionForm"

export const SubscriptionDialog = () => {

    return (
        <Dialog>
            <DialogTrigger >
                <Button variant="outline">Inscreva-se</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Inscreva-se</DialogTitle>
                    <DialogDescription>Você será notificado sobre novas postagens</DialogDescription>
                </DialogHeader>
                <SubscriptionForm />
            </DialogContent>
        </Dialog>
    )
}
