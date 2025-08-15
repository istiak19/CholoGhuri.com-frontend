import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader,
    DialogTitle, DialogTrigger, DialogDescription
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import SingleImageUpload from "@/components/singleImageUpload";
import { useAddDivisionMutation } from "@/redux/features/division/division.api";

interface FormValues {
    name: string;
    description: string
};

const AddDivisionModal = () => {
    const [image, setImage] = useState<File | null>(null)
    const [addDivision] = useAddDivisionMutation();
    const [isOpen, setIsOpen] = useState(false);
    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            description: ""
        },
    });

    const onSubmit = async (data: FormValues) => {
        const formData = new FormData();
        formData.append("data", JSON.stringify(data))
        formData.append("file", image as File);
        try {
            const res = await addDivision(formData).unwrap();
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
                    Add Division
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Division</DialogTitle>
                    <DialogDescription>
                        Enter the name of the new division and click save.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form id="add-division" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Division Name</FormLabel>
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
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Type your description here."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                    <SingleImageUpload onChange={setImage} />
                </Form>
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
                        form="add-division"
                        disabled={!image}
                        className="cursor-pointer"
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddDivisionModal;