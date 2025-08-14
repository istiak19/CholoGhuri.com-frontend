import type { ReactNode } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface IProps {
    children: ReactNode;
    onConfirm: () => void;
    itemName?: string;
};

export function DeleteConfirmation({ children, onConfirm, itemName = "item" }: IProps) {
    const handleConfirm = () => {
        onConfirm();
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete This {itemName}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. The selected {itemName.toLowerCase()} will be permanently removed from the system.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="cursor-pointer"
                        onClick={handleConfirm}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}