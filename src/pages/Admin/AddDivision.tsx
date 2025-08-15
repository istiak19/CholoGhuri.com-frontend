import AddDivisionModal from "@/components/modules/Admin/Division/AddDivisionModal";
import { useDeleteDivisionMutation, useGetDivisionQuery } from "@/redux/features/division/division.api";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { DeleteConfirmation } from "@/components/deleteConfirmation";
import type { IDivision } from "@/types";

const AddDivision = () => {
    const { data } = useGetDivisionQuery(undefined);
    const [deleteDivision] = useDeleteDivisionMutation()
    const handleDelete = async (id: string) => {
        try {
            const res = await deleteDivision(id).unwrap();
            console.log(res)
            if (res.success === true) {
                toast.success(res.message);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="max-w-6xl mx-auto w-full px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Division</h2>
                <AddDivisionModal />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((division: IDivision) => (
                    <div
                        key={division._id}
                        className="rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
                    >
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
                            <img
                                src={division.thumbnail}
                                alt={division.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{division.name}</h3>
                        <p className="text-sm text-muted-foreground flex-grow">
                            {division.description}
                        </p>

                        <div className="mt-4 flex justify-end">
                            <DeleteConfirmation itemName="Division" onConfirm={() => handleDelete(division._id)}>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    className="flex items-center gap-1 cursor-pointer"
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </Button>
                            </DeleteConfirmation>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddDivision;