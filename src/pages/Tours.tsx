import TourFilter from "@/components/modules/Tour/TourFilter";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetTourQuery } from "@/redux/features/tour/tour.api";
import type { ITourPackage } from "@/types";
import { useState } from "react";
import { Link, useSearchParams } from "react-router";

const Tours = () => {
    const [searchParams] = useSearchParams();
    const division = searchParams.get("division") || undefined;
    const tourType = searchParams.get("tourType") || undefined;
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const { data } = useGetTourQuery({ division, tourType, page: currentPage, limit });
    const totalPage = data?.meta?.totalPage || 1;

    return (
        <div className="container mx-auto px-5 py-8 grid grid-cols-12 gap-5">
            <TourFilter />
            <div className="col-span-9 w-full">
                <div className="flex flex-col items-end mb-5">
                    <Label className="mb-2">Results per page</Label>
                    <Select onValueChange={(value) => setLimit(Number(value))}>
                        <SelectTrigger className="w-40 cursor-pointer">
                            <SelectValue placeholder="Select limit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Limit</SelectLabel>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {data?.data?.map((item: ITourPackage) => (
                    <div
                        key={item.slug}
                        className="border border-muted rounded-lg shadow-md overflow-hidden mb-6 flex"
                    >
                        <div className="w-2/5 bg-red-500 flex-shrink-0">
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className="object-cover w-full h-full "
                            />
                        </div>
                        <div className="p-6 flex-1">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-3">{item.description}</p>

                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xl font-bold text-primary">
                                    Cost ৳ {item?.costForm?.toLocaleString()}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Max {item.maxGuest} guests
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                <div>
                                    <span className="font-medium">From:</span>{" "}
                                    {item.departureLocation}
                                </div>
                                <div>
                                    <span className="font-medium">To:</span>{" "}
                                    {item.arrivalLocation}
                                </div>
                                <div>
                                    <span className="font-medium">Duration:</span>{" "}
                                    {item.tourPlan.length} days
                                </div>
                                <div>
                                    <span className="font-medium">Min Age:</span> {item.minAge}+
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.amenities.slice(0, 3).map((amenity, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-muted/50 text-primary text-xs rounded-full"
                                    >
                                        {amenity}
                                    </span>
                                ))}
                                {item.amenities.length > 3 && (
                                    <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full">
                                        +{item.amenities.length - 3} more
                                    </span>
                                )}
                            </div>

                            <Button asChild className="w-full">
                                <Link to={`/tours/${item._id}`}>
                                    View Details
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
                {
                    totalPage > 1 && (
                        <div className="flex justify-end">
                            <div>
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                                onClick={() => setCurrentPage((prv) => prv - 1)} />
                                        </PaginationItem>
                                        {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                                            (page) => (
                                                <PaginationItem
                                                    className="cursor-pointer"
                                                    key={page}
                                                    onClick={() => setCurrentPage(page)}
                                                >
                                                    <PaginationLink isActive={currentPage === page}>
                                                        {page}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            )
                                        )}
                                        <PaginationItem>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext className={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                                onClick={() => setCurrentPage((prv) => prv + 1)} />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Tours;