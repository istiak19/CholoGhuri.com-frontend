import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddTourTypeMutation } from "@/redux/features/tour/tour.api";
import { useForm } from "react-hook-form";

interface FormValues {
    name: string;
}

const AddModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [addType] = useAddTourTypeMutation();
    const form = useForm<FormValues>({
        defaultValues: { name: "" },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const res = await addType(data).unwrap();
            if (res.success == true) {
                form.reset();
                setIsOpen(false);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">
                    Add Tour Type
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Tour Type</DialogTitle>
                    <DialogDescription>
                        Enter the name of the new tour type and click save.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tour Type Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter tour type"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter className="space-x-2">
                            <DialogClose asChild>
                                <Button
                                    variant="outline"
                                    className="cursor-pointer"
                                >
                                    Cancel</Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                className="cursor-pointer"
                            >
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddModal;