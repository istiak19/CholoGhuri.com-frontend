import { DeleteConfirmation } from "@/components/deleteConfirmation";
import AddModal from "@/components/modules/Admin/Type/AddModal";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDeleteTourTypeMutation, useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

const AddTourType = () => {
    const { data } = useGetTourTypeQuery(undefined);
    const [deleteTourType] = useDeleteTourTypeMutation();

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteTourType(id).unwrap();
            if (res.success == true) {
                toast.success(res.message)
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="max-w-6xl mx-auto w-full px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Tour Types</h2>
                <AddModal />
            </div>
            <Table className="border border-muted rounded-2xl overflow-hidden shadow-sm">
                <TableHeader>
                    <TableRow>
                        <TableHead className="pl-6">Name</TableHead>
                        <TableHead className="text-right pr-6">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((info: { _id: string; name: string }) => (
                        <TableRow
                            key={info._id}
                        >
                            <TableCell className="font-medium pl-6">{info.name}</TableCell>
                            <TableCell className="text-right pr-6">
                                <DeleteConfirmation itemName="Tour Type" onConfirm={() => handleDelete(info._id)}>
                                    <Button
                                        className="p-2 cursor-pointer"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </DeleteConfirmation>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AddTourType;